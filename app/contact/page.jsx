"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";                
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 975 585 7161",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "amanraox@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Near Dutta Kirana, Adarsh Nagar Phase-II, Devrikhurd, Bilaspur (C.G.)",
  },
];

import { motion } from "framer-motion"; 

const Contact = () => {
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition: {delay:2.4, duration:0.4,ease:"easeIn"},
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent"> Let's Work Together</h3>
              <p className="text-white/60">I would love to collaborate on creative new Ideas. For any urgent talk you can directly whatsapp or call me. PS: I have weired habit sometimes i read message and forget to reply and when i notice this then i regret about it.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fullname" placeholder="Fullname"/>
                <Input type="phone" placeholder="Phone/Email"/>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Reason</SelectLabel>
                    <SelectItem value="est">Need help in Project/DSA/Ques.,etc</SelectItem>
                    <SelectItem value="est">Guidance</SelectItem>
                    <SelectItem value="est">Hire</SelectItem>                    
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* TextArea */}
              <Textarea className="h-[200px]" placeholder="Kaam ki baat only.." />
              {/* button */}
              <Button size="md" className="max-w-40">
                Send
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb:-0">
            <ul>
              {info.map((item,index)=>{
                return (
                  <li key={index} className="flex item-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[92px] xl:h-[72px] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[40px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">
                        {item.title}
                      </p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact