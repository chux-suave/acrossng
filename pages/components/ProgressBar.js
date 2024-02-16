import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const handleScroll = debounce(() => {
    const scrollPos = window.scrollY;
    const maxScrollPos =
      document.documentElement.scrollHeight - window.innerHeight;
    const whichever = Math.round((scrollPos / maxScrollPos) * 100);

    setScrollPercentage(whichever);
    console.log(scrollPercentage);
  }, 100);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`relative z-0 top-0 left-0 bg-yellow-600  h-5 transition-width duration-300 w-[${scrollPercentage}px] `}
    >
      {scrollPercentage}
    </div>
  );
};

export default ProgressBar;
