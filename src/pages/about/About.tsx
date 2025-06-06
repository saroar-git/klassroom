import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Titles from "../../components/utils/Titles";
import Team from "./Team";
import Timeline from "./Timeline";

export default function About() {
  return (
    <>
      <section className="relative bg-emerald-50 lg:py-16 py-12 px-3">
        <Container className="text-center">
          <Titles
            title="About Klassroom"
            subTitle="Learn more about our mission, vision, and the journey behind building
          a platform that empowers learners with real-world skills."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Our mission to democratize education by offering accessible,
                affordable, and high-quality learning opportunities. We aim to
                equip learners with the practical skills needed to succeed in
                real-world careers — through soft skills, tech courses, or exam
                preparation.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Klassroom is on a vision is to build a future where lifelong
                learning is a norm, not a luxury. We see Klassroom as a thriving
                digital space that nurtures creativity, empowers learners, and
                bridges the gap between academic learning and professional
                excellence.
              </p>
            </motion.div>
          </div>

          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
                The Journey Behind Klassroom
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Klassroom started as a passion project to bring modern,
                human-centered education to Bangladesh and beyond. After facing
                the challenges of conventional learning systems, our founder
                envisioned a platform where education meets innovation, empathy,
                and relevance. What began as a simple idea is now growing into a
                dynamic ecosystem of learners, mentors, and changemakers.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Team */}
      <section className="relative bg-base-300 lg:py-16 py-12 px-3">
        <Team />
      </section>

      {/* Timeline */}
      <section className="relative bg-yellow-50 lg:py-16 py-12 px-3">
        <Timeline />
      </section>
    </>
  );
}
