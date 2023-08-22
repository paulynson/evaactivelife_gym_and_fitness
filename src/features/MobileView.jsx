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
              isActive
                ? "text-green-400 font-bold text-3xl"
                : "text-white hover:text-green-400 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-bold text-3xl"
                : "text-white hover:text-green-400 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            About Us
          </NavLink>
          <NavLink
            to="/program"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-bold text-3xl"
                : "text-white hover:text-green-400 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Program
          </NavLink>
          <NavLink
            to="/membership"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-bold text-3xl"
                : "text-white hover:text-green-400 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Membership
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-bold text-3xl"
                : "text-white hover:text-green-400 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Shop
          </NavLink>
          {/* <NavLink
            to="/testimonials"
            className={({ isActive }) = text-3xl>
              isActive ? "text-green-400 font-bold" : "text-white hover:text-green-400 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Testimonials
          </NavLink> */}
          <button className="py-3 px-6 bg-green-400 text-white font-bold hover:bg-green-600 text-lg rounded-full ">
            Sign Up
          </button>
        </div>
        <div className="absolute top-4 right-3 p-4 cursor-pointer">
          <AiOutlineCloseCircle
            className="text-white text-3xl hover:text-green-600 hover:animate-spin"
            onClick={() => setNavbar(!navbar)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileView;
