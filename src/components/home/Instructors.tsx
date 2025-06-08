import { motion } from "framer-motion";
import { cardAnimation } from "../ui/Animation";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Titles from "../utils/Titles";
import instructors from "../../data/instructors.json";

export default function Instructors() {
  return (
    <section id="instructors" className="my-20 lg:my-28 px-3">
      <div className="max-w-6xl mx-auto text-center">
        <Titles title="Meet Our Instructors" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {instructors.map((inst, i) => (
            <motion.div
              key={i}
              variants={cardAnimation}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow border border-emerald-100 p-6 text-center transition duration-300 hover:scale-105"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-emerald-200"
              />
              <h3 className="text-xl font-semibold text-emerald-700 mb-1">
                {inst.name}
              </h3>
              <p className="text-gray-600 mb-3">{inst.title}</p>
              <a href={inst.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-7 h-7 mx-auto text-[#006FAC]" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10 transition hover:scale-105 duration-300">
        <Link
          to="/instructors"
          className="text-emerald-700 font-semibold hover:text-emerald-900"
        >
          View All Instructors →
        </Link>
      </div>
    </section>
  );
}
