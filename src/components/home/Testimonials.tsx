import { motion } from "framer-motion";
import { cardAnimation } from "../ui/Animation";
import Titles from "../utils/Titles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Ayesha Rahman",
    quote:
      "Klassroom helped me prepare for IELTS with clarity and confidence. The instructors are amazing!",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Sabbir Ahmed",
    quote:
      "The SPSS course was a game-changer for my thesis. I highly recommend Klassroom to anyone!",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Farhana Binte Alam",
    quote:
      "Loved the flexibility and how the course fits my schedule. Good luck and Thank you Klassroom!",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="my-20 lg:my-28 bg-yellow-50 px-3 py-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <Titles title="What Our Students Say" />

        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardAnimation}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="card bg-white shadow-lg border border-yellow-100 px-6 py-8 mx-4"
            >
              <div className="flex flex-col items-center">
                <img
                  src={t.avatar}
                  className="max-w-28 rounded-full mb-4 border-4 border-yellow-100"
                  alt={t.name}
                />
                <p className="text-gray-700 text-lg mb-4 italic">"{t.quote}"</p>
                <h4 className="text-yellow-700 font-semibold mb-4">{t.name}</h4>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
