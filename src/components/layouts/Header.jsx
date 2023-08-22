import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import MobileView from "../../features/MobileView";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="py-8">
      <nav className="flex justify-between items-center">
        <Link
          to="/"
          className=" font-bold hover:text-green-600 hover:scale-105"
        >
          EvaActiveLife Gym & Fitness
        </Link>
        <section>
          <div className="lg:hidden block">
            <HiMenuAlt3
              className="text-white text-3xl cursor-pointer hover:text-green-600"
              onClick={() => setNavbar(!navbar)}
            />
          </div>
          <section className="lg:block hidden">
            <div className="flex gap-4 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold"
                    : "text-white hover:text-green-400"
                }
              >
                {" "}
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold"
                    : "text-white hover:text-green-400"
                }
              >
                {" "}
                About Us
              </NavLink>
              <NavLink
                to="/program"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold"
                    : "text-white hover:text-green-400"
                }
              >
                {" "}
                Program
              </NavLink>
              <NavLink
                to="/membership"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold"
                    : "text-white hover:text-green-400"
                }
              >
                {" "}
                Membership
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold"
                    : "text-white hover:text-green-400"
                }
              >
                {" "}
                Shop
              </NavLink>
              {/* <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive ? "text-green-400 font-bold" : "text-white hover:text-green-400"
                }
              >
                {" "}
                Testimonials
              </NavLink> */}
              <button className="py-3 px-6 bg-green-400 text-white hover:bg-green-600 rounded-full ">
                Sign Up
              </button>
            </div>
          </section>
        </section>
      </nav>
      {navbar && <MobileView navbar={navbar} setNavbar={setNavbar} />}
    </header>
  );
};

export default Header;
