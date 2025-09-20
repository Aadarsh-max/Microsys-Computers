import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Award, ArrowRight, Sparkles } from "lucide-react";

const Enquiry = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    { icon: GraduationCap, title: "Expert Faculty", desc: "Learn from industry professionals" },
    { icon: Users, title: "Community", desc: "Join thousands of successful students" },
    { icon: BookOpen, title: "Resources", desc: "Access comprehensive study materials" },
    { icon: Award, title: "Certification", desc: "Earn recognized qualifications" },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Mouse follower effect */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full pointer-events-none z-50 opacity-70 blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: "all 0.1s ease-out",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Header Section */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-100 rounded-full border border-amber-200">
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            <span className="text-amber-700 text-sm font-medium">Start Your Journey</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-gray-900 via-amber-700 to-amber-500 bg-clip-text text-transparent leading-tight">
            Student
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Enquiry
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Take the first step towards your educational excellence. Join thousands of students who have transformed their careers with us.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-4xl transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-4 bg-white rounded-2xl border border-gray-200 hover:border-amber-400 transition-all duration-500 hover:scale-105 hover:bg-amber-50 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-8 h-8 text-amber-500 mb-3 group-hover:text-amber-600 transition-colors duration-300 group-hover:scale-110 transform" />
              <h3 className="text-gray-900 font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div
          className={`w-full max-w-4xl transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:border-amber-400 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Enquiry Form</h2>
              <ArrowRight className="w-6 h-6 text-amber-500 animate-bounce" />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://forms.gle/yFs6b4AB5Kkp23Sc6"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Student Enquiry Form"
                className="relative z-10 w-full rounded-2xl bg-white"
                style={{ minHeight: "800px" }}
              >
                <div className="flex items-center justify-center h-full bg-white rounded-2xl">
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading enquiry form...</p>
                  </div>
                </div>
              </iframe>
            </div>
          </div>
        </div>


        <div
          className={`mt-12 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          
            <Link to='/contact'>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer group">
            <span>Need Help?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
            </Link>
          <p className="text-gray-500 text-sm mt-4">
            Our admissions team is here to guide you every step of the way
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Enquiry;
