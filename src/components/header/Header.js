import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MdShoppingCart } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);


  const activeMenu = ({isActive}) => (
    isActive ? "text-[#E67B04]" : ""
  )

  return (
    <header className="text-white w-full bg-green-400 h-20 px-5 fixed top-0 flex items-center">
      <nav
        className={`flex flex-col md:flex-row justify-center fixed w-full left-0 md:left-[20%] 
        h-[100vh] md:h-20 md:top-0 bg-green-400 duration-500 md:w-[70%] md:justify-end ${
          open ? "top-20" : "-top-[100%]"
        }`}
      >
        <ul className="md:w-[65%] md:flex md:justify-center md:items-center text-center">
          <li className="p-5 md:inline-block text-lg duration-500 md:hover:text-[#E67B04]">
            <NavLink to="/" className={activeMenu}>Home</NavLink>
          </li>
          <li className="p-5 md:inline-block text-lg duration-500 md:hover:text-[#E67B04]">
            <NavLink className={activeMenu} to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <ul className="text-center md:w-[35%] md:flex md:justify-end items-center">
          <li className="p-5 md:inline-block text-lg duration-500 md:hover:text-[#E67B04]">
            <NavLink className={activeMenu} to="/login">Login</NavLink>
          </li>
          <li className="p-5 md:inline-block text-lg duration-500 md:hover:text-[#E67B04]">
            <NavLink className={activeMenu} to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>

      <div className="w-[15%] absolute">
        <Link>
          <img className="w-28" src={logo} alt="" />
        </Link>
      </div>

      <div className="text-2xl absolute right-0 m-10">
        <button className="relative duration-500 md:hover:text-[#E67B04] mx-5">
          <NavLink className={activeMenu} to="/cart">
            <MdShoppingCart />
            <span className="absolute -top-2 -right-2 text-base">0</span>
          </NavLink>
        </button>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

    </header>
  );
};

export default Header;
