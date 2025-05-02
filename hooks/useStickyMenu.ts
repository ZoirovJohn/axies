import { useEffect, useState } from "react";

export default function useStickyMenu(top: number = 10) {
  const [isSticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setSticky(scrollTop > top);
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener when component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [top]); // The effect depends on the 'top' value

  return isSticky;
}
