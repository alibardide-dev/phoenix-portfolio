import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./utils/Reveal";
import FlipText from "./FlipText";
import stack_work from "../data/stack_work";
import stack_fun from "../data/stack_fun";

function Stack() {
  const code = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      className="fill-primary size-8"
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z" />
    </svg>
  );
  const gamepad = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      className="fill-primary size-8"
    >
      <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm120-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm300 0q25 0 42.5-17.5T640-420q0-25-17.5-42.5T580-480q-25 0-42.5 17.5T520-420q0 25 17.5 42.5T580-360Zm120-120q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480ZM160-320v-320 320Z" />
    </svg>
  );
  return (
    <div className="flex flex-col p-8 w-full items-center justify-center">
      <div className="flex flex-col w-full md:w-9/12">
        <div className="flex flex-row items-center justify-between">
          <Reveal>
            <p className="font-black text-4xl">
              Skills
              <span
                className="text-primary text-6xl"
                style={{ lineHeight: 0.35 }}
              >
                .
              </span>
            </p>
          </Reveal>
          <div className="grow h-px ml-6 bg-gray-500" />
        </div>
        <Reveal>
          <p className="flex flex-wrap gap-2 items-center text-base md:text-lg">
            I craft{" "}
            <span className="text-[#48BF84] font-bold">
              <FlipText>Android</FlipText>
            </span>{" "}
            apps with{" "}
            <span className="text-[#AF3E4D] font-bold">
              <FlipText>Laravel</FlipText>
            </span>{" "}
            server side
          </p>
        </Reveal>
      </div>
      <StackContainer>
        <NearStack
          name="Android"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/android/android-original.svg"
          top="35%"
          left="70%"
        />
        <NearStack
          name="Android Studio"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/androidstudio/androidstudio-original.svg"
          top="50%"
          left="43%"
        />
        <NearStack
          name="Jetpack Compose"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/jetpackcompose/jetpackcompose-original.svg"
          top="17%"
          left="47%"
        />
        <NearStack
          name="Laravel"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/laravel/laravel-original.svg"
          top="17%"
          left="15%"
        />
        <NearStack
          name="Kotlin"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/kotlin/kotlin-original.svg"
          top="60%"
          left="20%"
        />
        <FarStack
          name="Java"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-original.svg"
          top="50%"
          left="15%"
        />
        <FarStack
          name="Git"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/git/git-original.svg"
          top="60%"
          left="80%"
        />
        <FarStack
          name="Linux"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/linux/linux-original.svg"
          top="30%"
          left="80%"
        />
        <FarStack
          name="Github"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original.svg"
          top="25%"
          left="35%"
        />
        <FarStack
          name="php"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/php/php-original.svg"
          top="40%"
          left="60%"
        />
        <FarStack
          name="MongoDB"
          imageUrl="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original.svg"
          top="45%"
          left="28%"
        />
      </StackContainer>
      <div className="flex flex-col justify-center w-full md:flex-row py-4">
        <div className="flex flex-col w-full md:w-4/12">
          <Reveal>
            <p className="flex flex-row text-lg items-center w-full gap-4">
              {code}
              Use at work
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap px-2 p-1 gap-2 overflow-visible">
              {stack_work.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/30 px-3 py-2 text-xs font-medium "
                >
                  {item.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col w-full md:w-4/12">
          <Reveal>
            <p className="flex flex-row text-lg items-center w-full gap-4">
              {gamepad}
              Use for fun
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap px-2 p-1 gap-2">
              {stack_fun.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/30 px-3 py-2 text-xs font-medium "
                >
                  {item.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

const StackContainer = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85, 1],
    [0.5, 1, 1, 0.75]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.85, 1],
    [0, 0, 1, 1, 0]
  );

  return (
    <div className="w-full md:w-[65vw] relative mt-4">
      <motion.div
        ref={targetRef}
        style={{
          scale,
          opacity,
        }}
        className="absolute w-full border-dashed border-2 border-[#212121] dark:border-[#FAFAFA] md:w-[65vw] h-[65vh] p-8 rounded-lg"
      ></motion.div>
      <div className="w-full md:w-[65vw] h-[65vh] p-8">{children}</div>
    </div>
  );
};

const NearStack = ({ name, imageUrl, top, left }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.35], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [0, 0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "#FAFAFA",
        borderRadius: "12px",
        padding: "8px",
        backgroundSize: "90% 90%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        top,
        left,
        scale,
        opacity,
        y,
      }}
      ref={targetRef}
      className="absolute h-16 md:h-24 w-16 md:w-24 z-10 cursor-pointer"
    ></motion.div>
  );
};

const FarStack = ({ name, imageUrl, top, left }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.35], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [0, 0, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "#FAFAFA",
        borderRadius: "12px",
        padding: "8px",
        backgroundSize: "90% 90%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        top,
        left,
        scale,
        opacity,
        y,
      }}
      ref={targetRef}
      className="absolute h-12 md:h-16 w-12 md:w-16 z-8 cursor-pointer"
    ></motion.div>
  );
};

export default Stack;
