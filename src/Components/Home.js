import React from "react";
import Pic from "../assets/dp.jpeg";
import Flag from "../assets/logos/nigeria.png";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";
import "../index.css";

export default function Hero() {
  return (
    <section
      name="hero"
      className="max-w-screen h-screen px-10 md:pt-20 md:px-32 mx-auto flex flex-col md:flex-row items-center justify-between"
      id="home"
    >
      <div className="flex flex-col items-center justify-center h-full px-4 md:ml-6 lg:ml-10 md:flex-row">
        <div className="flex flex-col justify-center h-full gap-2">
          <p className="font-semibold text-3xl text-[#666666] flex items-center">
            Hi there, I'm Oyindamola.{" "}
            <span className="ml-2">
              <img src={Flag} alt="nigerian-flag" />
            </span>
          </p>
          <h3 className="text-[3rem] md:text-[4rem] font-bold leading-[75px]">
            A Frontend Developer <br /> and Technical Writer.
          </h3>
          <p className="text-xl md:text-2xl font-normal text-[#666666]">
            I love to work on web applicatons using technologies like <br />
            JavaScript, ReactJs and Tailwind CSS.
          </p>

          <Link
            to="projects"
            smooth
            duration={500}
            className="group w-fit mt-6"
          >
            <button className="button flex items-center bg-[#333333] dark:bg-white text-white dark:text-[#333333]">
              See Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="rounded-[30px] bg-gray-300 w-[22.4rem] h-[22.4rem] flex items-center justify-center shadow-2xl">
      <div className="rounded-[30px] bg-white w-[21.7rem] h-[21.7rem] flex items-center justify-center shadow-2xl">
        <div className="rounded-[30px] w-[21rem] h-[21rem] overflow-hidden">
          <img
            src={Pic}
            alt="coding-illustration"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
      </div>
      </div>
    </section>
  );
}

