import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2026</p>
          <h2 className="text-4xl font-bold">My Scholarship</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CHED Tulong Dunong Scholarship"
            subTitle="Central Mindanao University (2024-2025)"
            result="Completed"
            des="I was awarded a full scholarship to study at Central Mindanao University."
          />
          <ResumeCard
             title="CHED Tulong Dunong Scholarship"
             subTitle="Central Mindanao University (2022-2023)"
             result="Completed"
             des="I was awarded a full scholarship to study at Central Mindanao University."
          />
          <ResumeCard
            title="College Scholarship"
            subTitle="Central Mindanao University (2020-2021)"
            result="Completed"
            des="I was awarded a full scholarship to study at Central Mindanao University."
          />
        </div>
      </div>

      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2026</p>
          <h2 className="text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="TESDA Online Program"
            subTitle="Microsoft Cybersecurity Course: Security, Compliance, and Identity Fundamentals"
            result="Completed"
            des={ "Certificate of Completion for the Microsoft Cybersecurity Course: Security, Compliance, and Identity Fundamentals. Awarded on: Thursday, 16 July 2026, 11:19 PM"
            }
          />
      </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
