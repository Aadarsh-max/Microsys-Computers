import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    name: "MSCIT",
    duration: "2 months",
    path: "/mscIT",
    image: "/mscit.jpg.webp",
    theme: {
      from: "from-amber-50",
      to: "to-amber-100",
      border: "border-amber-200",
      text: "text-amber-600",
      hoverText: "hover:text-amber-700",
      bgHover: "hover:from-amber-100 hover:to-amber-200",
      overlay: "from-amber-900/20",
      corner: "from-amber-300/30",
    },
  },
  {
    id: 2,
    name: "Tally",
    duration: "3 months",
    path: "/tally",
    image: "/tallyprime.jpg",
    theme: {
      from: "from-yellow-50",
      to: "to-yellow-100",
      border: "border-yellow-200",
      text: "text-yellow-600",
      hoverText: "hover:text-yellow-700",
      bgHover: "hover:from-yellow-100 hover:to-yellow-200",
      overlay: "from-yellow-900/20",
      corner: "from-yellow-300/30",
    },
  },

  {
    id: 3,
    name: "Advanced Excel",
    duration: "2–3 months",
    path: "/excel",
    image: "/excel.jpg",
    theme: {
      from: "from-green-100",
      to: "to-green-200",
      border: "border-green-400",
      text: "text-green-700",
      hoverText: "hover:text-green-800",
      bgHover: "hover:from-green-200 hover:to-green-300",
      overlay: "from-green-900/30",
      corner: "from-green-400/40",
    },
  },
  {
    id: 4,
    name: "C++",
    duration: "3 months",
    path: "/cpp",
    image: "/c.jpg",
    theme: {
      from: "from-blue-50",
      to: "to-blue-100",
      border: "border-blue-200",
      text: "text-blue-600",
      hoverText: "hover:text-blue-700",
      bgHover: "hover:from-blue-100 hover:to-blue-200",
      overlay: "from-blue-900/20",
      corner: "from-blue-300/30",
    },
  },
];

const Courses = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-24">
      <h2 className="text-5xl font-bold text-amber-600 mb-16 text-center relative">
        <span className="inline-block animate-pulse">Our Courses</span>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <Link key={course.id} to={course.path} className="group block">
            <div
              className={`flex flex-col md:flex-row bg-gradient-to-br ${course.theme.from} ${course.theme.to} border-2 ${course.theme.border} rounded-3xl p-8 transition-all duration-700 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${course.theme.bgHover}`}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-${course.theme.border}/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out`}
              ></div>

              {/* Image */}
              <div className="md:w-2/5 mb-6 md:mb-0 relative overflow-hidden rounded-2xl">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 md:h-56 object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${course.theme.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Text */}
              <div className="md:w-3/5 md:pl-8 flex flex-col justify-center relative z-10">
                <h3
                  className={`text-3xl font-bold ${course.theme.text} mb-3 group-hover:${course.theme.hoverText} transition-colors duration-500 transform group-hover:translate-x-2`}
                >
                  {course.name}
                </h3>
                <p
                  className={`text-xl ${course.theme.text} mb-4 font-medium group-hover:${course.theme.hoverText} transition-colors duration-500`}
                >
                  {course.duration}
                </p>
                <p
                  className={`${course.theme.text} text-base leading-relaxed transform group-hover:translate-x-2 transition-transform duration-500 delay-100`}
                >
                  Click to know more about {course.name} course.
                </p>

                <div
                  className={`mt-4 flex items-center ${course.theme.text} group-hover:${course.theme.hoverText} transition-colors duration-500`}
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${course.theme.corner} to-transparent rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`}
              ></div>
            </div>
          </Link>
        ))}
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
      `}</style>
    </div>
  );
};

export default Courses;
