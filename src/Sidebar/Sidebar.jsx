import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FileSpreadsheet,
  Code,
  Info,
  LayoutGrid,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-amber-600 text-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`top-0 left-0 h-screen w-64 bg-white shadow-xl flex flex-col py-8 px-6 border-r border-gray-200 transform transition-transform duration-300 z-40
        ${
          isOpen ? "fixed translate-x-0" : "fixed -translate-x-full"
        } md:static md:translate-x-0`}
      >
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent mb-12 text-center tracking-wide">
          Courses
        </h2>

        <nav className="flex flex-col space-y-4">
          <Link
            to="/mscITinfo"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg font-semibold text-gray-700 px-3 py-2 rounded-xl hover:bg-orange-100 hover:text-orange-600 transition-all duration-200"
          >
            <LayoutGrid size={20} /> MSCIT
          </Link>

          <Link
            to="/tallyinfo"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg font-semibold text-gray-700 px-3 py-2 rounded-xl hover:bg-yellow-100 hover:text-yellow-600 transition-all duration-200"
          >
            <FileSpreadsheet size={20} /> Tally
          </Link>

          <Link
            to="/advanceexcelinfo"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg font-semibold text-gray-700 px-3 py-2 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-200"
          >
            <BookOpen size={20} /> Advance Excel
          </Link>

          <Link
            to="/cppinfo"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg font-semibold text-gray-700 px-3 py-2 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-200"
          >
            <Code size={20} /> C++
          </Link>

          <Link
            to="/knowmoreinfo"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg font-semibold text-gray-700 px-3 py-2 rounded-xl hover:bg-purple-100 hover:text-purple-600 transition-all duration-200"
          >
            <Info size={20} /> Know More
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
