import React from "react";
import { Link } from "react-scroll";
import { MdArrowRightAlt } from "react-icons/md";
import "../index.css";

export default function Footer() {
  return (
    <section className="max-w-screen mt-10">
      <div className="px-10 md:px-32 py-10">
        <div className="border-t border-[#333333] dark:border-white border-4 w-full my-8"></div>
        <div className="flex items-center justify-between w-full">
          <p className="font-normal text-xl md:text-base">
            <span className="text-[#666666] dark:text-[#F2F2F2]">Copyright &copy; 2024. OyinAbolaji.</span>
            <br /> All Rights Reserved.
          </p>
          <Link to="home" smooth duration={500} className="group w-fit">
            <button className="button flex items-center">
              Back to top
              <span className="group-hover:-rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
