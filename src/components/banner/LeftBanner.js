import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Web Developer.",
        "Mobile Developer.",
        "UI/UX Designer.",
        "Computer Laboratory Technician.",
        "Video Editor."
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Joemar M. Aguinea</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide [text-align:justify]">
          I'm a BSIT graduate specializing in Software Development with a passion for
          creating modern web and mobile applications. I currently work as a Computer
          Laboratory Technician at Central Mindanao University while continuously
          improving my skills in Laravel, Flutter, UI/UX design, and cybersecurity.
          I enjoy building user-focused digital solutions and exploring new
          technologies that solve real-world problems.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
