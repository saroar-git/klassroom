import { motion } from "framer-motion";
import Titles from "../utils/Titles";

const AboutUs = () => {
  return (
    <section id="about" className="my-20 lg:my-28 px-3">
      <div className="max-w-5xl mx-auto text-center">
        <Titles
          title="About Klassroom"
          subTitle="Klassroom is dedicated to equipping learners with practical, modern skills for real-world success. Our mission is to bridge the gap between traditional education and professional development through affordable, accessible, and expert-led courses."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 2 }}
          viewport={{ once: true }}
          className="bg-green-50 border-l-4 border-green-500 text-left p-6 rounded-xl shadow-md max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🌱 Why "Klassroom"?
          </h3>
          <p className="text-gray-700">
            The name “Klassroom” reflects our goal to create a new kind of
            classroom — one that’s modern, creative, and knowledge-driven. The
            “K” symbolizes Knowledge, and our logo embodies connection, growth,
            and transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
