import React from "react";

const MKCL_URL = "https://www.mkcl.org/#/courses/";
const KLIC_URL = "https://klic.mkcl.org/";

const courses = [
  {
    title: "MS-CIT",
    subtitle: "Digital Literacy & IT skills",
    desc: `A flagship MKCL course that builds foundational digital skills — from using Windows, Office (Word, Excel, PowerPoint), email and internet — to basic cyber safety. Ideal for school students, beginners and job-seekers.`,
    bullets: [
      "Hands-on, practice-focused",
      "Certificate recognised by Maharashtra Govt",
      "Perfect for beginners",
    ],
  },
  {
    title: "Advanced Excel",
    subtitle: "Data management & analysis",
    desc: `Take Excel beyond the basics — formulas, pivot tables, power query concepts and reporting techniques that are widely used in offices and analytics roles.`,
    bullets: [
      "Automate with formulas",
      "Pivot tables & charts",
      "Job-ready spreadsheets",
    ],
  },
  {
    title: "C++ Programming",
    subtitle: "Problem solving & coding",
    desc: `Introduction to programming with C++: syntax, OOP concepts, data structures and small projects that strengthen logical thinking. Great for school/college students.`,
    bullets: [
      "Beginner → intermediate",
      "Project-based learning",
      "Competitive programming prep",
    ],
  },
  {
    title: "Tally & Accounting",
    subtitle: "Practical accounting software",
    desc: `Learn basic accounting workflows using Tally-style approaches: vouchers, GST basics, inventory and reports used by small businesses and accountants.`,
    bullets: [
      "Day-to-day accounting",
      "GST-aware entries",
      "Business-ready skills",
    ],
  },
];

const Card = ({ course }) => (
  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
    <h3 className="text-xl font-semibold text-amber-600">{course.title}</h3>
    <p className="text-sm text-green-700 font-medium mt-1">{course.subtitle}</p>
    <p className="text-gray-600 mt-3 text-sm leading-relaxed">{course.desc}</p>
    <ul className="mt-4 space-y-1 text-gray-700 text-sm">
      {course.bullets.map((b, i) => (
        <li key={i} className="inline-flex items-center">
          <span className="w-2 h-2 mr-2 rounded-full bg-amber-400 inline-block" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const Knowmoreinfo = () => {
  return (
    <section className="bg-white px-6 md:px-24 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600">
              Explore MKCL & KLiC Courses
            </h2>
            <p className="mt-3 text-gray-700 max-w-xl">
              Build practical skills employers value. Choose short,
              certification-ready programs from MKCL that are designed for
              students, working professionals and small businesses. Scroll to
              see a few popular courses — tap the buttons to visit the official
              course pages.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => window.open(MKCL_URL, "_blank")}
                className="cursor-pointer px-6 py-3 rounded-2xl bg-amber-600 text-white font-semibold shadow hover:shadow-lg transform hover:scale-[1.02] transition-all"
              >
                Visit MKCL
              </button>

              <button
                onClick={() => window.open(KLIC_URL, "_blank")}
                className="cursor-pointer px-6 py-3 rounded-2xl border-2 border-green-700 text-green-700 font-semibold hover:bg-green-50 transition-all"
              >
                Explore KLiC Courses
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl p-4">
            <div className="p-4 bg-white rounded-xl shadow-inner">
              <h4 className="text-lg font-semibold text-green-800">
                Why learners choose MKCL
              </h4>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li>Structured, government-recognised certifications.</li>
                <li>Hands-on practical labs and project work.</li>
                <li>Courses for students, professionals & entrepreneurs.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <Card key={c.title} course={c} />
          ))}
        </div>

        <div className="mt-12 bg-white border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Ready to start?
              </h3>
              <p className="text-gray-600 mt-1">
                Visit MKCL for official course schedules, fees and enrolment
                details. For a focused catalogue of skill-building programs
                search the KLiC offerings.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.open(MKCL_URL, "_blank")}
                className="cursor-pointer px-5 py-3 rounded-lg bg-amber-600 text-white font-semibold shadow hover:shadow-md"
              >
                Official MKCL
              </button>

              <button
                onClick={() => window.open(KLIC_URL, "_blank")}
                className="cursor-pointer px-5 py-3 rounded-lg border-2 border-green-700 text-green-700 font-semibold hover:bg-green-50"
              >
                KLiC Catalogue
              </button>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Tip: keep background white, use amber (#D97706 / tailwind
            `amber-600`) and deep green (#14532D / `green-800`) accents for a
            professional, high-contrast look on desktop and mobile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Knowmoreinfo;
