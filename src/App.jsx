import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
// import LineGradient from "./components/LineGradient";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import About from "./sections/About";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {isAboveMediumScreens && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <div className="min-h-full w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Home setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      {/* <LineGradient /> */}
      <div className="h-8 sm:h-24 md:h-1 w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        ></motion.div>
      </div>
      <div className="min-h-full w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <About />
        </motion.div>
      </div>
      {/* <LineGradient /> */}
      <div className="min-h-full w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      {/* <LineGradient /> */}
      <div className="min-h-full w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <div className="h-1 w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        ></motion.div>
      </div>
      {/* <LineGradient /> */}
      <div className="min-h-full w-5/6 mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
