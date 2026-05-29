import { NavLink } from "react-router-dom";
import { ROUTE_PATH } from "../../routes/routePath";
import BronxLogo from "../../assets/images/bronx-logo-retina.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <NavLink to={ROUTE_PATH.HOME} className="font-bold text-xl">
          <img src={BronxLogo} alt="MyLogo" className="h-10 w-fit" />
        </NavLink>
        <ul className="flex items-center gap-6">
          <li className="text-[16px] active:scale-95 transition-transform">
            <NavLink
              to={ROUTE_PATH.HOME}
              className={({ isActive }) =>
                `
                relative transition-all duration-300
                ${
                  isActive
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-500"
                    : "text-slate-300 hover:text-white"
                }
              `
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-[16px] active:scale-95 transition-transform">
            <NavLink
              to={ROUTE_PATH.ABOUT}
              className={({ isActive }) =>
                `
                relative transition-all duration-300
                ${
                  isActive
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-500"
                    : "text-slate-300 hover:text-white"
                }
              `
              }
            >
              About
            </NavLink>
          </li>
          <li className="text-[16px] active:scale-95 transition-transform">
            <NavLink
              to={ROUTE_PATH.CONTACT}
              className={({ isActive }) =>
                `
                relative transition-all duration-300
                ${
                  isActive
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-500"
                    : "text-slate-300 hover:text-white"
                }
              `
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              width="32"
              height="32"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8h2a2 2 0 012 2v9l-4-3H9a2 2 0 01-2-2v-2"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 6a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7l-4 3V6z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm">Have Any Questions?</span>
            <a
              href="tel:+855962229928"
              className="hover:text-blue-500 text-sm transition-all ease-in-out duration-200"
            >
              Free: +855-96-222-9928
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
