import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SPSS = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 my-10 lg:my-16"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {/* Breadcrumbs */}
      <motion.div
        className="breadcrumbs text-sm mb-6 text-gray-600"
        variants={fadeUp}
        custom={0}
      >
        <ul className="flex gap-2">
          <li>
            <Link to="/" className="hover:text-pink-600 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-emerald-700 font-medium">
              Blogs
            </Link>
          </li>
          <li className="text-gray-500">SPSS</li>
        </ul>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-2 text-pink-600"
        variants={fadeUp}
        custom={1}
      >
        Getting Started with SPSS: A Beginner’s Guide to Data Analysis
      </motion.h1>

      {/* Meta */}
      <motion.div
        className="flex items-center text-sm text-gray-500 mb-6 mt-5 gap-4"
        variants={fadeUp}
        custom={2}
      >
        <div className="flex items-center gap-1">
          <User size={16} /> Admin
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={16} /> June 6, 2025
        </div>
      </motion.div>

      <motion.p className="text-lg mb-4" variants={fadeUp} custom={3}>
        SPSS (Statistical Package for the Social Sciences) is a powerful tool
        used by researchers, data analysts, and students to manage and analyze
        statistical data with ease.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={4}
      >
        Why Learn SPSS?
      </motion.h2>
      <motion.ul
        className="list-disc list-inside mb-4 space-y-2"
        variants={fadeUp}
        custom={5}
      >
        <li>Easy-to-use interface for statistical testing.</li>
        <li>Widely used in academic research and industry.</li>
        <li>Supports charts, graphs, and descriptive statistics.</li>
        <li>Excellent for survey analysis and social science research.</li>
      </motion.ul>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={6}
      >
        Get Started with Klassroom
      </motion.h2>
      <motion.p className="mb-4" variants={fadeUp} custom={7}>
        Our upcoming SPSS course will guide you through data input, analysis,
        interpretation, and reporting—step by step.
      </motion.p>

      <motion.div
        className="text-right italic text-gray-600"
        variants={fadeUp}
        custom={8}
      >
        — The Klassroom Team
      </motion.div>
    </motion.div>
  );
};

export default SPSS;
