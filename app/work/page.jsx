"use client";

import {motion} from "framer-motion";
import React,{ useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";



const projects = [
  {
    num: "01",
    category: "AI/ML",
    title: "Cognitive Document LLM Aggregator",
    description: "The Cognitive Document LLM Aggregator is a Python application that allows you to chat with multiple documents. You can ask questions about the DOCs using natural language, and the application will provide relevant responses based on the content of the documents.",
    stack: [{name:"Python"},{name:"LangChain"},{name:"StreamLit"}],
    image:"/assets/work/thumb01.png",
    live:"",
    github:"https://github.com/amanraox/Cognitive-Document-LLM-Aggregator",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Zed Type",
    description: "Simple React app to improve your typing speed with proper statistics after every test. Packed with awesome UI and multiple training modes. Also includes programming language specific training drills.",
    stack: [{name:"TypeScript"},{name:"ReactJS"}],
    image:"/assets/work/thumb02.png",
    live:"",
    github:"https://github.com/amanraox/ZED-Type",
  },
  {
    num: "03",
    category: "Algorithms",
    title: "Maze Generator",
    description: "generates random maze using Prim's Algorithm, Kruskal's Algorithm,Eller's Algorithm and Recursive Backtracking",
    stack: [{name:"Python"}],
    image:"/assets/work/thumb03.png",
    live:"",
    github:"https://github.com/amanraox/MazeGenerator",
  },
  {
    num: "04",
    category: "Cyber Security",
    title: "Encryption Cpp",
    description: "This program simply demonstrate the idea of Encryption and how its implemented and securing the text data using key. The key will be only known to sender and reciever and using that key they can view actual content of file.",
    stack: [{name:"C++"}],
    image:"/assets/work/thumb04.png",
    live:"",
    github:"https://github.com/amanraox/Encryption-Cpp",
  },
  {
    num: "05",
    category: "Core Library",
    title: "npx amanraox",
    description: "Just type 'npx amanraox' in your terminal and access my digital card from any computer in the world inside your terminal without any gui and browser",
    stack: [{name:"NodeJS"},{name:"JavaScript"},{name:"Html 5"}],
    image:"/assets/work/thumb5.png",
    live:"",
    github:"https://amanraox.github.io/raox-npx/",
  },
  {
    num: "06",
    category: "AI/ML",
    title: "Digit Classifier ML Model",
    description: "Digit Recognition implemented using Machine Learning models ( KernelPCA , NN , Softmax , CNN , DNN )",
    stack: [{name:"Python"},{name:"PyTorch"}],
    image:"/assets/work/thumb6.png",
    live:"",
    github:"https://github.com/amanraox/Digit-Classifier-ML-models",
  },
  {
    num: "07",
    category: "Scripts",
    title: "Bash Scripts",
    description: "Created various bash scripts to automate daily tasks and make your life easier",
    stack: [{name:"Python"},{name:"LangChain"},{name:"StreamLit"}],
    image:"/assets/work/thumb7.png",
    live:"",
    github:"https://github.com/amanraox/Scripts",
  },
  {
    num: "08",
    category: "FullStack",
    title: "Sync Team",
    description: "Sync Team is a dynamic collaborative platform designed for seamless real-time code sharing and collaboration among multiple users. Whether you're working on a programming project, troubleshooting code, or brainstorming ideas, Sync Team empowers teams to work together efficiently, regardless of physical location.",
    stack: [{name:"ReactJS"},{name:"NodeJS"}],
    image:"/assets/work/thumb8.png",
    live:"",
    github:"https://github.com/amanraox/Sync-Team",
  },
  {
    num: "09",
    category: " Data Structures & Algorithms",
    title: "Visualise Graph Algorithms",
    description: "Animation of BFS(Bredth First Search),DFS(Depth First Search),MST(Minimum Spanning Tree) algorithms by plotting custom nodes",
    stack: [{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"jQuery"}],
    image:"/assets/work/thumb9.png",
    live:"",
    github:"https://github.com/amanraox/Visualise-Graph-Algorithms",
  },
  {
    num: "10",
    category: "FullStack",
    title: "Terminal Portfolio",
    description: "terminal style portfolio might impress some geeks ;)",
    stack: [{name:"Python"}],
    image:"/assets/work/thumb10.png",
    live:"",
    github:"https://amanraox.github.io/amanraox/",
  },
  {
    num: "11",
    category: "DSA",
    title: "N-Queens Simulation",
    description: "This program solves the classical dynamic programming problem but with GUI to visualise each step of Algorithm",
    stack: [{name:"Python"},{name:"TkGUI"}],
    image:"/assets/work/thumb11.png",
    live:"",
    github:"https://github.com/amanraox/N-Queens-Simulation",
  },
  {
    num: "12",
    category: "Program",
    title: "MonkeyType in Terminal",
    description: "simple program for speed typing enthusiast inspired by @monkeytype with good gui elements using C++ only.",
    stack: [{name:"C++"}],
    image:"/assets/work/thumb12.png",
    live:"",
    github:"https://github.com/amanraox/Monkeytype-in-Terminal",
  },
  {
    num: "13",
    category: "DSA & Algorithms",
    title: "TSP Genetic Algorithm Gui",
    description: "This program solves the classical Travelling Salesman problem but with GUI to visualise each step of Algorithm",
    stack: [{name:"Python"}],
    image:"/assets/work/thumb13.png",
    live:"",
    github:"https://github.com/amanraox/TSP-GeneticAlgo-GUI",
  },
  {
    num: "14",
    category: " Convinience Tool ",
    title: "share bits wirelessly",
    description: "Imagine: You want to share a file with a friend nearby. You want to share from a source that does not have internet access - you just want to beam the file directly to your friend. This system lets you embed your file into a QR code that loads as an actual file download on your friend's device. Try it out here if you're feeling brave! The image that is downloaded by scanning this QR code is not hosted on any server, it only lives inside the QR code.",
    stack: [{name:"Python"},{name:"HTML"},{name:"CSS"},{name:"JavaScript"}],
    image:"/assets/work/thumb14.png",
    live:"",
    github:"https://github.com/amanraox/hare-bits-wirelessly",
  },
  {
    num: "15",
    category: "Classic Strategy Game",
    title: "Chezz",
    description: "basic chess game inn your terminal.",
    stack: [{name:"C++"}],
    image:"/assets/work/thumb15.png",
    live:"",
    github:"https://github.com/amanraox/chezz",
  },
  {
    num: "16",
    category: "Machine Learning",
    title: "Flappy Learn to Fly",
    description: "An AI that plays flappy bird! This program plays flappy bird repeatedly and using Machine Learning model it improves Accuracy.",
    stack: [{name:"Python"}],
    image:"/assets/work/thumb16.png",
    live:"",
    github:"https://github.com/amanraox/Flappy-Learn-Model",
  },
  {
    num: "17",
    category: "Classic Game",
    title: "Snake 99",
    description: "Just for fun created snake V99 with some tweak in classic snake game.",
    stack: [{name:"Python"}],
    image:"/assets/work/thumb17.png",
    live:"",
    github:"https://github.com/amanraox/Snake_99",
  },
  {
    num: "18",
    category: "Game",
    title: "Conway's Game Of Life",
    description: "Conway's Game of Life is a classic cellular automaton devised by the British mathematician John Horton Conway in 1970. Despite its simplicity, it exhibits complex and interesting behavior. It serves as a classic example of emergent phenomena in complex systems.",
    stack: [{name:"Python"}],
    image:"/assets/work/thumb18.png",
    live:"",
    github:"https://github.com/amanraox/Conway_game_of_life",
  },
  {
    num: "19",
    category: "FrontEnd",
    title: "Find Your Doctor",
    description: "find local doctors near you.",
    stack: [{name:"HTML"},{name:"CSS"},{name:"JavaScript"}],
    image:"/assets/work/thumb19.png",
    live:"",
    github:"https://github.com/amanraox/Find-Your-Doctor",
  },
  {
    num: "20",
    category: "Game",
    title: "Play with My Babies",
    description: "smol snakes ;)",
    stack: [{name:"Python"}],
    image:"/assets/work/thumb20.png",
    live:"",
    github:"https://github.com/amanraox/Play-with-Babies",
  },
  {
    num: "21",
    category: "Maths & Algorithms",
    title: "Lagrange-Newton Graph Plotting Algorithm Implementation",
    description: "Made this to Visualize Equations.",
    stack: [{name:"Python"}],
    image:"/assets/work/thumb21.png",
    live:"",
    github:"https://github.com/amanraox/Lagrange-Newton_Graph-Plotting-Algorithm_Implementation",
  },
  {
    num: "22",
    category: "AI",
    title: "Summarise Video",
    description: "Built a simple chrome extension that uses hugging-face Transformers to summarise a YouTube video by utilising YouTube's transcript feature in 200 words.",
    stack: [{name:"Python"},{name:"JavaScript"},{name:"flask"},{name:"Html 5"}],
    image:"/assets/work/thumb22.png",
    live:"",
    github:"https://github.com/amanraox/YouTube-Transcript-Summarizer",
  },  
  {
    num: "23",
    category: "FullStack",
    title: "Portfolio",
    description: "-- Professional Portfolio --",
    stack: [{name:"NextJS"},{name:"Tailwind CSS"},{name:"Framer Motion"}],
    image:"/assets/work/thumb23.png",
    live:"",
    github:"https://github.com/amanraox/TSP-GeneticAlgo-GUI",
  },
];

const Work = () => {
  const [project,setProject]=useState(projects[0]);

  const handleSlideChange = (swiper)=>{
// get current slide index
    const currentIndex =swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:2.4, duration:0.4,ease:"easeIn"},}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl: justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* Project Category */}
              <h2  className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              <h3  className="text-[30px] font-bold leading-none text-white/70 group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h3>

              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-accent">{item.name}
                    {/* remove last comma */}
                    {index !== project.stack.length - 1 && " |"}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* Pbuttons */}
              <div className="flex items-center gap-4">
                {/* live Project Button  removed */}
                
                {/* Github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index)=>{
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="ojact-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(10%-47px)] x1:bottom-0 z-20 w-full justify-center                          xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work