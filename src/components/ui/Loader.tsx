import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Reveal homepage after doors open
    }, 3500); // Total duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Door Left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute top-0 left-0 w-1/2 h-full bg-black"
      />
      {/* Door Right */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-black"
      />
      {/* Center Content (Logo or Text) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold"
      >
        Klassroom
      </motion.div>
    </div>
  );
}
