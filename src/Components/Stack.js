import React from "react";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";
import vue from "../assets/logos/vue.png";
import tailwind from "../assets/logos/tailwind.png";
import next from "../assets/logos/nextjs.png";
import git from "../assets/logos/git.png";
import netlify from "../assets/logos/netlify.png";
import vercel from "../assets/logos/vercel.png";
import firebase from "../assets/logos/firebase.png";
import figma from "../assets/logos/figma.png";
import insomnia from "../assets/logos/insomnia.png";
import directus from "../assets/logos/directus.png";

export default function Stack() {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: js,
      title: "JAVASCRIPT",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
    },
    {
      id: 5,
      src: vue,
      title: "VUE",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
    },
    {
      id: 7,
      src: next,
      title: "NEXT",
    },
    {
      id: 8,
      src: git,
      title: "GIT",
    },
    {
      id: 9,
      src: netlify,
      title: "NETLIFY",
    },
    {
      id: 10,
      src: vercel,
      title: "VERCEL",
    },
    {
      id: 11,
      src: firebase,
      title: "FIREBASE",
    },
    {
      id: 12,
      src: figma,
      title: "FIGMA",
    },
    {
      id: 13,
      src: insomnia,
      title: "INSOMNIA",
    },
    {
      id: 14,
      src: directus,
      title: "DIRECTUS",
    },
  ];
  return (
    <section className="w-screen mt-20" id="stack">
      <div className="border-t border-[#B3B3B3] w-[18rem]"></div>
      <div className="px-10 md:px-32 py-4">
        <div className="mx-auto p-4 flex flex-col justify-center w-full">
          <h2 className="text-2xl font-normal lg:mb-20 mb-6">Tech Stack</h2>
        </div>
        <div className="w-[60vw] mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-2 items-center justify-center text-center">
          {tech.map(({ id, src, title }) => (
            <div
              key={id}
              className="w-fit"
            >
              <img
                src={src}
                alt={title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
