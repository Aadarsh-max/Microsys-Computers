import React, { useState } from "react";
import { Monitor, Clock, Award, TrendingUp, BookOpen, Users } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Introduction",
    subtitle: "Your Gateway to Digital Excellence",
    text: `Transform your future with MS-CIT (Maharashtra State Certificate in Information Technology) - a comprehensive program designed to master essential computer skills and digital literacy. Perfect for students, professionals, and beginners ready to embrace the digital world. Master MS Word, Excel, PowerPoint, Internet navigation, Email communication, and secure online transactions with confidence.`,
    gradient: "from-amber-600 to-amber-400",
    bgGradient: "from-amber-50 to-amber-100"
  },
  {
    icon: Clock,
    title: "Course Duration",
    subtitle: "Flexible Learning at Your Pace",
    text: `Choose your learning journey: 2, 3, 4, or 6 months with 144 comprehensive learning hours. Enjoy maximum flexibility with classroom sessions, online modules, or blended learning approaches. Our adaptive curriculum ensures you master both theoretical concepts and practical applications efficiently, fitting seamlessly into your schedule.`,
    gradient: "from-amber-600 to-amber-400",
    bgGradient: "from-amber-50 to-amber-100"
  },
  {
    icon: Award,
    title: "Career Impact",
    subtitle: "Open Doors to New Opportunities",
    text: `MS-CIT certification is your competitive advantage in Maharashtra's job market, essential for government positions and highly valued in private sector roles. Gain confidence in digital tools, enhance workplace productivity, and stay ahead in today's technology-driven world. This certification validates your digital competency and professional readiness.`,
    gradient: "from-amber-600 to-amber-400",
    bgGradient: "from-amber-50 to-amber-100"
  },
  {
    icon: TrendingUp,
    title: "Legacy & Impact",
    subtitle: "20+ Years of Digital Empowerment",
    text: `Since 2001, MKCL's MS-CIT has revolutionized digital education in Maharashtra, empowering millions with essential technology skills. From computer fundamentals to advanced MS Office applications, internet mastery, email communication, and secure online transactions - we've built a foundation that transforms lives and careers across the state.`,
    gradient: "from-amber-600 to-amber-400",
    bgGradient: "from-amber-50 to-amber-100"
  },
  {
    icon: Monitor,
    title: "Learning Experience",
    subtitle: "Interactive & Practical Approach",
    text: `Immerse yourself in cutting-edge e-learning modules, hands-on laboratory sessions, and step-by-step practice exercises. Our methodology includes comprehensive mock tests, real-world case studies, daily practice sessions, interactive flashcards, video tutorials, and dedicated doubt-clearing sessions to ensure complete mastery.`,
    gradient: "from-amber-600 to-amber-400",
    bgGradient: "from-amber-50 to-amber-100"
  },
  {
    icon: Users,
    title: "Why Choose Us",
    subtitle: "Excellence in Every Detail",
    text: `Learn from MKCL-certified expert instructors in intimate small-batch settings for personalized attention. Access state-of-the-art computer labs, receive regular assessments, participate in practical workshops, and benefit from comprehensive career guidance. Our proven methodology ensures every student achieves proficiency and confidence in applying MS-CIT skills professionally.`,
    gradient: "from-amber-600 to-amber-400",
    bgGradient: "from-amber-50 to-amber-100"
  },
];

const Mscitpage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white">
    
      <div className="relative overflow-hidden bg-amber-600 text-white">
        <div className="relative px-6 md:px-16 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            MS-CIT Mastery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Unlock Your Digital Potential with Maharashtra's Premier IT Certification Program
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
      <div className="px-6 md:px-16 py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-64 bg-amber-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-inner">
            <img
              src="./mss.webp"
              alt="MS-CIT Excellence"
              className="h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mscitpage;
