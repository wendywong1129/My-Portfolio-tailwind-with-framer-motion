import { motion } from "framer-motion";
import { HiUser } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";

const About = () => {
  const isAboveExtraLargeScreens = useMediaQuery("(min-width: 1440px)");

  return (
    <section id="about" className="py-8 sm:py-20">
      <div className="flex flex-col items-center">
        <motion.div
          className="w-full mt-20 flex justify-center xl:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mb-8">
            <p className="font-playfair font-semibold text-2xl sm:text-4xl sm:mb-4 sm:mt-0">
              <span className="text-red">ABOUT</span>&nbsp;ME
            </p>
            <div className="flex sm:justify-end sm:my-4">
              <LineGradient width="w-full" />
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:gap-44">
          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="max-w-[200px] xl:max-w-[300px] xl:ml-32 xl:bg-purple xl:rounded-lg xl:shadow-xl">
              {isAboveExtraLargeScreens ? (
                <motion.img
                  className="max-w-[300px] rounded-lg"
                  src="assets/about-profile.jpeg"
                  whileHover={{ y: -25, x: 35 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <img
                  className="rounded-3xl"
                  src="assets/about-profile.jpeg"
                  alt="profile"
                />
              )}
            </div>
          </div>

          {/* BRIEF */}
          <div className="flex flex-col items-center xl:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-8 text-lg text-center xl:text-start">
                I am driven by my curiosity and passion to spend time studying
                emerging technologies as well as developing awesome
                applications.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="flex items-center xl:mt-8 text-lg">
                <HiUser />
                <span className="ml-2">name</span>
                <span className="ml-4 sm:ml-8 text-red">Qian Wang (Wendy)</span>
              </div>
              <div className="flex items-center mt-2 text-lg">
                <MdEmail />
                <span className="ml-2">email</span>
                <span className="ml-4 sm:ml-8 text-red">
                  wendywong.qw@gmail.com
                </span>
              </div>
              <div className="flex justify-center xl:justify-start">
                <motion.a
                  className="inline-block mt-8 p-4 text-deep-blue font-semibold bg-gradient-rainblue rounded-lg"
                  href="files/CV-Wendy Wong.pdf"
                  download="CV-Wendy Wong"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex sm:justify-between sm:gap-32 lg:mt-16">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative md:h-32">
            <div className="z-10">
              <p className="mt-6 p-4 bg-red font-playfair font-semibold text-xl md:p-0 md:bg-transparent md:text-3xl">
                Innovative
              </p>
            </div>
            <div className="hidden absolute right-0 top-[-25%] bg-red z-[-1] md:inline-block md:w-3/4 md:h-24" />
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative md:h-32">
            <div className="z-10">
              <p className="mt-6 p-4 bg-blue font-playfair font-semibold text-xl md:p-0 md:bg-transparent md:text-3xl">
                Imaginative
              </p>
            </div>
            <div className="hidden absolute right-0 top-[-25%] bg-blue z-[-1] md:inline-block md:w-3/4 md:h-24" />
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative md:h-32">
            <div className="z-10">
              <p className="mt-6 p-4 bg-yellow font-playfair font-semibold text-xl md:p-0 md:bg-transparent md:text-3xl">
                Experienced
              </p>
            </div>
            <div className="hidden absolute right-0 top-[-25%] bg-yellow z-[-1] md:inline-block md:w-3/4 md:h-24" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
