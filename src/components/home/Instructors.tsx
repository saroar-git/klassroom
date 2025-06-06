import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { cardAnimation } from "../ui/Animation";
import Titles from "../utils/Titles";
import { Link } from "react-router-dom";

const instructors = [
  {
    name: "Mithun Dey",
    title: "SPSS & Data Analytics Instructor",
    image:
      "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/502609000_2543600545999834_4083842778528530199_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9VF1ysLZY8MQ7kNvwHz0Om1&_nc_oc=AdmZZpmVFBnN9y9hDwN-wYLpmby_1YqUTz_osfy-fJV14wAzrzgiHptMbwqDhsVsRUM&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nsLr-pAVp4zzOM5BJsTe-A&oh=00_AfPrnRCxW8Q4TYQlB-oS_SDNKi3OIBYiNcfFszR4KRyxEg&oe=68482D30",
    linkedin: "https://www.linkedin.com/in/mithun-547s/",
  },
  {
    name: "Dr. Faisal Islam",
    title: "IELTS & Soft Skills Expert",
    image: "https://i.pravatar.cc/150?img=12",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    name: "Shamima Akter",
    title: "Career Coach & Public Speaker",
    image: "https://i.pravatar.cc/150?img=21",
    linkedin: "https://linkedin.com/in/example3",
  },
];

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
                <Linkedin className="w-7 h-7 border rounded p-1 mx-auto bg-[#006FAC] text-white" />
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
