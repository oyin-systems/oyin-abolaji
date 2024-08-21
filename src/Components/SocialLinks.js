import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} className="text-[#F2F2F2]" />
        </>
      ),
      href: "https://www.linkedin.com/in/oyindamola-abolaji/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} className="text-[#F2F2F2]" />
        </>
      ),
      href: "https://github.com/oyin-systems",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={25} className="text-[#F2F2F2]" />
        </>
      ),
      href: "mailto:oyinbolaji05@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <RiTwitterXFill size={25} className="text-[#F2F2F2]" />
        </>
      ),
      href: "https://twitter.com/Oyindamolaaaa_",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} className="text-[#F2F2F2]" />
        </>
      ),
      href: "https://drive.google.com/file/d/1pnoKHgEL4s2eep5OS648JbnSPtIpzzI7/view?usp=sharing",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed text-[#F2F2F2]">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#333333]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
