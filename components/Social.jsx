import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socials=[
  {icon: <FaGithub />,path: "https://github.com/amanraox"},
  {icon: <FaLinkedinIn />,path: "https://linkedin.com/in/amanraox"},
  {icon: <FaTwitter />,path: "https://twitter.com/amanraoxx"},
  {icon: <FaWhatsapp />,path: "https://wa.me/919755857161?text=Hello%20Aman"},
]
const Social = ({containerStyle,iconStyles}) => {
  return (
    <div className={containerStyle}>
      {socials.map((item,index)=>{
        return (
          <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social