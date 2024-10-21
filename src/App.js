import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Articles from "./Components/Articles";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SocialLinks from "./Components/SocialLinks";
import Stack from "./Components/Stack";
import ThemeWrapper from "./ThemeWrapper";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    { icon: "sunny", text: "light" },
    { icon: "moon", text: "dark" },
    { icon: "desktop", text: "system" },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  useEffect(() => {
    onWindowMatch();
  }, []);

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  useEffect(() => {
    const darkModeHandler = (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      }
    };

    darkQuery.addEventListener("change", darkModeHandler);
    return () => darkQuery.removeEventListener("change", darkModeHandler);
  }, []);

  return (
    <>
      <ThemeWrapper>
        <Header />

        <div className="fixed z-[1000] top-10 right-40 lg:right-10 duration-100 dark:bg-black bg-[#F2F2F2] rounded-lg">
          {options.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                theme === opt.text && "text-sky-600"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
            
          ))}
        </div>

        <Home />
        <SocialLinks />
        <About />
        <Projects />
        <Articles />
        <Stack />
        <Contact />
        <Footer />
      </ThemeWrapper>
    </>
  );
}

export default App;

// // import React from "react";
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Projects from "./Components/Projects";
// import Articles from "./Components/Articles";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
// import SocialLinks from "./Components/SocialLinks";
// import Stack from "./Components/Stack";

// function App() {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
//   );
//   const element = document.documentElement;
//   const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
//   console.log(darkQuery, "darkQuery");

//   const options = [
//     {
//       icon: "sunny",
//       text: "light",
//     },
//     {
//       icon: "moon",
//       text: "dark",
//     },
//     { icon: "desktop", text: "system" },
//   ];

//   function onWindowMatch() {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) && darkQuery.matches)
//     ) {
//       element.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//     }
//   }
//   onWindowMatch();

//   useEffect(() => {
//     switch (theme) {
//       case "dark":
//         element.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//         break;
//       case "light":
//         element.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         break;
//       default:
//         localStorage.removeItem("theme");
//         onWindowMatch()
//         break;
//     }
//   }, [theme]);

//   darkQuery.addEventListener("change", (e) => {
//     if (!("theme" in localStorage)) {
//       if (e.matches) {
//         element.classList.add("dark");
//       } else {
//         element.classList.remove("dark");
//       }
//     }
//   });

//   return (
//     <>
//       <Header />

//       <div className="fixed top-5 right-10 duration-100 dark:bg-slate-900 bg-gray-100 rounded-lg">
//         {options?.map((opt) => (
//           <button
//             key={opt.text}
//             onClick={() => setTheme(opt.text)}
//             className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
//               theme === opt.text && "text-sky-600"
//             }`}
//           >
//             <ion-icon name={opt.icon}></ion-icon>
//           </button>
//         ))}
//       </div>

//       <Home />
//       <SocialLinks />
//       <About />
//       <Projects />
//       <Articles />
//       <Stack />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
