import { motion } from "framer-motion";
import { Users, Calendar, TvMinimalPlay } from "lucide-react";
import { cardAnimation } from "../ui/Animation";
import Button from "../utils/Button";
import Titles from "../utils/Titles";
import courses from "../../data/courses.json";
import { Link } from "react-router-dom";
import { FaUsersRectangle } from "react-icons/fa6";

const getDaysLeft = (startDate: string) => {
  const today = new Date();
  const start = new Date(startDate);
  const diff = Math.ceil(
    (start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  return diff > 0 ? `${diff} days left` : "Starting soon";
};

const OfferCourse = () => {
  return (
    <section id="courses" className="my-20 lg:my-28 bg-yellow-50 px-3 py-12">
      <Titles title="Courses We Offer" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            variants={cardAnimation}
            initial="initial"
            whileInView="whileInView"
            transition={cardAnimation.transition}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md pb-5 w-full max-w-md border border-yellow-200 hover:shadow-lg transition-all text-center hover:scale-105 transform duration-300"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-50 object-cover mb-2 rounded-t-2xl"
            />

            <div className="px-6 mb-5">
              <div className="flex justify-center items-center gap-2 text-sm text-gray-700 mb-4">
                <p className="flex items-center gap-2 text-sm bg-gray-300 px-4 py-1.5 rounded">
                  <FaUsersRectangle className="w-4 h-4 text-yellow-600" />{" "}
                  {course.batch}
                </p>
                <div className="flex items-center gap-2 text-sm bg-gray-300 px-4 py-1.5 rounded">
                  <Users className="w-4 h-4 text-yellow-600" />
                  <span>{course.seatsLeft} seats left</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-gray-300 px-4 py-1.5 rounded">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  <span>{getDaysLeft(course.startDate)}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-yellow-800 mb-1">
                {course.title}
              </h3>
            </div>
            <Link
              to={`/course/${course.id}`}
              className="text-sm text-yellow-700 hover:text-yellow-800 hover:link"
            >
              See Details
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
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
