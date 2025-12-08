"use client";

export function ShareStripInline() {
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
      // Open in popup window
      const width = 600;
      const height = 500;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      window.open(
        shareUrl,
        "shareWindow",
        `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
      );
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
        })
        .catch(() => {
          // User cancelled or error
        });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 py-4 px-4 bg-primary dark:bg-primary/20 rounded-lg border border-secondary/20">
      <p className="text-white dark:text-secondary text-sm font-medium whitespace-nowrap">
        Spread the word if you like what we do
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleShare("facebook")}
          className="text-white dark:text-secondary hover:opacity-80 transition-opacity p-2 hover:bg-white/10 dark:hover:bg-secondary/10 rounded-full"
          aria-label="Share on Facebook"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => handleShare("twitter")}
          className="text-white dark:text-secondary hover:opacity-80 transition-opacity p-2 hover:bg-white/10 dark:hover:bg-secondary/10 rounded-full"
          aria-label="Share on X (Twitter)"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>
        <button
          onClick={() => handleShare("linkedin")}
          className="text-white dark:text-secondary hover:opacity-80 transition-opacity p-2 hover:bg-white/10 dark:hover:bg-secondary/10 rounded-full"
          aria-label="Share on LinkedIn"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleNativeShare}
          className="text-white dark:text-secondary hover:opacity-80 transition-opacity p-2 hover:bg-white/10 dark:hover:bg-secondary/10 rounded-full"
          aria-label="Share via other methods"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
