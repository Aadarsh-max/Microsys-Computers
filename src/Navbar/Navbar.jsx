import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b-2 border-amber-200 rounded-b-2xl relative">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <h1 className="flex items-center text-sm xs:text-base sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-amber-600 italic tracking-tight sm:tracking-wide gap-1 xs:gap-2 sm:gap-3 flex-shrink min-w-0">
          <img
            src="/microsys.jpg"
            alt="Logo"
            className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 object-contain align-middle flex-shrink-0"
          />
          <span className="align-middle truncate">
            <span className="block xs:hidden">Microsys</span>
            <span className="hidden xs:block sm:hidden">Microsys Comp.</span>
            <span className="hidden sm:block">Microsys Computers</span>
          </span>
        </h1>

        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} className="text-amber-600 p-1">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav
          className={`flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent px-4 sm:px-6 lg:px-0 py-4 lg:py-0 shadow-md lg:shadow-none z-50 transform transition-all duration-300 ${
            open
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100"
          }`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base text-center"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base text-center"
          >
            <span className="relative z-10">About Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/courses"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base text-center"
          >
            <span className="relative z-10">Courses</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base text-center"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/enquiry"
            onClick={() => setOpen(false)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base text-center"
          >
            <span className="relative z-10">Enquiry</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
