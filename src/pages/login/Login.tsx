import { useState } from "react";
import { motion } from "framer-motion";
import "./login.css";
import RegistrationForm from "../../components/login/RegistrationForm";
import LoginForm from "../../components/login/LoginForm";
import clsx from "clsx";

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const typingChar = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => setIsLogin((prev) => !prev);

  return (
    <div className="lg:min-h-[calc(100vh-63px)] min-h-[90vh] flex flex-col items-center py-12 lg:py-16 bg-gray-100 px-3">
      <div
        className={clsx(
          "perspective w-full max-w-md relative",
          isLogin ? "h-[400px] lg:h-[380px]" : "h-[820px] md:h-[540px]"
        )}
      >
        <motion.div
          className="flip-card-inner w-full h-full relative"
          animate={{ rotateY: isLogin ? 0 : 180 }}
          transition={{ duration: 0.8 }}
        >
          {/* Front (Login) */}
          <div className="auth-face front">
            <AuthForm type="login" toggleMode={toggleMode} />
          </div>

          {/* Back (Register) */}
          <div className="auth-face back">
            <AuthForm type="register" toggleMode={toggleMode} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AuthForm = ({
  type,
  toggleMode,
}: {
  type: "login" | "register";
  toggleMode: () => void;
}) => {
  const isLogin = type === "login";

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full h-full">
      <motion.h1
        className="text-3xl font-bold text-center text-[#EE4B84] mb-6 flex flex-wrap justify-center"
        variants={typingContainer}
        initial="hidden"
        animate="visible"
      >
        {(isLogin ? "Login to Learn" : "Create an Account")
          .split("")
          .map((char, index) => (
            <motion.span key={index} variants={typingChar}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
      </motion.h1>

      <div className="space-y-4">
        {!isLogin && <RegistrationForm />}

        {isLogin && <LoginForm />}
      </div>

      <p className="text-center text-sm text-gray-600 mt-6">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={toggleMode}
          className="text-[#EE4B84] font-medium hover:underline ml-1 cursor-pointer"
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Login;
