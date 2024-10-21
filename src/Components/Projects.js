import React from "react";
import accessory from "../assets/projects/accessory.jpeg";
import landing from "../assets/projects/landing.jpeg";
import project from "../assets/projects/project-mgt.png";
import portfolio from "../assets/projects/portfolio.png";
import shoes from "../assets/projects/shoes.png";
import weather from "../assets/projects/weather.png";
import repo from "../assets/projects/repo.png";
import counter from "../assets/projects/counter.png";
import calculator from "../assets/projects/calculator.png";
import remote from "../assets/projects/remote.png";
import todo from "../assets/projects/todo.png";
import advice from "../assets/projects/advice.png";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      src: accessory,
      hosted: "https://accessory-den-wcqw.vercel.app/",
      live: "https://github.com/oyin-systems/accessory-den",
      stack: "NextJS, Tailwind CSS",
      name: "Accessory Den",
      about: "A mini online store and shopping cart application.",
    },
    {
      id: 2,
      src: landing,
      hosted: "https://healthtech-landing.netlify.app/",
      live: "https://github.com/oyin-systems/ENCRYPTIX-landing-page",
      stack: "HTML, CSS",
      name: "HealthPlus Tech",
      about: "Landing page built for an healthcare technology company.",
    },
    {
      id: 3,
      src: project,
      hosted: "https://encryptix-project-management-tool.vercel.app/",
      live: "https://github.com/oyin-systems/ENCRYPTIX-project-management-tool",
      stack: "React, Tailwind CSS, Vite",
      name: "Project Management",
      about: "A simple tool to manage tasks, deadlines and progress tracking.",
    },
    {
      id: 4,
      src: portfolio,
      hosted: "https://oyinabolaji.netlify.app/",
      live: "https://github.com/oyin-systems/oyin-portfolio",
      stack: "React, Tailwind CSS",
      name: "Portfolio",
      about:
        "A portfolio showing my skills, projects, articles, and contact info.",
    },
    {
      id: 5,
      src: shoes,
      hosted: "https://e-commerce-taupe-six.vercel.app/",
      live: "https://github.com/oyin-systems/e-commerce",
      stack: "NextJS, Tailwind CSS",
      name: "eCommerce",
      about: "eCommerce app to perform CRUD operations on products.",
    },
    {
      id: 6,
      src: weather,
      hosted: "https://boisterous-axolotl-5947c5.netlify.app/",
      live: "https://github.com/oyin-systems/Weather-app",
      stack: "HTML, CSS, JavaScript",
      name: "Weather App",
      about:
        "App that shows current weather for any location.",
    },
    {
      id: 7,
      src: repo,
      hosted: "https://github-repo-pi.vercel.app/",
      live: "https://github.com/oyin-systems/Github-repo",
      stack: "VueJS, TailwindCSS",
      name: "GitHub Repo",
      about: "An app using the GitHub API to fetch and display repo details.",
    },
    {
      id: 8,
      src: counter,
      hosted: "https://vue-counter-3rd.netlify.app/",
      live: "https://github.com/oyin-systems/vue-counter",
      stack: "VueJS, TailwindCSS",
      name: "Counter",
      about: "Simple counter app with necessary functionalities.",
    },
    {
      id: 9,
      src: calculator,
      hosted: "https://encryptix-calculator.netlify.app/",
      live: "https://github.com/oyin-systems/ENCRYPTIX-calculator",
      stack: "HTML, CSS, JavaScript",
      name: "Calculator",
      about: "Basic calculator for simple arithmetic operations.",
    },
    {
      id: 10,
      src: todo,
      hosted: "https://todoapp-wheat-six.vercel.app/",
      live: "https://github.com/oyin-systems/todo",
      stack: "React, TailwindCSS",
      name: "ToDo",
      about: "Todo list application for managing tasks.",
    },
    {
      id: 11,
      src: remote,
      hosted: "https://oyin-systems.github.io/Remote-work/",
      live: "https://github.com/oyin-systems/Remote-work",
      stack: "HTML, CSS",
      name: "Remote Work",
      about: "Landing page clone of a website with layout replication.",
    },
    {
      id: 12,
      src: advice,
      hosted: "https://advice-generator-lake-eta.vercel.app/",
      live: "https://github.com/oyin-systems/advice-generator",
      stack: "React, TailwindCSS",
      name: "Advice Generator",
      about: "Minimalist tool displaying advice at the click of a button.",
    },
  ];

  return (
    <section className="max-w-screen" id="projects">
      <div className="border-t border-[#B3B3B3] w-[20rem]"></div>

      <div className="px-10 md:px-32 py-4">
        <div className="mx-auto flex flex-col justify-center w-full h-full">
          <h2 className="text-2xl font-normal lg:mb-20 mb-6">
            Selected Projects
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 p-4 md:p-10 bg-[#F2F2F2] dark:bg-[#333333] rounded-xl">
            {projects.map(({ id, src, hosted, live, stack, name, about }) => (
              <div
                key={id}
                className="shadow-md shadow-[#666666] rounded-lg mx-3 h-[28rem] mb-5"
              >
                <img
                  src={src}
                  alt="website-picture"
                  className="rounded-md duration-200 hover:scale-105 w-full h-1/2"
                />
                <div className="mx-6 mt-4 space-y-1 md:space-y-2.5">
                  <h2 className="text-2xl font-medium">{name}</h2>
                  <p className="text-lg font-normal">{about}</p>
                  <p className="text-sm font-normal text-[#B3B3B3]">
                    Tech Stack: {stack}
                  </p>
                </div>

                <div className="flex items-center justify-center mt-2">
                  <button
                    className="flex gap-2 w-fit px-3 py-2 mx-4 my-1 duration-200 hover:scale-105 hover:bg-blue-300 bg-[#666666] dark:bg-[#F2F2F2] text-white dark:text-[#333333] rounded-[1000px] hover:text-black"
                    onClick={() => window.open(hosted, "_blank")}
                  >
                    <FaLink size={25} /> <span className="hidden lg:block">Live Demo</span>
                  </button>

                  <button
                    className="flex gap-2 w-fit px-3 py-2 mx-4 my-1 duration-200 hover:scale-105 hover:bg-blue-300 bg-[#666666] dark:bg-[#F2F2F2] text-white dark:text-[#333333] rounded-[1000px] hover:text-black"
                    onClick={() => window.open(live, "_blank")}
                  >
                    <FaGithub size={25} />
                    <span className="hidden lg:block">View Code</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
