import React from "react";
import logo from "../assets/Logo.png";
import { IoMdAddCircle } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <div className="px-12 py-8 flex justify-between mx-auto">
        <div className="">
          <img src={logo} alt="Logo" className="w-44" />
        </div>
        <div>
          <button>
            <IoMdAddCircle className="text-4xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
