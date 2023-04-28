import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="px-4 py-3 bg-sky-600 rounded-lg transition duration-500 hover:bg-sky-500"
        href="https://www.linkedin.com/in/wendy-qianwang"
        target="_blank"
        rel="noreferrer"
      >
        <TfiLinkedin size={20} />
      </a>
      <a
        className="px-4 py-3 bg-pink-600 rounded-lg transition duration-500 hover:bg-pink-500"
        href="https://github.com/wendywong1129"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub size={20} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
