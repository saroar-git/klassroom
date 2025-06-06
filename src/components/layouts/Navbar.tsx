import { NavLink, Link } from "react-router-dom";
import { Home, BookOpen, Info, Newspaper, Phone, UserPlus } from "lucide-react";
import Button from "../utils/Button";

const Navbar = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-emerald-700" : "text-gray-700 hover:text-emerald-700"
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={getNavLinkClass}>
          <Home size={18} />
          Home
        </NavLink>
      </li>
      <li className="my-3 md:my-0">
        <NavLink to="/courses" className={getNavLinkClass}>
          <BookOpen size={18} />
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={getNavLinkClass}>
          <Info size={18} />
          About Us
        </NavLink>
      </li>
      <li className="my-3 md:my-0">
        <NavLink to="/blogs" className={getNavLinkClass}>
          <Newspaper size={18} />
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={getNavLinkClass}>
          <Phone size={18} />
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100">
      <div className="navbar shadow-sm md:shadow-none h-full w-full max-w-7xl mx-auto">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          {/* Brand */}
          <Link
            to="/"
            className="btn bg-white border-none shadow-none text-xl font-poppins text-emerald-700"
          >
            <img src="/klassroom.png" alt="" className="w-36" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* Right-end button */}
        <div className="navbar-end">
          <Button
            text="Login"
            to="/login"
            icon={<UserPlus className="w-5 h-5 text-white" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
