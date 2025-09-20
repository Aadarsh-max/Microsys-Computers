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
    subtitle: "Master Advanced Excel Skills",
    text: `The MKCL Advanced Excel course is designed to help learners master the powerful features of Microsoft Excel beyond the basics. Excel is used in every industry, from business and finance to engineering and education. This course focuses on advanced functions, data analysis, visualization, and automation techniques to work faster, smarter, and more efficiently.`,
    gradient: "from-green-800 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    icon: Clock,
    title: "Course Duration",
    subtitle: "Flexible 2–3 Months Program",
    text: `The course typically runs for 2 to 3 months, with around 40–60 hours of learning. Students get a mix of theory, practical exercises, and hands-on assignments to build real-world skills and confidence in advanced Excel.`,
    gradient: "from-green-800 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    icon: Award,
    title: "Importance of Advanced Excel",
    subtitle: "Boost Your Career & Productivity",
    text: `Advanced Excel is highly valued in corporate jobs, government offices, research, and personal productivity. Skills like advanced formulas, pivot tables, charts, and macros give learners a competitive edge and make them job-ready.`,
    gradient: "from-green-800 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    icon: TrendingUp,
    title: "Course Info & History",
    subtitle: "Practical & Job-Oriented Learning",
    text: `MKCL designed the Advanced Excel program as part of KLiC courses. It covers advanced formulas (VLOOKUP, HLOOKUP, INDEX, MATCH), data validation, pivot tables & charts, dashboards, and macros. Learners gain practical expertise to handle real-world data.`,
    gradient: "from-green-800 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    icon: Monitor,
    title: "Future Advancements",
    subtitle: "AI, Analytics & Cloud Integration",
    text: `As industries adopt AI, data science, and BI tools, Excel evolves with Power Query, Power Pivot, and advanced visualization. Future modules include cloud integration and advanced analytics for modern workplace readiness.`,
    gradient: "from-green-800 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    icon: Users,
    title: "Learning Mode & Certification",
    subtitle: "Center & Online, Recognized Certification",
    text: `Classes are available at the center and online. Students receive a Certificate of Completion from MKCL's KLiC courses, recognized by Yashwantrao Chavan Maharashtra Open University (YCMOU). Languages: English, Marathi, Hindi. Jurisdiction: Nationwide.`,
    gradient: "from-green-800 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
];

const ExcelPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-green-700 text-white">
        <div className="relative px-6 md:px-16 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            MKCL Advanced Excel
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Master Advanced Excel Techniques for Career Growth & Productivity
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
      <div className="px-6 md:px-16 py-16 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-64 bg-green-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-inner">
            <img
              src="./excel.jpg"
              alt="Advanced Excel"
              className="h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelPage;
