// ========================================
// TIME TRACKING UTILITY
// ========================================

import { trackTimeOnPage, trackEngagementTime, trackExitIntent } from './analytics';

class TimeTracker {
  private pageName: string = '';
  private pageStartTime: number = 0;
  private engagedTime: number = 0;
  private isEngaged: boolean = true;
  private engagementTimer: NodeJS.Timeout | null = null;
  private trackingInterval: NodeJS.Timeout | null = null;
  private exitIntentTracked: boolean = false;

  // Initialize time tracking for a page
  initialize(pageName: string) {
    this.pageName = pageName;
    this.pageStartTime = Date.now();
    this.engagedTime = 0;
    this.isEngaged = true;
    this.exitIntentTracked = false;

    // Track engagement based on user activity
    this.startEngagementTracking();

    // Track time on page every 30 seconds
    this.startTimeTracking();

    // Track exit intent
    this.attachExitIntentListeners();
  }

  // Start tracking engaged time
  private startEngagementTracking() {
    // Reset engagement on user activity
    const resetEngagement = () => {
      this.isEngaged = true;
      if (this.engagementTimer) {
        clearTimeout(this.engagementTimer);
      }
      // Consider user inactive after 30 seconds of no activity
      this.engagementTimer = setTimeout(() => {
        this.isEngaged = false;
      }, 30000);
    };

    // Attach activity listeners
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach((event) => {
      document.addEventListener(event, resetEngagement, { passive: true });
    });

    // Start engagement timer
    this.engagementTimer = setInterval(() => {
      if (this.isEngaged) {
        this.engagedTime += 1; // Add 1 second
      }
    }, 1000);

    resetEngagement(); // Initialize
  }

  // Track time on page periodically
  private startTimeTracking() {
    // Track every 30 seconds
    this.trackingInterval = setInterval(() => {
      const timeSpent = Math.round((Date.now() - this.pageStartTime) / 1000);
      trackTimeOnPage(this.pageName, timeSpent);
      trackEngagementTime(this.pageName, this.engagedTime);
    }, 30000);
  }

  // Attach exit intent listeners
  private attachExitIntentListeners() {
    // Track when user leaves the page
    const handleBeforeUnload = () => {
      this.trackExit();
    };

    // Track when user moves mouse out of viewport (desktop exit intent)
    const handleMouseOut = (e: MouseEvent) => {
      if (!this.exitIntentTracked && e.clientY <= 0) {
        this.trackExitIntent();
      }
    };

    // Track visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeOnPage = Math.round((Date.now() - this.pageStartTime) / 1000);
        trackEngagementTime(this.pageName, this.engagedTime);
        trackTimeOnPage(this.pageName, timeOnPage);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  // Track exit intent
  private trackExitIntent() {
    if (this.exitIntentTracked) return;
    this.exitIntentTracked = true;

    const timeOnPage = Math.round((Date.now() - this.pageStartTime) / 1000);
    trackExitIntent(this.pageName, timeOnPage);
  }

  // Track final time on page when leaving
  private trackExit() {
    const timeSpent = Math.round((Date.now() - this.pageStartTime) / 1000);
    trackTimeOnPage(this.pageName, timeSpent);
    trackEngagementTime(this.pageName, this.engagedTime);
  }

  // Cleanup
  reset() {
    if (this.engagementTimer) {
      clearTimeout(this.engagementTimer);
    }
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
    }
    this.engagedTime = 0;
    this.exitIntentTracked = false;
  }
}

export const timeTracker = new TimeTracker();
