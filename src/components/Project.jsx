import { motion } from "framer-motion";

const Project = ({ href, title, desc }) => {
  const projectTitle = title.toLowerCase();

  return (
    <motion.div
      className="relative"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <a className="hover:cursor-pointer" href={href}>
        <div className="z-30 absolute h-full w-full p-16 flex flex-col justify-center items-center text-center text-deep-blue bg-grey opacity-0 hover:opacity-90 transition duration-500">
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-6">{desc}</p>
        </div>
      </a>
      <img
        src={`assets/${projectTitle}.jpeg`}
        alt={projectTitle}
        className="max-w-[325px] max-h-[325px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[400px] md:max-h-[400px] aspect-square"
      />
    </motion.div>
  );
};

export default Project;
