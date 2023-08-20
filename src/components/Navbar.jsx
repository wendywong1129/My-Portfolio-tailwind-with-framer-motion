import { useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "./Link";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const navbarBackground = isTopOfPage ? "" : "bg-red";
  const textColor = isTopOfPage ? "text-red" : "text-white";

  const pageList = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className={`${navbarBackground} z-50 w-full fixed top-0 py-6`}>
      <div className="w-5/6 mx-auto flex justify-between items-center">
        <h4 className={`${textColor} font-playfair text-3xl font-bold`}>WW</h4>
        {isAboveSmallScreens ? (
          // DESKTOP
          <div className="flex justify-between gap-16 font-opensans text-xl font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          // MOBILE
          <button
            className="p-2 bg-red rounded-full"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {/* Menu Icon(Toggle) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 h-full w-[300px] bg-red">
            <div className="py-6 px-9 flex justify-end">
              <button
                className="p-2 bg-black rounded-full"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {/* Close Icon(Toggle) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <motion.ul
              className="ml-[33%] flex flex-col gap-10 text-2xl text-deep-blue"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {pageList.map((page) => (
                <motion.li
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  key={page}
                >
                  <Link
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
