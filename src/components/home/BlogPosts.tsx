import { motion } from "framer-motion";
import { cardAnimation } from "../ui/Animation";
import { BookOpen } from "lucide-react";
import Titles from "../utils/Titles";
import Button from "../utils/Button";

const blogPosts = [
  {
    title: "Five (5) Tips to Crack the IELTS Exam",
    summary:
      "Master time management and test-taking strategies with these practical tips.",
    tag: "IELTS",
    date: "June 2, 2025",
  },
  {
    title: "Understanding SPSS in Simple Terms",
    summary:
      "Get started with SPSS, learn basic terms and how to use it for research.",
    tag: "SPSS",
    date: "May 28, 2025",
  },
  {
    title: "Top Soft Skills Employers Want in 2025",
    summary:
      "Communication, adaptability, and more — build these to stay ahead.",
    tag: "Soft Skills",
    date: "May 15, 2025",
  },
];

export default function BlogPosts() {
  return (
    <section id="blog" className="my-20 lg:my-28 px-3 bg-emerald-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <Titles title="Latest Resources & Blogs" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              variants={cardAnimation}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-emerald-50 border border-emerald-100 rounded-xl shadow p-6 text-left hover:scale-105 transition duration-300"
            >
              <span className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-2 inline-block">
                #{post.tag}
              </span>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
              <p className="text-xs text-gray-400">{post.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Show More Link */}
        <div className="mt-16">
          <Button
            text="Show More Blog Posts"
            to="/blogs"
            icon={<BookOpen className="w-5 h-5 text-white" />}
          />
        </div>
      </div>
    </section>
  );
}
