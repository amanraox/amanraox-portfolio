"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";                
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Popup from "@/components/Popup";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    contact: "",
    reason: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      reason: value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  let errors = [];

  // Name validation: only alphabetic characters
  const namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(formData.fullname)) {
    errors.push("Name is not in proper format");
  }

  // Contact validation: either numeric with allowed symbols or a valid email
  const phonePattern = /^[0-9+\- ]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!phonePattern.test(formData.contact) && !emailPattern.test(formData.contact)) {
    errors.push("Contact details are not in proper format");
  }

  // Message validation: check if description is provided
  if (!formData.message.trim()) {
    errors.push("Give more info in description box");
  }

  // Reason validation: ensure a reason is selected
  if (!formData.reason) {
    errors.push("Select relevant reason");
  }

  if (errors.length > 0) {
    setPopupMessage({
      title: "Validation Errors",
      body: errors.join("<br />"),
    });
    setShowPopup(true);
    setLoading(false);
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setPopupMessage({
        title: "Message Sent!",
        body: "Your message has successfully pinged my inbox, dodging all the digital traffic. I’ll get back to you soon——no downtime expected!",
      });
      setFormData({ fullname: "", contact: "", reason: "", message: "" });
    } else {
      setPopupMessage({
        title: "Error!",
        body: "Failed to send the message. Please try again later.",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    setPopupMessage({
      title: "Error!",
      body: "An error occurred while sending the message.",
    });
  } finally {
    setLoading(false);
    setShowPopup(true);
  }
};




  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent"> Let's Work Together</h3>
              <p className="text-white/60">
                I would love to collaborate in creative new Ideas. For any urgent talk you can directly whatsapp or call me.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="contact"
                  type="text"
                  placeholder="Phone/Email"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Reason" value={formData.reason} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Reason</SelectLabel>
                    <SelectItem value="Hire">Hire</SelectItem>
                    <SelectItem value="Help in Project">Need help in Project/DSA</SelectItem>
                    <SelectItem value="Teamup">Teamup for some contest/Hackathon</SelectItem>
                    <SelectItem value="AskMe">Ask me about something something</SelectItem>
                    <SelectItem value="Guidance">Guidance // Suggestions</SelectItem>                    
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* TextArea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="If you want to attach graphic content then upload to your drive and add public link here."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* button */}
              <Button size="md" className="max-w-40" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb:-0">
            <ul>
              {info.map((item, index) => (
                <li key={index} className="flex item-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[92px] xl:h-[72px] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[40px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showPopup && <Popup message={popupMessage} onClose={handleClosePopup} />}
    </motion.section>
  );
};

export default Contact;
