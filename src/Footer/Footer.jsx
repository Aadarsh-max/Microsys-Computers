import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50 text-gray-700 py-12 px-6 border-t border-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-4 left-8 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-16 w-1 h-1 bg-amber-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 left-1/4 w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-16 right-8 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Main brand section */}
        <div className="transform hover:scale-105 transition-all duration-300 ease-out">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <span className="text-xl">🚀</span>
            </div>
            <div className="text-left">
              <p className="text-lg font-bold bg-gradient-to-r from-gray-800 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                Built by{" "}
                <span className="text-2xl font-black bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent drop-shadow-sm">
                  SkillCoders
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Description section */}
        <div className="space-y-3">
          <p className="text-base text-gray-600 font-medium leading-relaxed max-w-md mx-auto">
            Learn. Build. Innovate.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-2 py-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>

        {/* YouTube section */}
        <div className="group">
          <div className="inline-flex items-center justify-center space-x-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <span className="text-sm font-bold text-white">📺</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Watch on YouTube
              </p>
              <a
                href="http://www.youtube.com/@SkillCoder-By_Aadarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold bg-gradient-to-r from-amber-600 via-red-500 to-red-600 bg-clip-text text-transparent hover:from-amber-700 hover:via-red-600 hover:to-red-700 transition-all duration-300 relative"
              >
                SkillCoders by Aadarsh
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 group-hover:w-full transition-all duration-500"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="pt-4">
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-amber-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
    </footer>
  );
};

export default Footer;
