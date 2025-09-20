import React, { useState, useEffect } from "react";

const TallyInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [floatingNumbers, setFloatingNumbers] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate floating accounting symbols
    const symbols = ["₹", "%", "=", "+", "-", "×", "÷"];
    const newFloatingNumbers = [];
    for (let i = 0; i < 8; i++) {
      newFloatingNumbers.push({
        id: i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100,
        delay: Math.random() * 4,
      });
    }
    setFloatingNumbers(newFloatingNumbers);
  }, []);

  const mainSkills = [
    {
      id: "accounting",
      title: "🌟 Accounting Skills",
      items: [
        "Learn the basics of financial accounting",
        "Record day-to-day transactions",
        "Understand double-entry bookkeeping",
      ],
    },
    {
      id: "gst",
      title: "🌟 GST & Taxation",
      items: [
        "Master GST concepts and entries in Tally",
        "Learn TDS, TCS, and Payroll accounting",
        "File GST returns with accuracy",
      ],
    },
    {
      id: "inventory",
      title: "🌟 Inventory Management",
      items: [
        "Maintain stock records",
        "Track purchase & sales orders",
        "Manage multiple warehouses",
      ],
    },
    {
      id: "reporting",
      title: "🌟 Business Reporting",
      items: [
        "Generate financial statements, balance sheets, and P&L reports",
        "Analyze business performance with MIS reports",
      ],
    },
    {
      id: "digital",
      title: "🌟 Digital Tools Integration",
      items: [
        "Use Excel & Tally together",
        "Import/export accounting data",
        "Automate repetitive tasks",
      ],
    },
    {
      id: "career",
      title: "🌟 Career Growth",
      items: [
        "Industry-relevant, government-recognized certification",
        "Skills for jobs like Accountant, GST Operator, Data Entry",
        "Opportunities as Billing Executive & Back Office Staff",
      ],
    },
  ];

  const courseFeatures = [
    "Duration: 120 hours",
    "Languages: Marathi / Semi-English / English",
    "Hands-on practice with latest TallyPrime software",
    "Covers GST, TDS, Payroll, and Business Reports",
    "Available at 4500+ authorized learning centers",
  ];

  const careerOpportunities = [
    "Accountant",
    "GST Practitioner / GST Operator",
    "Data Entry Operator",
    "Billing Executive",
    "Back Office Staff",
    "Accounts Assistant",
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen p-8 overflow-hidden relative">
      {/* Floating Numbers Background */}
      {floatingNumbers.map((num) => (
        <div
          key={num.id}
          className="absolute text-yellow-300 text-4xl font-bold opacity-30 animate-bounce select-none"
          style={{
            left: `${num.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${num.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {num.symbol}
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Title */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl font-bold text-yellow-700 mb-4 animate-pulse">
            Tally with GST for Students & Professionals
          </h1>
          <h2 className="text-xl font-semibold text-yellow-600 mb-6 animate-bounce">
            About Tally with GST
          </h2>
        </div>

        {/* Animated Description */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <p className="text-gray-700 mb-8 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-300 bg-white p-4 rounded-lg shadow-sm hover:shadow-md">
            KLiC Tally is a comprehensive course that equips learners with
            practical accounting skills using Tally ERP.9 / TallyPrime. It
            covers financial accounting, GST, inventory management, and business
            reports, making learners job-ready in the field of accounting and
            finance.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {mainSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={`bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:bg-yellow-50 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                animationDelay: `${500 + index * 150}ms`,
                animation: isVisible
                  ? "slideInUp 0.8s ease-out forwards"
                  : "none",
              }}
              onMouseEnter={() => setHoveredCard(skill.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3
                className={`text-lg font-semibold text-yellow-700 mb-4 transition-all duration-300 ${
                  hoveredCard === skill.id
                    ? "text-2xl text-yellow-800 animate-pulse"
                    : ""
                }`}
              >
                {skill.title}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start text-gray-700 transition-all duration-300 hover:text-yellow-600 hover:translate-x-3 ${
                      hoveredCard === skill.id ? "animate-pulse" : ""
                    }`}
                    style={{
                      animationDelay:
                        hoveredCard === skill.id
                          ? `${itemIndex * 100}ms`
                          : "0ms",
                    }}
                  >
                    <span className="text-yellow-500 mr-2 mt-1 transition-transform duration-300 hover:rotate-12 hover:scale-125">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Course Features */}
        <div
          className={`bg-gradient-to-r from-yellow-100 to-yellow-200 p-8 rounded-2xl shadow-lg mb-8 transform transition-all duration-1000 hover:scale-102 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <h3 className="text-2xl font-semibold text-yellow-700 mb-6 animate-bounce">
            📚 Course Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {courseFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:translate-x-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md"
              >
                <span className="text-yellow-500 mr-3 text-xl animate-spin">
                  ⚙️
                </span>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div
          className={`bg-gradient-to-r from-yellow-100 to-yellow-200 p-8 rounded-2xl shadow-lg mb-8 transform transition-all duration-1000 hover:scale-102 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "1.4s" }}
        >
          <h3 className="text-2xl font-semibold text-yellow-700 mb-6 animate-bounce">
            🏆 Career Opportunities
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {careerOpportunities.map((career, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-50 text-center"
              >
                <div
                  className="text-2xl mb-2 animate-bounce"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  💼
                </div>
                <span className="font-semibold text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                  {career}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Footer */}
        <div
          className={`p-8 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl text-center transform transition-all duration-1000 hover:scale-105 relative overflow-hidden ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "1.6s" }}
        >
          <h3 className="text-3xl font-bold text-yellow-800 mb-4 animate-bounce">
            🚀 Build Your Accounting Career with KLiC Tally
          </h3>
          <p className="text-gray-800 text-lg mb-6 hover:text-yellow-900 transition-colors duration-300">
            Powered by Tally ERP.9 / TallyPrime • GST-ready features • Excel
            Integration • AI & Automation Tools
          </p>
          <div className="space-x-6">
            <a
              href="https://mkcl.org"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transform hover:scale-110 transition-all duration-300 hover:shadow-xl animate-pulse mr-4"
            >
              👉 Official Website
            </a>
            <a
              href="https://klic.mkcl.org"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transform hover:scale-110 transition-all duration-300 hover:shadow-xl animate-pulse"
            >
              👉 KLiC Courses
            </a>
          </div>

          {/* Floating Calculator Icons */}
          <div className="absolute -top-4 -right-4 text-yellow-400 opacity-30 animate-spin text-6xl select-none">
            🧮
          </div>
          <div
            className="absolute -bottom-4 -left-4 text-yellow-400 opacity-30 animate-spin text-6xl select-none"
            style={{ animationDirection: "reverse" }}
          >
            📊
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default TallyInfo;
