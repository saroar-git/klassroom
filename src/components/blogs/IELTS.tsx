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

const IELTS = () => {
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
      <motion.div
        className="breadcrumbs text-sm mb-6 text-gray-600"
        variants={fadeUp}
        custom={0}
      >
        <ul className="flex gap-2">
          <li>
            <Link to="/" className="hover:text-primary font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-primary font-medium">
              Blogs
            </Link>
          </li>
          <li className="text-gray-500">IELTS</li>
        </ul>
      </motion.div>

      <motion.h1
        className="text-4xl font-bold mb-2 text-pink-600"
        variants={fadeUp}
        custom={1}
      >
        Mastering IELTS: Proven Strategies to Boost Your Band Score
      </motion.h1>

      <motion.div
        className="flex items-center text-sm text-gray-500 mb-6 mt-5 gap-4"
        variants={fadeUp}
        custom={3}
      >
        <div className="flex items-center gap-1">
          <User size={16} /> Admin
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={16} /> June 7, 2025
        </div>
      </motion.div>

      <motion.p className="text-lg mb-4" variants={fadeUp} custom={4}>
        Whether you're aiming to study abroad or immigrate, the IELTS exam is a
        critical step. Success requires not just knowledge, but strategy.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={5}
      >
        Key IELTS Strategies
      </motion.h2>
      <motion.ul
        className="list-disc list-inside mb-4 space-y-2"
        variants={fadeUp}
        custom={6}
      >
        <li>Understand the test format thoroughly.</li>
        <li>Practice under timed conditions.</li>
        <li>Build your vocabulary and grammar accuracy.</li>
        <li>Get feedback on speaking and writing tasks.</li>
      </motion.ul>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={7}
      >
        Prepare with Klassroom
      </motion.h2>
      <motion.p className="mb-4" variants={fadeUp} custom={8}>
        Our expert-designed IELTS course offers mock tests, skill drills, and
        one-on-one feedback to help you reach your desired band score.
      </motion.p>

      <motion.div
        className="text-right italic text-gray-600"
        variants={fadeUp}
        custom={9}
      >
        — The Klassroom Team
      </motion.div>
    </motion.div>
  );
};

export default IELTS;
