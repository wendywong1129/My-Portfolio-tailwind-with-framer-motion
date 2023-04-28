import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="flex flex-col items-center">
        <motion.div
          className="w-full flex justify-center sm:mt-12 xl:mt-24 xl:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <p className="mt-4 font-playfair font-semibold text-2xl sm:text-4xl sm:mb-4 sm:mt-0">
              <span className="text-red">CONTACT</span>&nbsp;ME
            </p>
            <div className="flex sm:justify-end sm:my-4">
              <LineGradient width="w-full" />
            </div>
          </div>
        </motion.div>
        <div className="mt-4 gap-16 xl:flex xl:justify-between">
          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="max-w-[280px] md:max-w-[700px]">
              <img
                className="rounded-lg"
                src="assets/contact-me.jpeg"
                alt="contact"
              />
            </div>
          </div>

          {/* FORM */}
          <motion.div
            className="mt-4 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/wendywong.qw@gmail.com"
              method="POST"
            >
              <input
                className="w-full p-2 sm:p-4 bg-blue font-semibold placeholder-opaque-black focus:outline-0"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 50,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "Please enter your name."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 50 chars."}
                </p>
              )}
              <input
                className="mt-6 p-2 sm:p-4 w-full bg-blue font-semibold placeholder-opaque-black focus:outline-0"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" &&
                    "Please enter your email."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className="mt-6 p-2 sm:p-4 w-full bg-blue font-semibold placeholder-opaque-black focus:outline-0"
                name="message"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "Please leave your message."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 chars."}
                </p>
              )}
              <div className="flex justify-center xl:justify-end">
                <button
                  className="mt-6 p-4 bg-yellow font-semibold text-deep-blue transition duration-500 hover:bg-red hover:text-white"
                  type="submit"
                >
                  SEND ME
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
