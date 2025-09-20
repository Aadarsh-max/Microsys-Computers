import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  BookOpen,
  Laptop,
  Briefcase,
  Award,
  Star,
} from "lucide-react";

const AdvanceExcelInfo = () => {
  const [isVisible, setIsVisible] = useState({});

  const highlights = [
    "Formulas & Functions – Automate calculations and streamline tasks.",
    "Pivot Tables – Analyze and summarize large datasets with ease.",
    "VBA & Macros – Automate repetitive tasks and create advanced workflows.",
    "Data Management – Organize, validate, and manage data professionally.",
    "Statistical Modeling – Perform advanced data analysis and reporting.",
    "External Data Linking – Connect Excel with external databases.",
  ];

  const skills = [
    "Data Filters & Sorting",
    "Data Validation",
    "SUMIF, COUNTIF, SUMIFS, COUNTIFS",
    "VLOOKUP & HLOOKUP",
    "Pivot Charts & Power View",
    "Auditing & IF Formulas",
    "Excel Shortcuts",
    "Conditional Formatting",
  ];

  const jobs = [
    "Data Analyst",
    "Financial Analyst",
    "Business Analyst",
    "Retail Store Manager",
    "Project Manager",
    "Data Journalist",
    "Accountant",
    "Administrative Assistant",
    "Cost Estimator",
  ];

  const features = [
    "Self-learning with guided support",
    "Assignments & case studies for real experience",
    "Industry-relevant skills for job readiness",
    "Personality development & interview practice",
    "Recognized curriculum with international standards",
  ];

  const addons = [
    "KLiC Tally Prime with GST",
    "KLiC Advanced Tally Pro with GST",
    "KLiC English",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-16" id="hero" data-animate>
        <div
          className={`transition-all duration-1000 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl font-bold text-green-800 mb-6 bg-gradient-to-r from-green-800 to-emerald-600 bg-clip-text animate-pulse">
            KLiC Advanced Excel Course
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Build Your Career in Data Management with Advanced Excel. Master the
            most in-demand Excel skills and become job-ready with powerful tools
            to manage, analyze, and visualize data effectively.
          </p>
        </div>
      </div>

      <div className="mb-16" id="highlights" data-animate>
        <div
          className={`transition-all duration-1000 ${
            isVisible.highlights
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-yellow-500 animate-spin" /> Key
            Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 border-2 border-green-700 rounded-3xl shadow-xl flex items-start gap-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 hover:scale-105 hover:shadow-2xl transform transition-all duration-500 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CheckCircle className="text-green-700 mt-1 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16" id="skills" data-animate>
        <div
          className={`transition-all duration-1000 ${
            isVisible.skills
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 flex items-center justify-center gap-3">
            <Laptop className="w-8 h-8" /> Software Skills You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 border-2 border-green-700 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg text-gray-700 hover:shadow-2xl hover:border-green-500 hover:from-green-100 hover:to-emerald-100 transform hover:scale-105 hover:rotate-1 transition-all duration-300 text-center font-medium"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16" id="projects" data-animate>
        <div
          className={`transition-all duration-1000 ${
            isVisible.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8" /> Assignments & Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 border-2 border-green-700 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500">
              <p className="text-lg leading-relaxed">
                Dashboard creation with Power Query, Power Map visualizations,
                workbook connections, social media marketing data analysis, and
                hands-on case studies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16" id="jobs" data-animate>
        <div
          className={`transition-all duration-1000 ${
            isVisible.jobs
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8" /> Job Opportunities
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="p-6 border-2 border-green-700 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 text-gray-700 text-center shadow-lg hover:shadow-2xl hover:from-green-100 hover:to-emerald-100 hover:border-green-500 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 font-medium"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                {job}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16" id="certification" data-animate>
        <div
          className={`transition-all duration-1000 ${
            isVisible.certification
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 flex items-center justify-center gap-3">
            <Award className="w-8 h-8" /> Certification & Duration
          </h2>
          <div className="p-8 border-2 border-green-700 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500">
            <div className="space-y-4 text-lg">
              <p>
                <strong>Duration:</strong> 120 Hours (2–3 months option
                available)
              </p>
              <p>
                <strong>Certificate:</strong> KLiC Advanced Excel Certificate
                recognized by YCMOU
              </p>
              <p>
                <strong>Diploma Option:</strong> Combine 3 KLiC courses (360
                hours total) for a Diploma
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16" id="features" data-animate>
        <div
          className={`transition-all duration-1000 ${
            isVisible.features
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 flex items-center justify-center gap-3">
            <Star className="w-8 h-8" /> Features of KLiC Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 border-2 border-green-700 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg text-gray-700 hover:shadow-2xl hover:from-green-100 hover:to-emerald-100 hover:border-green-500 transform hover:scale-105 transition-all duration-300 font-medium"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="addons" data-animate>
        <div
          className={`transition-all duration-1000 ${
            isVisible.addons
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            📍 Recommended Add-On Courses
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {addons.map((addon, i) => (
              <div
                key={i}
                className="px-8 py-4 border-2 border-green-700 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 text-gray-700 shadow-lg hover:shadow-2xl hover:from-green-100 hover:to-emerald-100 hover:border-green-500 transform hover:scale-105 transition-all duration-300 font-medium"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {addon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceExcelInfo;
