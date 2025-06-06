import { motion } from "framer-motion";
import {
  typingChar,
  typingContainer,
  underlineAnimation,
} from "../ui/Animation";

const Titles = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className="text-center mb-14">
      <motion.h1
        className="text-3xl lg:text-4xl font-bold text-emerald-700 poppins text-wrap"
        variants={typingContainer}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={typingChar}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        className="h-1 bg-emerald-600 rounded-full mt-2 mx-auto"
        style={{ maxWidth: "200px" }}
        variants={underlineAnimation}
        initial="hidden"
        animate="visible"
      />

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 2 }}
        viewport={{ once: true }}
        className="text-gray-600 mt-5"
      >
        {subTitle}
      </motion.p>
    </div>
  );
};

export default Titles;
