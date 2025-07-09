import { useEffect, useState } from "react";

export default function BackToTop(): JSX.Element | null {
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
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
  }, []); // Trigger effect only after the component is mounted

  // back to top handler
  const backtotopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
