import { motion } from "framer-motion";
import { School, GraduationCap, User } from "lucide-react";
import instructors from "../../data/instructors.json";
import Container from "../../components/ui/Container";
import Titles from "../../components/utils/Titles";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Instructors = () => {
  return (
    <section className="lg:py-16 py-12 px-3 bg-blue-50">
      <Container>
        <Titles title="Meet Our Instructors" />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="w-full hover:scale-105 transform transition-all duration-300"
            >
              <div className="card shadow-lg bg-base-100 hover:shadow-xl transition-all">
                <figure className="w-full h-full object-contain rounded-full flex items-center justify-center">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-48 h-48 object-cover rounded-full"
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="card-title text-2xl">
                    <User className="w-5 h-5 mr-1" />
                    {instructor.name}
                    <Link
                      to={instructor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-6 h-6 text-[#006FAC]" />
                    </Link>
                  </h2>
                  <p className="text-base text-gray-600 flex items-center gap-1 mt-4">
                    <GraduationCap className="w-4 h-4" />
                    {instructor.title}
                  </p>
                  <p className="text-base flex items-center gap-1 text-gray-800">
                    <School className="w-4 h-4" />
                    {instructor.department}
                  </p>
                  <p className="text-base italic flex items-center text-gray-800">
                    {instructor.institute}
                  </p>
                  <div className="mt-5 w-full text-center text-[#006FAC] text-lg"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Instructors;
