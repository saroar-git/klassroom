import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function JoinUs() {
  return (
    <section id="join-us" className="my-20 lg:my-28 px-3 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-bold text-pink-700 poppins mb-6"
      >
        Join Our Facebook Community
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          to="https://www.facebook.com/profile.php?id=61576946549117"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-full text-lg font-medium hover:bg-pink-700 transition"
        >
          Visit Our Facebook Page
        </Link>
      </motion.div>
    </section>
  );
}
