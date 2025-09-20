import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const MscitInfo = () => {
  const benefits = [
    "Gain common computer skills",
    "Create, edit, and enhance basic documents & presentations",
    "Master essential Microsoft Office tools (Word, Excel, PowerPoint)",
    "Learn multimedia editing: images, videos, audio",
    "Improve research, presentation & project-making skills",
    "Navigate the internet, email & social media safely",
    "Introduction to coding & logic building",
    "Teamwork & digital collaboration using Google tools",
    "Prepare for future-ready & digital India skills",
    "Government-recognized IT certification for jobs",
  ];

  const courseFeatures = [
    "Flexible batches for school students",
    "Course duration: 120 hours",
    "Language: Marathi / Semi-English / English",
    "Available at 4500+ authorized learning centers",
  ];

  const careerApp = [
    "Free demo courses & practice tests",
    "Learning & academic dashboard",
    "Career guidance & expert videos",
    "Career chart & study apps",
  ];

  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-20 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-8 text-center">
        MS-CIT for School Students
      </h1>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          About MS-CIT
        </h2>
        <p>
          The MS-CIT (Maharashtra State Certificate in Information Technology)
          course is a comprehensive program designed to teach Digital & Academic
          Digital Skills. It empowers school students with various digital tools
          and technologies, providing hands-on experience.
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-amber-500 mb-6 text-center">
          🌟 Benefits of Doing MS-CIT
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 bg-white p-4 rounded-xl shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md"
            >
              <CheckCircle className="text-amber-600 mt-1" size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-amber-500 mb-6 text-center">
          🤖 Use of AI-based Apps for School Students
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            [
              "Academics:",
              "Duolingo, Grammarly, Khan Academy, Scratch, Tynker",
            ],
            ["Productivity:", "Canva, Piktochart, Microsoft Office Online"],
            ["Health & Lifestyle:", "MyFitnessPal, Calm, Google Home"],
            [
              "Entertainment & Info:",
              "Spotify, YouTube, Wikipedia, Google Arts & Culture",
            ],
          ].map(([title, content], i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md"
            >
              <strong>{title}</strong> {content}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-amber-500 mb-6 text-center">
          📚 MS-CIT Course Features
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {courseFeatures.map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm text-center transform transition duration-300 hover:scale-105 hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          🎯 Practice Tests for School Students
        </h2>
        <p>
          Includes TOP Test, MTSE, NTSE, Scholarship Tests, Navodaya Vidyalaya
          Test, 10th Std. State Board & CBSE practice papers, available in
          multiple mediums with study guidelines and model papers.
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          🏆 MKCL Olympiad Movement (MOM)
        </h2>
        <p>
          A competitive exam offering district & state-level rankings, prizes,
          and educational exploration kits. Registration Fee: ₹100.
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          🧭 Career Inclination Test
        </h2>
        <p>
          An online test designed by psychologists for 8th to 10th standard
          students to identify abilities and career inclinations with instant
          recommendations.
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-amber-500 mb-6 text-center">
          📱 MKCL Career App
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {careerApp.map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm text-center transform transition duration-300 hover:scale-105 hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          🚀 Unlock Your Digital Curiosity with MS-CIT
        </h2>
        <p className="mb-6">
          MS-CIT is now powered by modern technologies like{" "}
          <span className="font-semibold text-amber-600">
            ChatGPT, Generative AI, Virtual Reality, Robotics, Microsoft Office
            365, and Basics of Coding.
          </span>
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://www.mkcl.org/mscit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-amber-700 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            👉 Official MS-CIT Website
          </a>
          <a
            href="https://www.mkcl.org/klic"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-amber-600 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            👉 KLiC Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default MscitInfo;
