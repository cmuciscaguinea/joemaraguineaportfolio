import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPhp } from "react-icons/fa";
import { SiFlutter, SiFigma, SiLaravel } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {/* <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span> */}


            <a href="https://joemaraguinea.netlify.app/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FiGlobe />
            </a>
            <a href="https://www.linkedin.com/in/joemar-aguinea/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/JoemarMaglasangAguinea" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPhp />
            </span>
            <span className="bannerIcon">
              <SiLaravel />
            </span>
            <span className="bannerIcon">
              <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media