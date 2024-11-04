import React from "react";
import logo from "../assets/Logo.png";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="px-12 py-8 flex justify-between mx-auto">
        <Link to={"/"}>
          <div className="">
            <img src={logo} alt="Logo" className="w-44" />
          </div>
        </Link>
        <Link to={"/create"}>
          <button>
            <IoMdAddCircle className="text-4xl" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
