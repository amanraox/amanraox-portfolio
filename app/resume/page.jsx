"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5, FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaJava, FaPython,} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs,SiCplusplus, SiGooglecloud, SiC} from "react-icons/si";

const about={
  title: "About me",
  description: "A self-taught web developer and hobbyist competitive programmer. I love spending my free time on solving problems on codeforces or working on my personal projects. I'm linux enthusiast and also interested in open-source softwares.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aman Umrao",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9755857161",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "username",
      fieldValue: "amanraox amanraoxx",
    },
    {
      fieldName: "Nationality",
      fieldValue: "India🇮🇳",
    },
    {
      fieldName: "Email",
      fieldValue: "amanumrao333@gmail.com",
    },
    {
      fieldName: "For Work",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ]
};

// experience data
const experience ={
  icon:"/assets/resume/badge.svg",
  title:"My experience",
  description:"Throughout my career has been a journey of continuous learning and adaptation, working on diverse projects across various industries. Below are some of the key positions I've held and the contributions I've made:",
  items: [
    {
      company:"Club of Programmers (SSTC)",
      position:"Teaching Assistant",
      duration: "Mar 2023 - Nov 2023",
    },
    {
      company:"ROAS Expert Inc.",
      position:"Web Developer Intern",
      duration: "Mar 2024 - Apr 2024",
    },
  ]
};

// eucation data
const education ={
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  description:"My academic journey has equipped me with a strong foundation in fundamentals of Computer Science. Through a combination of theoretical studies, rigorous coursework, hands-on projects, and active participation in extracurricular activities, I have developed the critical skills and knowledge necessary to excel in my career. Here are the details of my educational background:",
  items: [
    {
      institution:"Shri Shankaracharya Technical Campus (SSTC)",
      degree:"B.Tech \
      Information Technology [8.05 GPA]",
      duration: "2021 - 2025",
    },
    {
      institution:"Loyola School Bsp",
      degree:"Higher Secondary Education \
      [ std12 ]",
      duration: "2018 - 2020",
    },
    {
      institution:"Loyola School Bsp",
      degree:"Secondary Education  _[std10]_",
      duration: "2017 - 2018",
    },
  ]
};

// skills data
const skills = {
  title: "My Skills",
  description: "These are the tools and technologies that I use to conjure up creative and innovative solutions-",
  skillList: [
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud",
    },

  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4, duration:0.4, ease:"easeIn" },
    }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"> 
    <div className="container mx-auto">
      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto my-auto xl:mx-0 gap-6">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        {/** content */}
        <div>
        {/** Experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/** ... */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>       
            </div>
          </TabsContent>


          {/** Education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <p><h3 className="text-4xl font-bold">{education.title}</h3></p>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/** ... */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>       
            </div>
          </TabsContent>



          {/** Skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skills,index)=>{
                  return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skills.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                );
                })}
              </ul>
            </div>
          </TabsContent>


          {/** About  */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item,index)=>{
                  return (
                    <li 
                    key={index}
                    className="flex item-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60"> {item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>          
          </TabsContent>
        </div>
      </Tabs>

    </div>
   </motion.div>
  );
};

export default Resume