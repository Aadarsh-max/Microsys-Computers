import React, { useState } from "react";
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Monitor,
  Users,
} from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Introduction",
    subtitle: "Master C++ Programming",
    text: `KLiC C++ Programming by MKCL introduces learners to coding, covering both basic and advanced concepts. Focused on problem-solving and logical thinking, this course prepares students for careers in software, engineering, and IT.`,
    gradient: "from-blue-700 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Clock,
    title: "Course Duration",
    subtitle: "2–3 Months Program",
    text: `Completed in 2–3 months with around 120 hours, including e-learning modules, classroom practice, and assignments. Students learn both theory and practical application of programming concepts effectively.`,
    gradient: "from-blue-700 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Award,
    title: "Importance of C++",
    subtitle: "Build Strong Logic & Problem Solving",
    text: `C++ is foundational for many modern technologies. Learning C++ improves logical thinking, coding skills, and prepares students for academic projects, competitive exams, and software development. Widely used in game development, system programming, embedded systems, and high-performance applications.`,
    gradient: "from-blue-700 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: TrendingUp,
    title: "Course Info & Topics",
    subtitle: "Practical & Industry-Relevant Learning",
    text: `Topics include basics (variables, loops, functions), arrays, strings, pointers, Object-Oriented Programming (classes, inheritance, polymorphism, encapsulation), file handling, practical problem-solving, and mini-projects. C++ remains a cornerstone language since the 1980s.`,
    gradient: "from-blue-700 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Monitor,
    title: "Future Advancements",
    subtitle: "Stay Industry-Ready",
    text: `Future updates may include modern software tool integration, competitive programming, and application development. C++ is widely used in AI, robotics, game engines, and system software, keeping learners ready for evolving tech landscapes.`,
    gradient: "from-blue-700 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Users,
    title: "Learning & Expert Guidance",
    subtitle: "Hands-On Training & Mastery",
    text: `Learn from MKCL-certified trainers in small batches. With interactive coding sessions, modern labs, hands-on practice, assignments, and mini-projects, students gain confidence and expertise. By course end, learners are ready to apply C++ skills in academics, projects, and industry tasks.`,
    gradient: "from-blue-700 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
  },
];

const Cpppage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-blue-700 text-white">
        <div className="relative px-6 md:px-16 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            KLiC C++ Programming
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Build Logic, Problem-Solving & Software Development Skills
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-16 py-16 relative">
        <div className="max-w-6xl mx-auto grid gap-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`relative w-28 h-28 bg-gradient-to-br ${section.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:rotate-6 hover:scale-110`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                    <div className="absolute inset-0 bg-white opacity-10 rounded-3xl transform -rotate-6 scale-95"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`bg-gradient-to-br ${
                      section.bgGradient
                    } rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                      hoveredCard === index ? "scale-105 -translate-y-2" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-2 h-8 bg-gradient-to-b ${section.gradient} rounded-full`}
                        ></div>
                        <div>
                          <h2
                            className={`text-3xl font-bold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                          >
                            {section.title}
                          </h2>
                          <p className="text-gray-600 font-medium">
                            {section.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-lg">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="px-6 md:px-16 py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-64 bg-blue-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-inner">
            <img
              src="./cpp.jpg"
              alt="C++ Programming"
              className="h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cpppage;
