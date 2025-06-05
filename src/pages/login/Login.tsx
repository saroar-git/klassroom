import { useState } from "react";
import { motion } from "framer-motion";
import "./login.css"; // required custom CSS for flip

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => setIsLogin((prev) => !prev);

  return (
    <div className="min-h-[calc(100vh-62px)] flex items-center justify-center bg-gray-100 px-4">
      <div
        className="perspective w-full max-w-md relative"
        style={{ height: isLogin ? "380px" : "530px" }}
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
      <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
        {isLogin ? "Login to Your Account" : "Create a New Account"}
      </h2>

      <form className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer mt-2"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={toggleMode}
          className="text-emerald-700 font-medium hover:underline ml-1 cursor-pointer"
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Login;
