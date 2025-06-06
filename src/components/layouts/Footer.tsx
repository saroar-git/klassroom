import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={logo}
            className="w-36 mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 leading-relaxed"
          >
            Empowering learners with affordable, expert-led courses designed to
            build real-world skills for success.
          </motion.p>
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@klassroom.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +880-123-456789
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" /> Rajshahi, Bangladesh
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to get updates on new courses, events, and blog posts.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3 lg:gap-0">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md lg:rounded-l-md text-white outline-white ring-1 ring-white"
            />
            <button className="bg-white text-emerald-700 px-4 py-2 rounded-md lg:rounded-r-md border   border-white font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-t border-emerald-700 mt-12 pt-6 text-center text-sm text-gray-400 space-y-2"
      >
        <div className="flex justify-center gap-6 mb-6">
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

        <p>© {new Date().getFullYear()} Klassroom. All rights reserved.</p>

        <p>
          Developed by{" "}
          <Link
            to="https://www.linkedin.com/in/saroar-in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-medium"
          >
            Saroar Jahan
          </Link>
        </p>
      </motion.div>
    </footer>
  );
}
