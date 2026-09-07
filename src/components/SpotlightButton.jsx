import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = ({ children }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const button = btnRef.current;
    if (!button) return;

    let current = null;
    let target = null;
    let rafId = null;

    const render = () => {
      button.style.setProperty("--x", `${current}px`);
    };

    const tick = () => {
      if (target !== null) {
        if (current === null) current = target;
        const diff = target - current;
        if (Math.abs(diff) < 0.1) {
          current = target;
          render();
          rafId = null;
          return;
        }
        current += diff * 0.16;
        render();
      }
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId === null) rafId = requestAnimationFrame(tick);
    };

    const handleMouseMove = (e) => {
      target = e.clientX - button.getBoundingClientRect().left;
      start();
    };

    const handleMouseLeave = () => {
      target = button.getBoundingClientRect().width / 2;
      start();
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const spotlightMask =
    "radial-gradient(circle 64px at var(--x) 50%, black 99%, transparent 100%)";

  return (
    <motion.button
      ref={btnRef}
      whileTap={{ scale: 0.985 }}
      style={{ "--x": "50%" }}
      className="relative w-full max-w-xs overflow-hidden rounded-lg border border-white bg-primary-dark px-4 py-3 text-lg font-medium text-primary-content dark:bg-primary-light"
    >
      <span className="relative z-10">{children}</span>

      <span
        className="pointer-events-none absolute top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100"
        style={{ left: "var(--x)" }}
      />

      <span
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-background"
        style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
      >
        {children}
      </span>
    </motion.button>
  );
};

export default SpotlightButton;
