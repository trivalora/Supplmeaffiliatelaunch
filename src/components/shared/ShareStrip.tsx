"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function ShareStrip() {
  const [showFacebookModal, setShowFacebookModal] = useState(false);
  const [showTwitterModal, setShowTwitterModal] = useState(false);
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);

  const handleShare = (platform: string) => {
    // Track share click
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "social_share",
        platform: platform,
        url: window.location.href,
      });
    }

    if (platform === "facebook") {
      setShowFacebookModal(true);
      return;
    }

    if (platform === "twitter") {
      setShowTwitterModal(true);
      return;
    }

    if (platform === "linkedin") {
      setShowLinkedInModal(true);
      return;
    }
  };

  return (
    <>
      {/* Simple sharing strip */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 py-4 px-4 bg-primary dark:bg-primary/20 rounded-lg border border-secondary/20">
        <p className="text-white dark:text-secondary text-sm font-medium whitespace-nowrap">
          Spread the word if you like what we do
        </p>
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <button
            onClick={() => handleShare("facebook")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#1665D8] transition-colors"
            aria-label="Share on Facebook"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Twitter */}
          <button
            onClick={() => handleShare("twitter")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800 transition-colors"
            aria-label="Share on X (Twitter)"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => handleShare("linkedin")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] hover:bg-[#095196] transition-colors"
            aria-label="Share on LinkedIn"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Facebook Share Modal - Embedded on page */}
      {showFacebookModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowFacebookModal(false)}
        >
          <div
            className="bg-white dark:bg-[#18191a] rounded-2xl shadow-2xl max-w-xl w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowFacebookModal(false)}
              className="absolute top-4 right-4 z-10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors bg-white/80 dark:bg-black/40 rounded-full p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Facebook iframe embed */}
            <iframe
              src={`https://www.facebook.com/plugins/share_button.php?href=${encodeURIComponent(
                window.location.href
              )}&layout=button_count&size=large&width=500&height=600&appId`}
              width="100%"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      )}

      {/* Twitter Share Modal - Embedded on page */}
      {showTwitterModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowTwitterModal(false)}
        >
          <div
            className="bg-white dark:bg-[#15202b] rounded-2xl shadow-2xl max-w-xl w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowTwitterModal(false)}
              className="absolute top-4 right-4 z-10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors bg-white/80 dark:bg-black/40 rounded-full p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Twitter iframe embed */}
            <iframe
              src={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                window.location.href
              )}&text=${encodeURIComponent(
                "Check out suppl.me for evidence-based supplement information!"
              )}`}
              width="100%"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="yes"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      )}

      {/* LinkedIn Share Modal - Embedded on page */}
      {showLinkedInModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowLinkedInModal(false)}
        >
          <div
            className="bg-white dark:bg-[#1b1f23] rounded-2xl shadow-2xl max-w-xl w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLinkedInModal(false)}
              className="absolute top-4 right-4 z-10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors bg-white/80 dark:bg-black/40 rounded-full p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LinkedIn iframe embed */}
            <iframe
              src={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                window.location.href
              )}`}
              width="100%"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="yes"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
