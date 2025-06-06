export const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export const typingChar = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

export const cardAnimation = {
  initial: { opacity: 0, scale: 0.95, y: 30 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 50,
    damping: 20,
    mass: 0.3,
    delay: 0.1,
  },
};

export const underlineAnimation = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 10,
      ease: "easeOut",
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
