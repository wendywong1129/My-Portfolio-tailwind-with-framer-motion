import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Home = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="py-10 gap-16 md:flex md:justify-between md:items-center"
    >
      {/* PROFILE */}
      <div className="z-10 mt-16 flex justify-center basis-3/5 md:mt-56 md:order-2">
        {isAboveMediumScreens ? (
          <div className="z-0 relative ml-20 before:absolute before:w-5/6 before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:-top-10 before:-left-20 before:rounded-t-[400px] before:z-[-1]">
            <img
              className="z-10 w-5/6 max-w-[400px] md:max-w-[600px] transition duration-500 rounded-t-[400px] hover:filter hover:saturate-200"
              src="assets/home-profile.jpeg"
              alt="profile"
            />
          </div>
        ) : (
          <img
            className="z-10 w-full max-w-[260px] md:max-w-[600px] rounded-t-[400px]"
            src="assets/home-profile.jpeg"
            alt="profile"
          />
        )}
      </div>

      {/* INTRO */}
      <div className="z-30 mt-12 md:mt-56 basis-2/5 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-10 font-playfair text-4xl sm:text-6xl text-center md:text-start">
            <span className="block mb-10">Qian Wang &nbsp;</span>
            <span className="z-20 relative text-deep-blue font-semibold before:absolute before:content-brush before:-left-[65px] before:-top-[80px] before:z-[-1] sm:before:-left-[35px] sm:before:-top-[70px] md:before:-left-[30px] md:before:-top-[70px]">
              Wendy
            </span>
          </p>
          <p className="mt-14 mb-6 text-sm sm:text-lg text-center md:text-start">
            Coding is like a box of chocolate! You'll never know what you gonna
            get until you print it out.
          </p>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="py-3 px-6 text-deep-blue font-semibold bg-gradient-rainblue rounded-sm hover:text-pink-700 transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="py-0.5 pr-0.5 bg-gradient-rainblue rounded-r-sm"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="w-full h-full px-10 flex justify-center items-center font-playfair bg-deep-blue transition duration-500 hover:text-pink-500 ">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="mt-2 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
