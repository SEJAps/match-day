import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 300; // px

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      aria-label="Volver arriba"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/60
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
      bg-neutral-800/80 border-white/10 hover:bg-neutral-800/95 backdrop-blur px-3.5 py-3`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-neutral-100"
      >
        <path d="M12 4l-7 7h4v9h6v-9h4z" />
      </svg>
    </button>
  );
};

export default BackToTop;
