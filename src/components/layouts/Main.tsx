import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="poppins">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
