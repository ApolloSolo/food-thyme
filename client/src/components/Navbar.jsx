import { useState } from "react";
import {
  FaBars,
  FaRegWindowClose,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import InnerDropdown from "../components/InnerDropdown";

const Navbar = () => {
    // Define links for Service dropdown menu
  let Links = [
    { name: "Data Analysis", link: "/" },
    { name: "Consulting", link: "/" },
    { name: "Web Application", link: "/" },
    { name: "Web Design", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  let [dropdown, setDropdown] = useState(false);
  return (
    <nav className="shadow-md relative w-full bg-[#737B6C]">
      <div className="md:flex justify-between py-4 md:px-10 px-4">
        <div className="flex items-center font-bold text-2xl cursor-pointer">
          <h1>Food-Thyme</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? <FaRegWindowClose /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 md:static absolute bg-[#737B6C] md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-300 ease-in ${
            open ? "top-[60px] opacity-100 border-b-2 border-[#5b6454]" : "top-[-500px] opacity-0"
          } md:opacity-100`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <a
              href="/"
              className="hover:text-gray-700 duration-200 font-semibold"
            >
              Home
            </a>
          </li>
          <div className="relative" onClick={() => setDropdown(!dropdown)}>
            <div className="flex items-center cursor-pointer">
              <li className="md:ml-8 text-xl md:my-0 mr-1 hover:text-gray-700 duration-200 font-semibold">
                Recipes
              </li>
              {
                dropdown ? (<FaChevronUp/>) : (<FaChevronDown />)
              }
            </div>
            {dropdown ? (
              <InnerDropdown list={Links}/>
            ) : (
              false
            )}
          </div>
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <a
              href="/login"
              className="hover:text-gray-700 duration-200 font-semibold"
            >
              Login
            </a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <a
              href="/register"
              className="hover:text-gray-700 duration-200 font-semibold"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;