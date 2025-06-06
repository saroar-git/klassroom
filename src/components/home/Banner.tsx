import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const titles = [
  "Empowering Minds with Modern Skills",
  "Master SPSS, IELTS, and More",
  "Learn from Industry Experts",
  "Shape Your Future with Klassroom",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lg:min-h-[90vh] min-h-[55vh] flex items-center justify-center bg-gradient-to-br from-white via-emerald-50 to-emerald-100 text-center px-4">
      <div className="max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.h1
            key={titles[index]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-emerald-600 mb-10 lg:mb-6 min-h-[96px] md:min-h-[128px]"
          >
            {titles[index]}
          </motion.h1>
        </AnimatePresence>

        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Transform your future with expert-led courses designed for success.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to={"/courses"}
            className="btn bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Browse Courses
          </Link>
          <Link
            to={"/login"}
            className="btn btn-outline border-emerald-600 text-emerald-600 hover:bg-emerald-100"
          >
            Join Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
