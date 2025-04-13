import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Beginnging Reading English Fuller App"
          des="This App was Capstone Project also is an innovative mobile learning tool designed to enhance reading skills  which integrates phonics, vocabulary building, and alphabet mastery to support early literacy development among grades 1 to 3 students using the Fuller Approach."
          src={projectOne}
        />
        <ProjectsCard
          title="MES Enrollment System UX/UI Design"
          des="This project is a UX/UI design for Musuan Elementary School Enrollment System, focusing on creating an engaging and user-friendly interface for students, parents, and teachers. The design emphasizes accessibility, ease of navigation, and a visually appealing layout to enhance the overall user experience."
          src={projectTwo}
        />
        <ProjectsCard
          title="CMU Journal of Science Website"
          des="This project is a website design for the CMU Journal of Science, aimed at providing a platform for researchers and academics to publish and share their scientific work. The design focuses on a clean and professional layout, easy navigation, and features that enhance the visibility and accessibility of published articles."
          src={projectThree}
        />
        <ProjectsCard
          title="CMU Boardning House Website"
          des="This project is a website design for the CMU Boarding House, focusing on providing students with essential information about accommodation options, amenities, and application processes. The design emphasizes user-friendliness, clear navigation, and a visually appealing layout to enhance the overall user experience."
          src={projectFour}
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects