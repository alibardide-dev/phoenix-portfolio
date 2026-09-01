// src/components/Header.js
import React from "react";
import Social from "./Social";

const Header = () => {
  const supportsBackdropFilter = CSS.supports("backdrop-filter", "blur(10px)");
  const headerStyle = supportsBackdropFilter
    ? "backdrop-blur-md fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4"
    : "bg-background bg-opacity-5 dark:bg-opacity-40 fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4";

  return (
    <header className={headerStyle}>
      <div className="flex flex-row ml-10">
        <h1 className="hidden md:block pl-2 text-2xl font-bold">
          Ali <span className="text-primary hover:underline">Bardide</span>
        </h1>
        <h1 className="md:hidden pl-2 text-2xl font-bold flex">A<span className="text-secondary">B.</span></h1>
      </div>
      <Social />
    </header>
  );
};

export default Header;
