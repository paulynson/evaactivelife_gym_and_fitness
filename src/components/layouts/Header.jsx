import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import MobileView from "../../features/MobileView";
import logo from "../../assets/evaactive_logo.png";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="py-8 ">
      <nav className="flex justify-between items-center bg-white px-4 rounded-lg">
        <Link
          to="/"
          className=" font-bold hover:text-green-600 hover:scale-105"
        >
          <img
            src={logo}
            alt="Evaactivelife Gym Logo"
            className="lg:w-28 w-20"
          />
        </Link>
        <section>
          <div className="lg:hidden block">
            <HiMenuAlt3
              className="text-slate-800 text-3xl cursor-pointer hover:text-green-600"
              onClick={() => setNavbar(!navbar)}
            />
          </div>
          <section className="lg:block hidden">
            <div className="flex gap-4 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold"
                    : "text-slate-800 hover:text-green-500"
                }
              >
                {" "}
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold"
                    : "text-slate-800 hover:text-green-500"
                }
              >
                {" "}
                About Us
              </NavLink>
              <NavLink
                to="/program"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold"
                    : "text-slate-800 hover:text-green-500"
                }
              >
                {" "}
                Program
              </NavLink>
              <NavLink
                to="/membership"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold"
                    : "text-slate-800 hover:text-green-500"
                }
              >
                {" "}
                Membership
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold"
                    : "text-slate-800 hover:text-green-500"
                }
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
              >
                {" "}
                Contact Us
              </NavLink>
            </div>
          </section>
        </section>
      </nav>
      {navbar && <MobileView navbar={navbar} setNavbar={setNavbar} />}
    </header>
  );
};

export default Header;
