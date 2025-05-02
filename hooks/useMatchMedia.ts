import { useEffect, useState } from "react";

export default function useMatchMedia(media: string): boolean | null {
  const [isMatch, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const matchFn = () => {
        const match = window.matchMedia(media);
        setMatch(match.matches);
      };

      matchFn(); // Check on first load
      window.onresize = matchFn; // Update on resize

      return () => {
        window.onresize = null; // Clean up
      };
    }
  }, [media]); // Re-run if the media query changes

  return isMatch;
}
