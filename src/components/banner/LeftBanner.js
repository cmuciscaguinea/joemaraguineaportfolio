import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["UI/UX Designer.", "Web Developer.", "Mobile Developer.", "Video Editor."],
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
        <p className=" text-justify text-base font-bodyFont leading-6 tracking-wide">
        I am a BSIT student majoring in Software Development at Central Mindanao University, 
        located in University Town, Musuan, Maramag, Bukidnon, Philippines. 
        I specialize in building dynamic web applications using Laravel and crafting clean, 
        user-centered interface designs with Figma. 
        My technical skill set spans both frontend and backend development, 
        with additional experience in mobile app development using Flutter. 
        I also have a growing passion for video editing, working on various projects such as podcasts, 
        AI course videos, and SEO content.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
