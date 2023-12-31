/* eslint-disable react/prop-types */
import { NavLink, Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from "../assets/evaactive_logo.png";

interface MobileViewProps {
  navbar: boolean;
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileView: React.FC<MobileViewProps> = ({ navbar, setNavbar }) => {
  return (
    <div className="fixed top-0 left-0 z-50 h-[100vh] w-full lg:hidden block">
      <div className="relative">
        <div className="flex gap-6 items-center flex-col justify-center text-center bg-gray-800 h-[100vh] ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-bold text-3xl"
                : "text-white hover:text-green-500 text-xl"
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
                ? "text-green-500 font-bold text-3xl"
                : "text-white hover:text-green-500 text-xl"
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
                ? "text-green-500 font-bold text-3xl"
                : "text-white hover:text-green-500 text-xl"
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
                ? "text-green-500 font-bold text-3xl"
                : "text-white hover:text-green-500 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Membership
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-bold text-3xl"
                : "text-white hover:text-green-500 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Gym Videos
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-bold text-3xl"
                : "text-white hover:text-green-500 text-xl"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Shop
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold bg-green-600 rounded-full py-3 px-6"
                : "py-3 px-6 bg-green-400 text-white hover:bg-green-600 rounded-full"
            }
            onClick={() => setNavbar(!navbar)}
          >
            {" "}
            Contact Us
          </NavLink>
        </div>
        {/* Mobile Nav */}
        <section>
          <Link to="/" className="absolute top-2 left-3 p-4 cursor-pointer">
            <img src={logo} alt="Evaactivelife Gym & Fitnes" className="w-16 hover:scale-105" />
          </Link>
          <div className="absolute top-4 right-3 p-4 cursor-pointer">
            <AiOutlineCloseCircle
              className="text-white text-3xl hover:text-green-600 hover:animate-spin"
              onClick={() => setNavbar(!navbar)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileView;
