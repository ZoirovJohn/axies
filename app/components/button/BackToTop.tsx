import { useEffect, useState } from "react";

export default function BackToTop(): JSX.Element | null {
  const [isActive, setActive] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true); // Mark that the component has mounted on the client
  }, []);

  useEffect(() => {
    if (!isClient) return; // Avoid running on server

    const handleScroll = () => {
      if (window.scrollY > 700) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]); // Trigger effect only after the component is mounted

  // back to top handler
  const backtotopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isClient) {
    return null; // Avoid rendering the component on the server
  }

  return (
    <>
      <a
        id="scroll-top"
        onClick={backtotopHandler}
        className={isActive ? "show" : ""}
      />
    </>
  );
}
