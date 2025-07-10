import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Attainment</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Science in Information Technology"
            subTitle="Central Mindanao University (2020 - 2025)"
            // subTitle="College of Information Sciences and Computing (2020 - 2025)"
            result="Graduated"
            des="Central Mindanao University is a public university in the Philippines located in Musuan, Maramag, Bukidnon."
          />
          <ResumeCard
            title="Senior High School"
            subTitle="Bukidnon National School of Home Industries  (2018 - 2020)"
            result="Graduated"
            des="Science Technology Engineering and Mathematics (STEM) is a strand under the Academic Track of the K-12 curriculum."
          />
          <ResumeCard
            title="Junior High School"
            subTitle="Kitubo National High School (2014-2018)"
            result="Graduated"
            des="Kitubo National High School is a public secondary school located in the Barangay Kitubo, Kitaotao, Bukidnon, Philippines."
          />
          <ResumeCard
            title="Primary School"
            subTitle="Balocbocan Elementary School (2008-2014)"
            result="Gradauted"
            des="Balocbocan Elementary School is a primary school located in the Barangay Balocbocan, Kitaotao, Bukidnon, Philippines."
          />
        </div>
      </div>
      {/* part Two

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education
