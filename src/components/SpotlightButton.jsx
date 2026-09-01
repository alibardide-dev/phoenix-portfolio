import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = ({ children }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const button = btnRef.current;
    const spotlight = spanRef.current;

    if (!button || !spotlight) return;

    const handleMouseMove = (e) => {
      const { width } = button.getBoundingClientRect();
      const offset = e.clientX - button.getBoundingClientRect().left;
      const left = `${(offset / width) * 100}%`;

      spotlight.animate(
        { left },
        { duration: 250, fill: "forwards" }
      );
    };

    const handleMouseLeave = () => {
      spotlight.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      ref={btnRef}
      whileTap={{ scale: 0.985 }}
      className="relative w-full max-w-xs overflow-hidden rounded-lg border border-white bg-primary-dark px-4 py-3 text-lg font-medium text-[#212121] dark:bg-primary-light"
    >
      <span className="pointer-events-none relative z-10 mix-blend-multiply">
        {children}
      </span>

      <span
        ref={spanRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default SpotlightButton;