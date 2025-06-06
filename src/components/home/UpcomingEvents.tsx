import { motion } from "framer-motion";
import { cardAnimation } from "../ui/Animation";
import Titles from "../utils/Titles";

const events = [
  {
    title: "IELTS Crash Course",
    date: "June 15, 2025",
    time: "5:00 PM – 7:00 PM",
    location: "Online",
    desc: "Boost your IELTS band score with expert strategies and practice.",
  },
  {
    title: "SPSS for Beginners",
    date: "June 20, 2025",
    time: "3:00 PM – 5:00 PM",
    location: "Zoom",
    desc: "Learn how to analyze data using SPSS – no experience needed!",
  },
  {
    title: "Soft Skills Workshop",
    date: "June 25, 2025",
    time: "4:00 PM – 6:00 PM",
    location: "Google Meet",
    desc: "Master communication and teamwork for career advancement.",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="my-20 lg:my-28 px-3 bg-pink-50 py-12">
      <Titles
        title="Upcoming Events"
        subTitle="Join our live workshops and sessions to accelerate your growth."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            variants={cardAnimation}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="bg-base-200 border border-pink-100 rounded-xl shadow p-6"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              📅 {event.date} · ⏰ {event.time}
            </p>
            <p className="text-sm text-gray-600 mb-4">📍 {event.location}</p>
            <p className="text-gray-700 mb-6">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
