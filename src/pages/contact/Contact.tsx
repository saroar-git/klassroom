import { motion } from "framer-motion";
import { fadeUp } from "../../components/ui/Animation";
import { Mail, MapPin, Phone, Facebook, Linkedin } from "lucide-react";
import Titles from "../../components/utils/Titles";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="lg:py-16 py-12 px-3 bg-emerald-50">
      <div className="max-w-6xl mx-auto">
        <Titles title="Get in Touch" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow"
          >
            <form className="space-y-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject of your message"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn bg-emerald-600 text-white hover:bg-emerald-700 w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-600" />
                <p>Rajshahi, Bangladesh</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-600" />
                <a
                  href="mailto:klassroom.bd@gmail.com"
                  className="hover:underline"
                >
                  klassroom.bd@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-600" />
                <a href="tel:+880123456789" className="hover:underline">
                  +880 1234 56789
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-4">
              <Link
                to="https://www.facebook.com/profile.php?id=61576946549117"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0866FF] rounded-full text-white"
              >
                <Facebook className="w-5 h-5 transition" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#006FAC] rounded-full text-white"
              >
                <Linkedin className="w-5 h-5 transition" />
              </Link>
            </div>

            {/* Google Map Embed */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.5891561239395!2d88.63864339776164!3d24.36889440000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf02ebd548c07%3A0x17bd99fdd79e0ca4!2sRacsu%20Bhaban%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1749186127823!5m2!1sen!2sbd"
                width="100%"
                height="340"
                className="rounded-xl border-0 w-full"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
