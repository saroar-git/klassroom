import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Titles from "../../components/utils/Titles";

const Timeline = () => {
  return (
    <Container className="w-full mx-auto">
      <Titles title="Our Journey So Far" />
      <motion.ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-16">
        {[
          {
            year: "2024",
            title: "The Idea Was Born",
            description:
              "After working with university students, we realized the gap between academic learning and real-world skills. Klassroom was envisioned to bridge that gap.",
            side: "start",
          },
          {
            year: "2025",
            title: "Team Formation",
            description:
              "Like-minded educators and developers came together with a shared mission to make learning accessible and practical for all.",
            side: "end",
          },
          {
            year: "2025 May",
            title: "First Course Launched",
            description:
              "Our first SPSS course went live, reaching 200+ students and gaining feedback to improve our platform and content.",
            side: "start",
          },
          {
            year: "2025",
            title: "Expanding Our Reach",
            description:
              "We're partnering with industry experts and launching soft skill training like IELTS, CV writing, and freelancing fundamentals.",
            side: "end",
          },
        ].map((event, i) => (
          <li key={i}>
            {event.side === "end" && <hr />}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-emerald-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`timeline-${event.side} mb-10 ${
                event.side === "start" ? "md:text-end" : ""
              }`}
            >
              <time className="font-mono italic">{event.year}</time>
              <div className="text-lg font-black">{event.title}</div>
              {event.description}
            </div>
            <hr />
          </li>
        ))}
      </motion.ul>
    </Container>
  );
};

export default Timeline;
