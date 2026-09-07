import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import Reveal from "./utils/Reveal";
import StarIcon from "./utils/StarIcon";
import ForkIcon from "./utils/ForkIcon";

function Portfolio({ onClickProject }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    const item = track.children[i];
    track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const prev = () => scrollToIndex(Math.max(index - 1, 0));
  const next = () => scrollToIndex(Math.min(index + 1, portfolio.length - 1));

  // Keep `index` in sync with manual scrolling/swiping
  useEffect(() => {
    const track = trackRef.current;
    const onScroll = () => {
      const children = [...track.children];
      const closest = children.reduce((best, child, i) => {
        const diff = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
        return diff < best.diff ? { i, diff } : best;
      }, { i: 0, diff: Infinity });
      setIndex(closest.i);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto flex w-full items-center px-6 md:w-10/12 md:px-0">
        <Reveal>
          <p className="font-black text-4xl">
            Projects
            <span
              className="text-primary text-6xl"
              style={{ lineHeight: 0.35 }}
            >
              .
            </span>
          </p>
        </Reveal>
        <div className="grow h-px ml-6 bg-border" />
        <div className="ml-6 flex shrink-0 gap-2">
          <CarouselControl onClick={prev} disabled={index === 0}>
            <path d="M15 18l-6-6 6-6" />
          </CarouselControl>
          <CarouselControl onClick={next} disabled={index === portfolio.length - 1}>
            <path d="M9 6l6 6-6 6" />
          </CarouselControl>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[6vw] sm:px-[12vw] md:px-[19vw] lg:px-[22.5vw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {portfolio.map((project, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[88%] sm:w-[75%] md:w-[62%] lg:w-[55%]"
          >
            <PortfolioItem
              title={project.title}
              year={project.year}
              imageUrl={project.imageUrl}
              github={project.github}
              repo={project.repo}
              skills={project.skills}
              summary={project.summary}
              onClickItem={() => { onClickProject(project) }}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {portfolio.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-copy-lighter"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

const CarouselControl = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={disabled ? undefined : "Navigate carousel"}
      className="rounded-full border border-border p-2 text-stone-300 transition ease-in-out hover:border-primary hover:bg-primary hover:text-primary-content disabled:pointer-events-none disabled:opacity-40"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        {children}
      </svg>
    </button>
  );
};

function PortfolioItem({ title, year, imageUrl, github, repo, skills, summary, onClickItem }) {
  const imageVariant = {
    initial: { rotate: 0, scale: 1 },
    animate: { rotate: 2, scale: 1.1 },
  };

  const githubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current size-4"
      viewBox="0 0 24 24"
    >
      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClickItem}
      className="group flex h-full flex-col cursor-pointer  rounded-2xl bg-foreground/60 transition-colors duration-300 "
    >
      
      <motion.div className="relative aspect-video shrink-0" >
        <div className="size-full p-4">
          <img
            src={imageUrl}
            alt={title}
            className="size-full rounded-md object-cover transition-transform duration-250 ease-out group-hover:rotate-2 group-hover:scale-110"
          />
        </div>
        
        <div className="absolute bottom-3 start-3 flex flex-wrap gap-1.5">
          <ProjectMetaData repo={repo} />
          <span className="flex items-center rounded-full bg-background/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            &copy; {year}
          </span>
        </div>
      </motion.div>

      <div className="flex grow flex-col p-5">
        <div className="flex items-center gap-3">
          <p className="truncate text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </p>
          <div className="h-px grow bg-border" />
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-stone-300 transition ease-in-out hover:border-primary hover:bg-primary hover:text-primary-content"
          >
            {githubIcon} GitHub
          </a>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-copy-light">
          {summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {skills.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectMetaData({ repo }) {
  const [repoData, setRepoData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/alibardide-dev/${repo}`)
      .then(response => response.json())
      .then(data => setRepoData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [repo]);

  return (
    <div className="flex gap-1.5">
      <span className="flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
        <StarIcon className="size-3.5 fill-white" /> {repoData.stargazers_count}
      </span>
      <span className="flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
        <ForkIcon className="size-3.5 fill-white" /> {repoData.forks_count}
      </span>
    </div>
  );
}

export default Portfolio;
