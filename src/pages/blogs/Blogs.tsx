import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import { motion } from "framer-motion";

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const typingChar = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.95, y: 30 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 80,
    damping: 12,
    delay: 0.2,
  },
};

const underlineAnimation = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 10,
      ease: "easeOut",
    },
  },
};

const title = "Latest Blog Posts";

const Blogs = () => {
  return (
    <Container className="my-16 px-3">
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold text-emerald-700 poppins inline-block"
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
      </div>

      <div className="flex flex-wrap gap-5 mt-12">
        {[
          {
            path: "/blog/soft-skills-career-success",
            title:
              "Why Soft Skills Are the Secret Ingredient to Career Success",
            date: "June 5, 2025",
            summary:
              "Discover why communication, teamwork, and emotional intelligence matter just as much as technical skills in today’s competitive job market.",
          },
          {
            path: "/blog/spss-basics",
            title:
              "Getting Started with SPSS: A Beginner’s Guide to Data Analysis",
            date: "June 6, 2025",
            summary:
              "Uncover the fundamentals of SPSS and learn how this tool empowers researchers and students to interpret data with confidence.",
          },
          {
            path: "/blog/ielts-prep-guide",
            title:
              "Mastering IELTS: Proven Strategies to Boost Your Band Score",
            date: "June 7, 2025",
            summary:
              "Explore effective IELTS tips, practice strategies, and preparation techniques to help you ace your test and achieve your dream score.",
          },
          {
            path: "/blog/education-innovation",
            title: "Innovating Education: The Role of Tech in Learning Today",
            date: "June 8, 2025",
            summary:
              "From AI tutors to gamified classrooms, discover how technology is transforming education and helping learners reach new heights.",
          },
        ].map((blog) => (
          <motion.div
            key={blog.path}
            className="card w-full md:w-[49%] bg-base-100 shadow-sm p-8"
            variants={cardAnimation}
            initial="initial"
            whileInView="whileInView"
            transition={cardAnimation.transition}
            viewport={{ once: true }}
          >
            <Link
              to={blog.path}
              className="block text-2xl font-semibold text-gray-800 hover:text-pink-700 transition mb-1"
            >
              {blog.title}
            </Link>
            <p className="text-sm text-gray-600 mt-3">{blog.date} · by Admin</p>
            <p className="text-gray-700 mt-5">{blog.summary}</p>

            <div className="card-actions justify-end mt-4">
              <Link to={blog.path} className="btn btn-success btn-link">
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
