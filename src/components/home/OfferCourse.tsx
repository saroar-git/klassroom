import { motion } from "framer-motion";
import { TvMinimalPlay } from "lucide-react";
import { cardAnimation } from "../ui/Animation";
import Button from "../utils/Button";
import Titles from "../utils/Titles";

const courses = [
  {
    name: "SPSS for Beginners",
    duration: "6 Weeks",
    level: "Beginner",
    price: "৳3000",
    description:
      "Learn statistical analysis using SPSS with hands-on practice.",
  },
  {
    name: "IELTS Preparation",
    duration: "8 Weeks",
    level: "Intermediate",
    price: "৳5000",
    description:
      "Boost your IELTS score with expert strategies and mock tests.",
  },
  {
    name: "CV & Interview Masterclass",
    duration: "2 Weeks",
    level: "Beginner",
    price: "৳1500",
    description:
      "Craft standout CVs and prepare for job interviews confidently.",
  },
];

const OfferCourse = () => {
  return (
    <section id="courses" className="my-20 lg:my-28 bg-yellow-50 px-3 py-12">
      <Titles title="Courses We Offer" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={cardAnimation}
            initial="initial"
            whileInView="whileInView"
            transition={cardAnimation.transition}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 text-left border border-green-100 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">
              {course.name}
            </h3>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <div className="text-sm text-gray-500 my-3">
              ⏱ {course.duration} &nbsp;|&nbsp; 🎯 {course.level} &nbsp;|&nbsp;
              💳 {course.price}
            </div>
            <div className="w-full flex items-end justify-end mt-8">
              <button className="btn btn-sm bg-yellow-600 text-white hover:bg-yellow-700">
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex text-center items-center justify-center mt-16">
        <Button
          to="/courses"
          text="See More Courses"
          icon={<TvMinimalPlay className="w-5 h-5 text-white" />}
        />
      </div>
    </section>
  );
};

export default OfferCourse;
