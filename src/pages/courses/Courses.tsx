import courses from "../../data/courses.json";
import Container from "../../components/ui/Container";
import { Link } from "react-router-dom";
import { Calendar, Clock, Star, List } from "lucide-react";
import Titles from "../../components/utils/Titles";

const Courses = () => {
  return (
    <section className="lg:py-16 py-12 px-3 bg-emerald-50">
      <Container>
        <Titles title="Explore all Courses" />

        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white max-w-[400px] rounded-xl shadow pb-5 border border-yellow-100 hover:scale-105 duration-300 transition"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <div className="px-6 py-3">
                <h3 className="text-2xl font-semibold text-yellow-800 mb-1">
                  {course.title}
                </h3>

                <div className="flex flex-wrap text-sm text-gray-600 gap-3 my-5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-yellow-600" />
                    {course.startDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-600" />
                    {course.rating}
                  </span>
                </div>

                <ul className="text-sm text-gray-700 mb-4 space-y-1">
                  {course.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <List className="w-4 h-4 text-yellow-500 mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="w-full text-right">
                  <Link
                    to={`/course/${course.id}`}
                    className="inline-block mt-4 text-sm text-yellow-700 font-medium hover:text-yellow-900 hover:underline"
                  >
                    See Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Courses;
