import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'; 

export default function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-10 p-5 px-4 sm:px-28 bg-slate-700">
      <div className="container flex items-center justify-between mx-auto">
        <div className="navbar-brand">
          <h1 className="py-3 text-2xl font-bold leading-tight text-white sm:text-3xl sm:leading-10">
            <Link to={""}>START FRAMEWORK</Link>
          </h1>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex gap-2 sm:gap-4">
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `p-2 sm:p-3 font-bold duration-500 ease-in-out rounded-xl ${isActive ? 'bg-sky-300' : 'text-white'}`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/portfolio"
                className={({ isActive }) => 
                  `p-2 sm:p-3 font-bold duration-500 ease-in-out rounded-xl ${isActive ? 'bg-sky-300' : 'text-white'}`
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  `p-2 sm:p-3 font-bold duration-500 ease-in-out rounded-xl ${isActive ? 'bg-sky-300' : 'text-white'}`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
