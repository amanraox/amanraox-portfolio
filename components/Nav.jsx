"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "Competitive Programming",
        path: "/services",
    },
    {
      name: "Projects",
      path: "/work",
  },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
  return (
  <nav className="flex gap-8">
    {links.map((link,index)=>{
        return <Link 
        href={link.path} 
        key={index} 
        className={`${
          link.path === pathname ? "text-accent border-b-2 border-accent " : ""
        }capitalize font-medium hover:text-accent transition-all`}
      >
        {link.name}
      </Link>      
    })}
    </nav>
    );
};


export default Nav;