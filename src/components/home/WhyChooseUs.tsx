import { motion } from "framer-motion";
import { BookCheck, Users, Clock, Award } from "lucide-react";
import { cardAnimation } from "../ui/Animation";
import Titles from "../utils/Titles";

const reasons = [
  {
    icon: <BookCheck className="h-8 w-8 text-green-600" />,
    title: "Certified Trainers",
    desc: "Learn from experienced educators and industry professionals.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "Community & Support",
    desc: "Get help, join study groups, and grow with a learning network.",
  },
  {
    icon: <Clock className="h-8 w-8 text-green-600" />,
    title: "Flexible Schedules",
    desc: "Access courses anytime, anywhere to fit your routine.",
  },
  {
    icon: <Award className="h-8 w-8 text-green-600" />,
    title: "Practical Skills",
    desc: "Hands-on learning for real-world applications and careers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="my-20 lg:my-28 bg-white px-3">
      <div className="max-w-6xl mx-auto text-center">
        <Titles title="Why Choose Us?" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnimation}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-green-50 border border-green-100 rounded-xl shadow p-6 text-left transform transition duration-300 hover:scale-105"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
