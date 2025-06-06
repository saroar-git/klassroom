import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../ui/Animation";

const SoftSkills = () => {
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
            <Link to="/" className="hover:text-primary font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-primary font-medium">
              Blogs
            </Link>
          </li>
          <li className="text-gray-500">Soft Skills</li>
        </ul>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-2 text-pink-600"
        variants={fadeUp}
        custom={1}
      >
        Why Soft Skills Are the Secret Ingredient to Career Success?
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
          <Calendar size={16} /> June 5, 2025
        </div>
      </motion.div>

      {/* Paragraphs */}
      <motion.p className="text-lg mb-4" variants={fadeUp} custom={3}>
        When it comes to building a successful career, technical expertise often
        takes center stage. But there’s another piece of the puzzle that is just
        as important—and often overlooked: soft skills.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={4}
      >
        What Are Soft Skills?
      </motion.h2>
      <motion.p className="mb-4" variants={fadeUp} custom={5}>
        Soft skills refer to a combination of people skills, social
        intelligence, communication ability, emotional intelligence, and
        personality traits that enable people to navigate their environment,
        work well with others, and achieve their goals.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={6}
      >
        Why Do Soft Skills Matter?
      </motion.h2>
      <motion.ul
        className="list-disc list-inside mb-4 space-y-2"
        variants={fadeUp}
        custom={7}
      >
        <li>
          <strong>Communication:</strong> Clear, respectful communication
          enhances teamwork and reduces conflict.
        </li>
        <li>
          <strong>Leadership:</strong> The ability to inspire, guide, and
          support others is vital in any role.
        </li>
        <li>
          <strong>Adaptability:</strong> In a fast-changing world, flexibility
          is an asset.
        </li>
        <li>
          <strong>Problem Solving:</strong> Employers value team members who
          think critically and offer solutions.
        </li>
        <li>
          <strong>Teamwork:</strong> Success rarely happens in isolation;
          collaboration drives progress.
        </li>
      </motion.ul>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={8}
      >
        How to Improve Soft Skills
      </motion.h2>
      <motion.p className="mb-4" variants={fadeUp} custom={9}>
        At <strong>Klassroom</strong>, we believe learning soft skills is as
        important as mastering any technical subject. Our upcoming soft skills
        courses are designed to help you grow professionally by enhancing your
        communication, leadership, and collaboration abilities.
      </motion.p>

      <motion.p className="mb-8" variants={fadeUp} custom={10}>
        Start investing in your soft skills today. Because in the real world,
        being smart is good—but being smart <em>and</em> emotionally
        intelligent? That’s what makes you unstoppable.
      </motion.p>

      <motion.div
        className="text-right italic text-gray-600"
        variants={fadeUp}
        custom={11}
      >
        — The Klassroom Team
      </motion.div>
    </motion.div>
  );
};

export default SoftSkills;
