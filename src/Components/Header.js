import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdArrowOutward } from "react-icons/md";

export default function Header() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title:"ABOUT",
      link: "about",
    },
    {
      id: 2,
      title:"WORK",
      link: "projects",
    },
    {
      id: 3,
      title:"ARTICLES",
      link: "articles",
    },
    {
      id: 4,
      title:"TECH STACK",
      link: "stack",
    },
    {
      id: 5,
      title:"LET'S TALK",
      link: "contact",
    },
  ];

  return (
    <section className="fixed w-screen flex items-center justify-between h-20 px-10 pt-16 pb-12 lg:px-32 backdrop-blur-[10px] z-[500]">
      <div>
        <h1 className="text-5xl font-normal font-alstoria">OA</h1>
      </div>

      <ul className="hidden md:flex bg-[#333333] dark:bg-black text-white px-6 py-4 my-3 md:mr-16 rounded-[1000px]">
        {links.map(({ id, title, link, }) => (
          <li
            key={id}
            className={`px-6 cursor-pointer capitalize font-medium hover:scale-105 flex items-center ${
              title === "LET'S TALK"
                ? "bg-white text-[#333333] rounded-full px-4 py-2"
                : ""
            }`}
          >
            <Link
              to={link}
              smooth
              duration={500}
              className="flex items-center"
            >
              {title}
              {title === "LET'S TALK" && (
                <MdArrowOutward size={15} className="ml-2" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[#333333] lg:hidden"
      >
        {nav ? <FaTimes size={30} className="text-white dark:text-[#333333]" /> : <FaBars size={30} className="text-[#333333] dark:text-white" />}
      </div>

{/* mobile */}
      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#333333] dark:bg-white text-white dark:text-[#333333]">
          {links.map(({ id, title, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl flex items-center ${
                link === "LET'S TALK"
                  ? "bg-white text-[#333333] rounded-full px-6 py-4"
                  : ""
              }`}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                className="flex items-center"
              >
                {title}
                {title === "LET'S TALK" && (
                  <MdArrowOutward size={30} className="ml-2" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}



// import React from "react";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { MdArrowOutward } from "react-icons/md";
// // <MdArrowOutward />

// export default function Header() {
//   const [nav, setNav] = useState(false);

//   const links = [
//     {
//       id: 1,
//       link: "ABOUT",
//     },
//     {
//       id: 2,
//       link: "WORK",
//     },
//     {
//       id: 3,
//       link: "ARTICLES",
//     },
//     {
//       id: 4,
//       link: "TECH STACK",
//     },
//     {
//       id: 5,
//       link: "LET'S TALK",
//     },
//   ];
//   return (
//     <section className="fixed w-screen flex items-center justify-between bg-white h-20 px-10 pt-16 pb-12 md:px-32 text-[#333333]">
//       <div>
//         <h1 className="text-[#333333] text-4xl font-bold font-signature">OA</h1>
//       </div>

//       <ul className="hidden md:flex bg-[#333333] text-white px-6 py-4 my-3 rounded-[1000px]">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="px-6 cursor-pointer capitalize font-medium hover:scale-105"
//           >
//             <Link to={link} smooth duration={500}>
//               {link}
//               {link === "LET'S TALK" && (
//                 <MdArrowOutward size={20} className="ml-2 inline-flex" />
//               )}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 text-[#333333] md:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-[#333333]">
//           {links.map(({ id, link }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-4xl"
//             >
//               <Link
//                 onClick={() => setNav(!nav)}
//                 to={link}
//                 smooth
//                 duration={500}
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// }
