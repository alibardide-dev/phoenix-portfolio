import React, { useRef } from "react";
import timeline from "../data/timeline";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "./utils/Reveal";

function Timeline() {
  return (
    <div className="w-full md:w-9/12 p-8 md:p-0 items-center mx-auto justify-center">
      <div className="flex flex-row items-center justify-between">
        <Reveal>
          <p className="font-black text-4xl">
            Experiece
            <span
              className=" text-6xl"
              style={{ lineHeight: 0.35 }}
            >
              .
            </span>
          </p>
        </Reveal>
        <div className="grow h-px ml-6 bg-gray-500" />
      </div>
      {timeline.map((item, index) => (
        <div key={index} className="mx-4 w-9.12">
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        </div>
      ))}
    </div>
  );
}

function TimelineItem({ year, title, duration, details }) {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    once: true,
    margin: "0px 0px -15% 0px",
    amount: "all",
  });

  return (
    <motion.div
      layout
      ref={targetRef}
      className="relative flex items-center justify-center rounded-md border-dashed border-2 border-[#212121] dark:border-[#FAFAFA] w-full my-6 min-h-48"
    >
      <AnimatePresence>
        {isInView && (
          <Reveal>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="p-4">
                <div className="left flex flex-row gap-2 items-center">
                  <p className="rounded-md font-bold bg-primary text-primary-content text-4xl p-1">
                    {year}
                  </p>
                  <p className="hidden md:block text-2xl font-bold">{title}</p>
                </div>
                <div className="md:hidden">
                  <p className="text-2xl font-bold">{title}</p>
                </div>
                <p className="md:mx-4 mt-2 text-md text-justify">{details}</p>
              </div>
            </motion.div>
          </Reveal>

        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isInView && <motion.p className="absolute text-4xl">?</motion.p>}
      </AnimatePresence>
    </motion.div>
  );
}

export default Timeline;
