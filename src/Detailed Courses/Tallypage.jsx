import React, { useState } from "react";
import { BookOpen, Clock, Award, TrendingUp, Monitor, Users } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Introduction",
    subtitle: "Master Tally Prime with GST",
    text: `KLiC Tally Prime with GST is a job-oriented course by MKCL providing complete knowledge of accounting, taxation, and GST compliance using Tally Prime. Perfect for students, professionals, and entrepreneurs, this course equips learners with practical skills to manage accounts efficiently.`,
    gradient: "from-yellow-500 to-yellow-400",
    bgGradient: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Clock,
    title: "Course Duration",
    subtitle: "Flexible 2–3 Months Program",
    text: `Typically completed in 2–3 months, this course combines theory, hands-on practice, and assignments to help learners gain real-world accounting and GST expertise.`,
    gradient: "from-yellow-500 to-yellow-400",
    bgGradient: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Award,
    title: "Importance of Tally Prime",
    subtitle: "Boost Your Career & Business",
    text: `Tally Prime with GST is widely used by businesses of all sizes for accounting and compliance. Mastering Tally ensures employment readiness in accounts, finance, and administration while keeping learners up-to-date with GST rules and practical applications.`,
    gradient: "from-yellow-500 to-yellow-400",
    bgGradient: "from-yellow-50 to-yellow-100"
  },
  {
    icon: TrendingUp,
    title: "Course Info & Topics",
    subtitle: "Practical & Job-Oriented Learning",
    text: `Topics include Accounting Basics, Company Creation, Ledger Management, Vouchers, Invoices, GST Concepts & Reports, Inventory Management, Bank Reconciliation, MIS Reports, and Payroll (optional). Learners gain practical expertise with Tally software.`,
    gradient: "from-yellow-500 to-yellow-400",
    bgGradient: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Monitor,
    title: "Future Advancements",
    subtitle: "Cloud Accounting & Automation",
    text: `As digital accounting evolves, the course integrates cloud accounting, e-invoicing, automation, and updates aligned with the latest Tally Prime and GST regulations, keeping learners industry-ready.`,
    gradient: "from-yellow-500 to-yellow-400",
    bgGradient: "from-yellow-50 to-yellow-100"
  },
  {
    icon: Users,
    title: "Learning & Expert Guidance",
    subtitle: "Hands-On Training & Certification",
    text: `Learn from MKCL-certified trainers in modern labs with interactive e-learning, assignments, mini-projects, and practical sessions. By the end of the course, learners can manage accounts, file GST, generate reports, and handle business operations confidently using Tally Prime.`,
    gradient: "from-yellow-500 to-yellow-400",
    bgGradient: "from-yellow-50 to-yellow-100"
  },
];

const Tallypage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600 to-yellow-500 text-white">
        <div className="relative px-6 md:px-16 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            KLiC Tally Prime with GST
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Gain Complete Accounting & GST Expertise for Careers and Business
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
                    className={`bg-gradient-to-br ${section.bgGradient} rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
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
                          <p className="text-gray-700 font-medium">
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
      <div className="px-6 md:px-16 py-16 bg-gradient-to-r from-yellow-100 to-yellow-200">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-64 bg-white border-4 border-yellow-400 rounded-3xl flex items-center justify-center overflow-hidden shadow-inner">
            <img
              src="./ttt.jpg"
              alt="Tally Prime"
              className="h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tallypage;
