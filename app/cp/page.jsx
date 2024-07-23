"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from  "next/link";

const services = [
  {
    num: "01",
  title: "LeetCode",
  description: "400+ Problems 🎖️",
  href: "https://leetcode.com/raoxaman"
  },
  {
    num: "02",
  title: "CodeForces",
  description: "pupil🟢️ [ Max rating 1215 ]",
  href: "https://codeforces.com/profile/amanloves69"
  },
  {
    num: "03",
  title: "CodeChef",
  description: "3🌟️ [ Max rating 1645 ]",
  href: "https://codechef.com/users/amanraoxx"
  },
  {
    num: "04",
  title: "Geek for Geeks",
  description: "Institute Rank 1 🏆️",
  href: "https://www.geeksforgeeks.org/user/amanraox/"
  },
];
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
	  <div className="px-7">
      <div className="flex flex-col md:flex-row md:space-x-4">
      <div className="flex-1 mb-4 md:mb-0">
      <div className="relative" style={{ paddingBottom: '70%' }}>
      <a href="https://leetcode.com/u/raoxaman/" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://leetcard.jacoblin.cool/raoxaman?border=1.5&font=Ubuntu&radius=13&ext=heatmake&sheets=https://gist.githubusercontent.com/amanraox/cf6cdd10f40353086bcb2de6694a4ce2/raw/786c10c0174e05e10c866f42ba0d47acf391b42a/leetcode_stats_card.css" 
          alt="SVG 2" 
          className="absolute inset-0 w-full h-full object-contain"
        /></a>
        </div>
      </div>
      <div className="flex-1">
      <div className="relative" style={{ paddingBottom: '70%' }}>
      <a href="https://codeforces.com/profile/amanloves69/" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://codeforces-readme-stats.vercel.app/api/card?username=amanloves69&title_color=00ff99&text_color=fff&border_color=00ff99&bg_color=121217&icon_color=00ff99" 
          alt="SVG 1" 
          className="absolute inset-0 w-full h-full object-contain"
        /></a>
        </div>
      </div>
    </div>
    <br />
    </div>
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity:0}} 
        animate={{
          opacity:1, 
          transition:{delay:2.4, duration:0.4, ease:"easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
          {services.map((service,index)=>{
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group"
              >
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  {/* descriptive */}
                  <p className="text-white">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
	
        </motion.div>
      </div>
    </section>
  );
};

export default Services
