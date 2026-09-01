import React from "react";
import { clamp, motion } from "framer-motion";
import GitHubIcon from "./GitHubIcon";
import CloseIcon from "./CloseIcon";

const BackDrop = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className=" fixed top-0 left-0 z-50 overflow-scroll h-screen w-screen bg-background bg-opacity-30"
    >
      {children}
    </motion.div>
  );
};

const Modal = ({ project, handleClose }) => {
  return (
    <BackDrop onClick={handleClose}>
      <div className=" flex items-center justify-center w-full min-h-screen min-w-screen items-center justify-center">
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          exit={{ y: "20%", opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{ width: clamp("50%", "600px", "90%") }}
          className="relative flex flex-col mb-10 mt-10 mx-6 rounded-md bg-foreground "
        >
          <img className="w-full aspect-[16/9]" src={project.imageUrl} />
          <div 
          onClick={handleClose}
        className="absolute start-0 top-0 m-3 group transition ease-in-out rounded-md items-center justify-center p-1 border-2 border-white hover:bg-stone-300 bg-white cursor-pointer">
            <CloseIcon className="transition ease-in-out fill-copy size-5 group-hover:fill-black" />
          </div>
          <h1 className="text-lg px-4 my-2">{project.title}</h1>
          <div className="flex flex-wrap px-2  gap-2 overflow-visible">
              {project.skills.map((item, index) => (
                <div key={index} className="rounded-md p-2 bg-border">
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          <p className="text-xs px-4 mt-4" style={{ lineHeight: 2 }}>
            {project.description}
          </p>
          <p className="text-lg px-4 mt-6 font-black">
            Project Links
            <span
              className="text-primary text-2xl"
              style={{ lineHeight: 0.35 }}
            >
              .
            </span>
          </p>
          <a
            href={project.github}
            className="flex flex-row px-4 mt-2 group mb-8 items-center transition ease-in-out text-xs text-copy hover:text-primary-light gap-2"
          >
            <GitHubIcon className="transition ease-in-out fill-copy size-6 group-hover:fill-primary-light" />{" "}
            GitHub
          </a>
        </motion.div>
      </div>
    </BackDrop>
  );
};

export default Modal;
