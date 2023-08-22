/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileView = ({ navbar, setNavbar }) => {
  return (
    <div className="fixed top-0 left-0 z-50 h-[100vh] w-full lg:hidden block">
      <div className="relative">
        <div className="flex gap-6 items-center flex-col justify-center text-center bg-gray-800 h-[100vh] ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-bold" : "text-white"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-bold" : "text-white"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            About Us
          </NavLink>
          <NavLink
            to="/program"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-bold" : "text-white"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Program
          </NavLink>
          <NavLink
            to="/membership"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-bold" : "text-white"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Membership
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-bold" : "text-white"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Shop
          </NavLink>
          {/* <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              isActive ? "text-green-400 font-bold" : "text-white"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Testimonials
          </NavLink> */}
          <button className="py-2 px-5 bg-green-400 text-white hover:bg-green-600 rounded-lg ">
            Sign Up
          </button>
        </div>
        <div className="absolute top-4 right-0 p-4  cursor-pointer">
          <AiOutlineCloseCircle
            className="text-white text-3xl hover:text-green-600"
            onClick={() => setNavbar(!navbar)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileView;
