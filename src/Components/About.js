import React from "react";

export default function About() {
  return (
    <section
      className="max-w-screen h-screen px-10 md:px-32 py-16"
      id="about"
    >
      <div className="mx-auto flex flex-col justify-center md:justify-between w-full h-fit gap-4 border border-[#B3B3B3] pb-4 rounded-[16px]">
        <div className="px-20 py-8 bg-[#666666] text-white flex items-center rounded-t-[16px] border-none">
          <h2 className="text-3xl text-left font-medium font-heading w-[180px] pb-2">
            About Me
          </h2>
        </div>

        <div className="px-20 my-10 tracking-widest space-y-6 leading-10 font-normal">
          <p className="text-base lg:text-2xl text-justify">
            I am a frontend developer with a strong foundation in HTML, CSS and
            JavaScript. I have experience working with frameworks such as React,
            Vue, and Tailwind CSS. I understand how a web application works,
            from the user interface (UI) that the user sees and interacts with
            to the server-side logic.
          </p>
          <p className="text-base lg:text-2xl text-justify">
            I also have a good experience in Technical writing, by simplifying
            complex programming concepts into simple understandable terms. I
            have experience working with version control systems like Git.
          </p>
          <p className="text-base lg:text-2xl text-justify">
            In addition to technical skills, I have excellent problem-solving
            abilities, strong communication skills, and the ability to work well
            in a team environment. I can take a project from concept to
            completion and adapt to new technologies and methodologies as
            needed.
          </p>
        </div>
        </div>
    </section>
  );
}
