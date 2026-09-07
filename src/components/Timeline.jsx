import React, { useRef } from "react";
import timeline from "../data/timeline";
import { motion, useInView } from "framer-motion";
import Reveal from "./utils/Reveal";

function Timeline() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background via-foreground to-background"
      />

      <div className="relative px-6 py-8 md:px-16 md:py-16">
        <div className="mx-auto w-full md:max-w-10/12">
          <div className="flex items-center">
            <Reveal>
              <p className="font-black text-4xl">
                Experience
                <span
                  className="text-primary text-6xl"
                  style={{ lineHeight: 0.35 }}
                >
                  .
                </span>
              </p>
            </Reveal>
            <div className="grow h-px ml-6 bg-border" />
          </div>

          <div className="relative mt-12">
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary via-border to-transparent"
            />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, title, details }) {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    once: true,
    margin: "0px 0px -15% 0px",
  });

  return (
    <motion.div
      ref={targetRef}
      initial={{ opacity: 0, x: -32 }}
      animate={isInView ? { opacity: 1, x: 0 } : undefined}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative pl-8 md:pl-10 text-left"
    >
      <span
        aria-hidden
        className="absolute left-0 top-2.5 -translate-x-1/2 size-3 rounded-full bg-primary ring-4 ring-primary/25"
      />
      <p className="inline-block rounded-full bg-primary/15 px-3 py-1 text-s font-semibold uppercase tracking-widest">
        {year}
      </p>
      <h3 className="mt-3 text-2xl font-bold text-stone-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 leading-relaxed text-stone-600 dark:text-copy-light">
        {details}
      </p>
    </motion.div>
  );
}

export default Timeline;
