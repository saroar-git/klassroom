import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import Courses from "../pages/courses/Courses";
import SoftSkills from "../components/blogs/SoftSkills";
import SPSS from "../components/blogs/SPSS";
import IELTS from "../components/blogs/IELTS";
import EducationTech from "../components/blogs/EducationTech";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blog/soft-skills-career-success", element: <SoftSkills /> },
      { path: "blog/spss-basics", element: <SPSS /> },
      { path: "blog/ielts-prep-guide", element: <IELTS /> },
      { path: "blog/education-innovation", element: <EducationTech /> },
      { path: "contact", element: <Contact /> },
      { path: "courses", element: <Courses /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
