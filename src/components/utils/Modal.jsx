import { useEffect } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "./GitHubIcon";

const BackDrop = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="fixed inset-0 z-50 overflow-y-auto bg-background/80 backdrop-blur-sm"
    >
      {children}
    </motion.div>
  );
};

const Modal = ({ project, handleClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  return (
    <BackDrop onClick={handleClose}>
      <div className="flex min-h-screen w-full items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-foreground"
        >
          <div className="relative">
            <img
              className="aspect-video w-full object-cover"
              src={project.imageUrl}
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
            <button
              onClick={handleClose}
              aria-label="Close"
              className="group absolute end-3 top-3 rounded-full border border-border bg-background/70 p-2 text-white backdrop-blur-sm transition ease-in-out hover:border-primary hover:bg-primary hover:text-primary-content"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <span className="absolute bottom-3 start-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              &copy; {project.year}
            </span>
          </div>

          <div className="flex flex-col gap-4 p-6 md:p-8">
            <h1 className="text-2xl font-bold text-stone-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-sm font-medium text-stone">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="whitespace-pre-line text-sm leading-relaxed text-stone-600 dark:text-copy-light">
              {project.description}
            </p>

            <div className="mt-2 flex items-center gap-3">
              <p className="shrink-0 text-lg font-black">
                Project Links
                <span
                  className="text-primary text-2xl"
                  style={{ lineHeight: 0.35 }}
                >
                  .
                </span>
              </p>
              <div className="h-px grow bg-border" />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-stone-300 transition ease-in-out hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                <GitHubIcon className="fill-current size-4" /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </BackDrop>
  );
};

export default Modal;
