import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/amanraox" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/amanraox" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/amanraox" },
  { icon: <FaWhatsapp />, path: "https://wa.me/919755857161?text=Hello%20Aman" },
];

const Social = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
