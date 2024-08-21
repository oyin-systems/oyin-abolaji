import React from "react";
import comment from "../assets/articles/comment.png";
import debate from "../assets/articles/debate.png";
import tools from "../assets/articles/tools.png";
import counter from "../assets/articles/counter.png";
import january from "../assets/articles/january.png";
import february from "../assets/articles/february.png";
import { MdArrowOutward } from "react-icons/md";

export default function Articles() {
  const articles = [
    {
      id: 1,
      src: comment,
      read: "https://oyinabolaji.hashnode.dev/unlocking-the-potential-of-comment-tags-in-code",
      topic: "Comment tags in code",
    },
    {
      id: 2,
      src: debate,
      read: "https://oyinabolaji.hashnode.dev/reactjs-vs-vuejs-the-great-debate-of-the-frontend-world",
      topic: "ReactJS vs VueJS",
    },
    {
      id: 3,
      src: tools,
      read: "https://oyinabolaji.hashnode.dev/essential-online-tools-for-front-end-developers-my-top-5-picks",
      topic: "Top tools for Frontend Developers",
    },
    {
      id: 4,
      src: counter,
      read: "https://oyinabolaji.hashnode.dev/how-to-build-a-counter-application-using-usereducer-and-custom-hooks-in-reactjs",
      topic: "How to build a counter application",
    },
    {
      id: 5,
      src: january,
      read: "https://oyinabolaji.hashnode.dev/working-together-reflections-on-combining-presentation-and-application-tasks",
      topic: "Task reflections",
    },
    {
      id: 6,
      src: february,
      read: "https://oyinabolaji.hashnode.dev/reflecting-on-february-exploring-shopify-htmlcss-and-project-management",
      topic: "Exploring shopify",
    },
  ];

  return (
    <section className="max-w-screen mt-20" id="articles">
      <div className="border-t border-[#B3B3B3] w-[14rem]"></div>
      <div className="px-10 md:px-32 py-4">
        <div className="mx-auto flex flex-col justify-center w-full h-full">
          <h2 className="text-2xl font-normal lg:mb-20 mb-6">Articles</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 p-10 bg-[#F2F2F2] dark:bg-[#333333] rounded-xl">
            {articles.map(({ id, src, read, topic }) => (
              <div key={id} className="shadow-md shadow-[#666666] rounded-lg mx-3 h-[18rem]">
                <img
                  src={src}
                  alt="shoes-website"
                  className="rounded-md duration-200 hover:scale-105 w-full h-2/3"
                />
                <div className="flex justify-between items-center mx-6 mt-2">
                  <h2 className="text-2xl font-medium text-center">
                    {topic}
                  </h2>
                  <MdArrowOutward size={25} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
