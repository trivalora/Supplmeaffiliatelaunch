"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function ShareModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Check out suppl.me for evidence-based supplement information!"
    );

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }

    // Track share click
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "social_share",
        platform: platform,
        url: window.location.href,
      });
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);

      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "social_share",
          platform: "copy_link",
          url: window.location.href,
        });
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleNativeShare = () => {
    const url = window.location.href;
    const text =
      "Check out suppl.me for evidence-based supplement information!";

    if (navigator.share) {
      navigator
        .share({
          title: "suppl.me",
          text: text,
          url: url,
        })
        .then(() => {
          if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
              event: "social_share",
              platform: "native_share",
              url: window.location.href,
            });
          }
          setIsOpen(false);
        })
        .catch(() => {
          // User cancelled
        });
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 py-4 px-4 bg-primary dark:bg-primary/20 rounded-lg border border-secondary/20">
        <p className="text-white dark:text-secondary text-sm font-medium whitespace-nowrap">
          Spread the word if you like what we do
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 bg-white/20 dark:bg-secondary/20 hover:bg-white/30 dark:hover:bg-secondary/30 text-white dark:text-secondary rounded-lg transition-all font-medium text-sm"
        >
          Share
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white dark:bg-primary rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 dark:text-secondary/60 hover:text-gray-700 dark:hover:text-secondary transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-secondary mb-2">
              Share this page
            </h3>
            <p className="text-sm text-gray-600 dark:text-secondary/70 mb-6">
              Help others discover evidence-based supplement information
            </p>

            {/* Social Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleShare("facebook")}
                className="w-full flex items-center gap-4 p-4 bg-[#1877F2] hover:bg-[#1665D8] text-white rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Share on Facebook</span>
              </button>

              <button
                onClick={() => handleShare("twitter")}
                className="w-full flex items-center gap-4 p-4 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-medium">Share on X (Twitter)</span>
              </button>

              <button
                onClick={() => handleShare("linkedin")}
                className="w-full flex items-center gap-4 p-4 bg-[#0A66C2] hover:bg-[#095196] text-white rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Share on LinkedIn</span>
              </button>

              {navigator.share && (
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center gap-4 p-4 bg-gray-100 dark:bg-secondary/10 hover:bg-gray-200 dark:hover:bg-secondary/20 text-gray-900 dark:text-secondary rounded-lg transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span className="font-medium">More options...</span>
                </button>
              )}
            </div>

            {/* Copy Link */}
            <div className="pt-4 border-t border-gray-200 dark:border-secondary/20">
              <label className="block text-sm font-medium text-gray-700 dark:text-secondary/80 mb-2">
                Or copy link
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={window.location.href}
                  className="flex-1 px-4 py-2 bg-gray-50 dark:bg-secondary/5 border border-gray-300 dark:border-secondary/20 rounded-lg text-sm text-gray-700 dark:text-secondary"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors font-medium text-sm whitespace-nowrap"
                >
                  {copiedUrl ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
