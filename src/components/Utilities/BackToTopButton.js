import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      className="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp size={25} />
    </button>
  ) : null;
}

export default BackToTopButton;
