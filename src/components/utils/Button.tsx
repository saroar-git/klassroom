import { Link } from "react-router-dom";

type AnimatedLinkButtonProps = {
  to: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
};

const Button = ({
  to,
  text,
  icon,
  className = "",
}: AnimatedLinkButtonProps) => {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center justify-center overflow-hidden pl-7 pr-12 py-2 font-semibold transition-all duration-300 group border border-emerald-700 rounded-md ${className}`}
    >
      <span className="absolute inset-0 w-0 bg-emerald-700 transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>

      <span className="absolute right-4 translate-x-8 opacity-0 transition-all duration-300 delay-200 group-hover:translate-x-0 group-hover:opacity-100 z-10">
        {icon ?? (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        )}
      </span>

      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};

export default Button;
