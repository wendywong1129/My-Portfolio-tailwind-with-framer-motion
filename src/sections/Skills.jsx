import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiReact,
  SiMongodb,
  SiRedux,
  SiAxios,
  SiTypescript,
  SiTailwindcss,
  SiSocketdotio,
  SiPostman,
  SiJirasoftware,
  SiNpm,
} from "react-icons/si";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";

const Skills = () => {
  const isAboveExtraLargeScreens = useMediaQuery("(min-width: 1440px)");

  return (
    <section id="skills" className="py-20">
      <motion.div
        className="mt-16 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="mb-4 font-playfair font-semibold text-4xl">
          MY&nbsp;<span className="text-red">SKILLS</span>
        </p>
        <div className="mt-4 mb-8 flex justify-center ">
          <LineGradient width="w-48" />
        </div>
      </motion.div>

      {/* SKILLS */}
      <div className="mt-12 flex flex-col items-center gap-12 sm:flex-row sm:justify-center sm:gap-32">
        {/* left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-12">
            <div className="flex gap-24 xl:gap-36">
              <SiHtml5
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#E44D26"
              />
              <SiCss3
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#3799D5"
              />
            </div>
            <div className="flex gap-24 xl:gap-36">
              <SiJavascript
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#F6DF1E"
              />
              <SiReact
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#2FDCFF"
              />
            </div>
            <div className="flex gap-24 xl:gap-36">
              <FaNodeJs
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#91C73C"
              />
              <img
                className="w-16 xl:w-24"
                src="assets/express.jpeg"
                alt="express.js"
              />
            </div>
            <div className="flex gap-24 xl:gap-36">
              <SiTypescript
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#3076C0"
              />
              <img
                className="w-16 xl:w-24"
                src="assets/nextJS.jpeg"
                alt="express.js"
              />
            </div>
            <div className="flex gap-24 xl:gap-36">
              <SiMongodb
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#1EAD42"
              />
              <SiPostman
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#F56836"
              />
            </div>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-12">
            <div className="flex gap-24 xl:gap-36">
              <img
                className="w-16 xl:w-24"
                src="assets/styled-components.jpeg"
                alt="express.js"
              />
              <SiTailwindcss
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#38BDF8"
              />
            </div>
            <div className="flex gap-24 xl:gap-36">
              <SiRedux
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#764ABC"
              />
              <SiAxios
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#6724E9"
              />
            </div>
            <div className="flex gap-24 xl:gap-36">
              <SiSocketdotio size={isAboveExtraLargeScreens ? 90 : 60} />
              <img
                className="w-16 xl:w-24"
                src="assets/webRTC logo.jpeg"
                alt="express.js"
              />
            </div>
            <div className="flex gap-24 xl:gap-36">
              <SiJirasoftware
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#227FF7"
              />
              <SiNpm
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#C71300"
              />
            </div>
            <div className="flex gap-24 xl:gap-36">
              <img
                className="w-16 xl:w-24"
                src="assets/viteJS.jpeg"
                alt="express.js"
              />
              <SiSass
                size={isAboveExtraLargeScreens ? 90 : 60}
                color="#CC6699"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
