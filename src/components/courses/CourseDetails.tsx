import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, List, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import courses from "../../data/courses.json";
import Button from "../utils/Button";
import Titles from "../utils/Titles";
import { fadeUp } from "../ui/Animation";
import { FaUsersRectangle } from "react-icons/fa6";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const course = useMemo(
    () => courses.find((c) => c.id === courseId),
    [courseId]
  );

  if (!course) return <div>Course not found</div>;

  const daysLeft = Math.ceil(
    (new Date(course.startDate).getTime() - Date.now()) / 86400000
  );

  return (
    <section className="max-w-5xl mx-auto my-12 px-4 md:px-0">
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
            <Link to="/courses" className="hover:text-primary font-medium">
              Courses
            </Link>
          </li>
          <li className="text-gray-500">{course.title}</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white pb-6 rounded-xl shadow-lg"
      >
        {/* Banner */}
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full lg:h-[400px] object-cover rounded-t-xl mb-6"
        />

        <div className="lg:p-10 p-4 space-y-6">
          {/* Title & Meta */}
          <h1 className="text-2xl lg:text-3xl font-bold text-emerald-800 mb-4">
            {course.title}
          </h1>

          <div className="flex flex-col lg:flex-row flex-wrap gap-4 text-sm text-gray-700 mb-10 lg:mb-20">
            <span className="flex items-start lg:items-center gap-2">
              <FaUsersRectangle className="w-5 h-5 text-yellow-600" />
              <strong>{course.batch}</strong>
            </span>
            <span className="flex items-start lg:items-center gap-2">
              <Calendar className="w-5 h-5 text-yellow-600" />
              {daysLeft > 0 ? `${daysLeft} days left` : "Starting soon"}
            </span>
            <span className="flex items-start lg:items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              Duration: {course.duration}
            </span>
            <span className="flex items-start lg:items-center gap-2">
              <Users className="w-5 h-5 text-yellow-600" />
              {course.students}+ students
            </span>
            <span className="flex items-start lg:items-center gap-2">
              <Star className="w-5 h-5 text-yellow-600" />
              {course.rating}
            </span>
          </div>

          {/* Features */}
          <Titles title="Key Features" textSize="text-2xl lg:text-3xl" />
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-14 lg:mb-20">
            {course.features.map((f, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex items-start gap-2 hover:text-pink-700"
              >
                <List className="w-4 h-4 text-emerald-600 mt-1" />
                {f}
              </motion.li>
            ))}
          </ul>

          {/* Curriculum */}
          <Titles title="Curriculum" textSize="text-2xl lg:text-3xl" />
          <ul className="list-decimal list-inside text-gray-800 space-y-4 lg:space-y-3 mb-10 mt-3 leading-relaxed">
            {course.curriculum.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="hover:text-pink-700"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Checkout Section */}
          <div className="border-t pt-6 flex flex-col md:flex-row justify-center lg:justify-between items-center gap-6">
            <div>
              <p className="text-red-500 line-through">৳{course.price}</p>
              <p className="text-2xl font-semibold text-green-600">
                ৳{course.discountPrice}
              </p>
              <p className="text-sm font-semibold animate-pulse text-gray-700 mt-1">
                {course.seatsLeft} seats left
              </p>
            </div>
            <Button
              to={`/checkout/${course.id}`}
              text="Enroll Now"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CourseDetails;
