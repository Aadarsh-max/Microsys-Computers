import React, { useState, useEffect } from "react";

const CppInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardData = [
    {
      id: 'benefits',
      title: '🌟 Benefits of Learning C++',
      items: [
        'Learn programming basics: variables, loops, functions, arrays, pointers',
        'Master Object-Oriented Programming (OOP) with classes & objects',
        'Develop mini-projects and solve real-world coding problems',
        'Boost academic performance and technical interview readiness',
        'Strong base for advanced programming in Java, Python, and AI fields'
      ]
    },
    {
      id: 'tools',
      title: '🤖 Tools & Platforms',
      items: [
        'IDEs: Code::Blocks, Visual Studio Code',
        'Debugging Tools: GDB, Online Compilers',
        'Practice Platforms: HackerRank, LeetCode, Codeforces',
        'AI Support: ChatGPT for code help, GitHub Copilot',
        'Flowchart Makers: Lucidchart, Draw.io'
      ]
    },
    {
      id: 'features',
      title: '📚 Course Features',
      items: [
        'Duration: 40–60 hours (approx. 2–3 months)',
        'Languages: English / Semi-English',
        'Hands-on coding practice with projects',
        'Authorized MKCL learning centers',
        'Certificate recognized by YCMOU'
      ]
    },
    {
      id: 'practice',
      title: '🎯 Practice Opportunities',
      items: [
        'Coding challenges & assignments',
        'Mini-projects with real-world applications',
        'Mock tests for logic building',
        'Introduction to competitive programming'
      ]
    },
    {
      id: 'career',
      title: '🏆 Career Opportunities',
      items: [
        'Software Developer / Programmer',
        'Game Developer',
        'System Software Engineer',
        'AI / Robotics Enthusiast',
        'Competitive Programmer'
      ]
    },
    {
      id: 'support',
      title: '🧭 Career Support',
      items: [
        'Career guidance for IT & software fields',
        'Pathways to app development, AI, and data science',
        'Online recommendations based on coding performance'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Animated Title */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl font-bold text-blue-700 mb-4 animate-pulse">
            KLiC C++ Programming for Students
          </h1>
          <h2 className="text-xl font-semibold text-blue-600 mb-6 animate-bounce">
            About KLiC C++
          </h2>
        </div>

        {/* Animated Description */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-300">
            The KLiC C++ Programming course by MKCL is designed to introduce learners 
            to the world of coding through one of the most powerful and widely used 
            programming languages. It focuses on problem-solving, logic-building, and 
            object-oriented programming (OOP) concepts, giving students a strong 
            foundation for academic projects, competitive exams, and professional 
            careers in IT and software development.
          </p>
        </div>

        {/* Animated Grid Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                animationDelay: `${500 + index * 200}ms`,
                animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className={`text-lg font-semibold text-blue-700 mb-4 transition-all duration-300 ${
                hoveredCard === card.id ? 'text-2xl text-blue-800' : ''
              }`}>
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start text-gray-700 transition-all duration-300 hover:text-blue-600 hover:translate-x-2 ${
                      hoveredCard === card.id ? 'animate-pulse' : ''
                    }`}
                    style={{
                      animationDelay: hoveredCard === card.id ? `${itemIndex * 100}ms` : '0ms'
                    }}
                  >
                    <span className="text-blue-500 mr-2 mt-1 transition-transform duration-300 hover:rotate-12">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Animated Footer */}
        <div className={`mt-12 p-8 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-2xl text-center transform transition-all duration-1000 hover:scale-105 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ animationDelay: '1.5s' }}>
          <h3 className="text-3xl font-bold text-blue-700 mb-4 animate-bounce">
            🚀 Unlock Your Coding Journey with KLiC C++
          </h3>
          <p className="text-gray-700 text-lg mb-6 hover:text-gray-900 transition-colors duration-300">
            Powered by Problem-Solving • Object-Oriented Programming • 
            Debugging • Hands-On Projects • AI-Assisted Coding  
          </p>
          <div className="mt-6">
            <a
              href="https://klic.mkcl.org"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 hover:shadow-xl animate-pulse"
            >
              👉 Visit Official Website
            </a>
          </div>
          
          {/* Floating Code Elements */}
          <div className="absolute -top-4 -right-4 text-blue-300 opacity-20 animate-spin text-6xl select-none">
            {'{'}
          </div>
          <div className="absolute -bottom-4 -left-4 text-blue-300 opacity-20 animate-spin text-6xl select-none" style={{ animationDirection: 'reverse' }}>
            {'}'}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default CppInfo;