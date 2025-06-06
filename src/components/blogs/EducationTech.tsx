import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../ui/Animation";

const EducationTech = () => {
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
          <li className="text-gray-500">Tech in Education</li>
        </ul>
      </motion.div>

      <motion.h1
        className="text-4xl font-bold mb-2 text-pink-600"
        variants={fadeUp}
        custom={1}
      >
        Innovating Education: The Role of Tech in Learning Today
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
          <Calendar size={16} /> June 8, 2025
        </div>
      </motion.div>

      <motion.p className="text-lg mb-4" variants={fadeUp} custom={4}>
        Education is evolving faster than ever, and technology plays a pivotal
        role in this transformation. From virtual classrooms to AI-driven
        tutoring, innovation is shaping how we learn, teach, and grow.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={5}
      >
        How Tech is Transforming Learning
      </motion.h2>
      <motion.ul
        className="list-disc list-inside mb-4 space-y-2"
        variants={fadeUp}
        custom={6}
      >
        <li>Online platforms bring global classrooms to your screen.</li>
        <li>AI and machine learning personalize student learning paths.</li>
        <li>Interactive tools make lessons engaging and hands-on.</li>
        <li>Mobile learning apps ensure education is always within reach.</li>
      </motion.ul>

      <motion.h2
        className="text-2xl font-semibold mt-6 mb-2"
        variants={fadeUp}
        custom={7}
      >
        Why It Matters
      </motion.h2>
      <motion.p className="mb-4" variants={fadeUp} custom={8}>
        Digital tools reduce barriers to education and support diverse learning
        styles. They enable teachers to reach more students and help learners
        build skills that matter in the real world.
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

export default EducationTech;
