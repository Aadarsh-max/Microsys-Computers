import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Courses from "./Courses/Courses";


import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

import Mscitpage from "./Detailed Courses/Mscitpage";
import Tallypage from "./Detailed Courses/Tallypage";
import ExcelPage from "./Detailed Courses/ExcelPage";
import Cpppage from "./Detailed Courses/Cpppage";

import MscitInfo from "./Infopages/MscitInfo";
import TallyInfo from "./Infopages/TallyInfo";
import AdvanceExcelInfo from "./Infopages/AdvanceExcelInfo";
import CppInfo from "./Infopages/CppInfo";
import Knowmoreinfo from "./Infopages/Knowmoreinfo";

import Enquiry from "./Enquiry/Enquiry";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex">
      <Sidebar/>
      <div className="flex-1 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tally" element={<Tallypage />} />
        <Route path="/mscIT" element={<Mscitpage />} />
        <Route path="/excel" element={<ExcelPage />} />
        <Route path="/cpp" element={<Cpppage />} />
        <Route path="/mscITinfo" element={<MscitInfo />} />
        <Route path="/tallyinfo" element={<TallyInfo />} />
        <Route path="/advanceexcelinfo" element={<AdvanceExcelInfo />} />
        <Route path="/cppinfo" element={<CppInfo/>} />
        <Route path="/knowmoreinfo" element={<Knowmoreinfo/>} />
        <Route path="/enquiry" element={<Enquiry/>} />
        
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;
