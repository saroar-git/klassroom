import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="poppins">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
