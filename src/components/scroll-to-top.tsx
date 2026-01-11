"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToTop component that scrolls to the top of the page
 * when the route changes in Next.js App Router
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    // Disable browser's automatic scroll restoration to prevent conflicts
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }

    // Skip scroll on initial mount (when prevPathnameRef is null)
    if (prevPathnameRef.current === null) {
      prevPathnameRef.current = pathname;
      return;
    }

    // Only scroll if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      // Scroll to top when pathname changes
      // Use multiple attempts with delays to ensure it works reliably
      // and happens after Next.js completes navigation
      const scrollToTop = () => {
        // Try multiple scroll methods to ensure compatibility
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });

        // Direct property assignment as fallback
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        if (document.body) {
          document.body.scrollTop = 0;
        }
      };

      // Scroll immediately
      scrollToTop();

      // Scroll after render cycle completes
      requestAnimationFrame(() => {
        scrollToTop();
        // One more scroll after a small delay to catch any late updates
        setTimeout(scrollToTop, 100);
      });
    }
  }, [pathname]);

  return null;
}
