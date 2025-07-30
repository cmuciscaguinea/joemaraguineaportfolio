import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
              title="Computer Laboratory Technician"
              subTitle="Central Mindanao University - (July 16, 2025 - Present)"
              result="Employed"
              des="I am currently employed at Central Mindanao University with the designation or Position of Computer Laboratory Technician under the College of Information Sciences and Computing College or Unit"
            />
          <ResumeCard
            title="On-the-Job Trainer"
            subTitle="Ghost Edit - (Janaury 28, 2025 - April 30, 2025)"
            result="Finished"
            des="The AI Video Editing, Podcast Editing, and Content Creation Training is a thorough program aimed at equipping individuals with essential skills to thrive in the fast-paced world of digital content."
          />
          <ResumeCard
            title="Student Assistantship Program"
            subTitle="Central Mindanao University - (September 2022 - January 2025)"
            result="Finished"
            des="The Student Assistantship Program (SAP) is a program that provides students with the opportunity to work part-time while pursuing their studies."
          />
          <ResumeCard
            title="DSWD: KAHALI-CIDSS Cash-For-Work Program"
            subTitle="Central Mindanao University - (June 2024 - November 2024)"
            result="Finished"
            des="The DSWD KAHALI-CIDSS Cash-For-Work Program is a government initiative that provides temporary employment opportunities to individuals in need."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-4xl font-bold">Seminar Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Pre-Deployment OJT Seminar"
            subTitle="Central Mindanao University - (January 21-22, 2025)"
            result="Finished"
            des="The Pre-Deployment OJT Seminar is a program designed to prepare students for their upcoming on-the-job training (OJT) experience."
          />
          <ResumeCard
            title="IT Trips and Seminar"
            subTitle="Cagayan de Oro City & Cebu City (March 18-24, 2024)"
            result="Finished"
            des="The IT Trips and Seminar is an educational program that provides students with the opportunity to visit various IT companies and attend seminars."
          />
          <ResumeCard
            title="Multimedia Technologies and Production Training Seminar"
            subTitle="CISC Training Room - Central Mindanao University (October 8, 2023)"
            result="Finished"
            des="The Multimedia Technologies and Production Training Seminar is an educational program that focuses on the latest advancements in multimedia technologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
