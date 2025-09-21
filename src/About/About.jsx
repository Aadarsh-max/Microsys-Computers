import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const images = [
    {
      src: "/class1.jpg",
      title: "Interactive Learning Environment",
      description: "Modern computers with latest software",
    },
    {
      src: "/class2.jpg",
      title: "Hands-on Practice Sessions",
      description: "Students working on real projects",
    },
    {
      src: "/image3.jpg",
      title: "Expert Guidance",
      description: "Personalized attention to every student",
    },
    {
      src: "/image4.jpg",
      title: "MS-CIT Certification",
      description: "Comprehensive course curriculum",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden px-6 py-12 font-openSans">
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-2xl shadow-2xl mb-16 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          About Microsys Computers
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          <span className="font-bold text-amber-600">Microsys Computers</span>{" "}
          has been a trusted name in IT education for over{" "}
          <span className="font-semibold">two decades</span>. Established with a
          mission to empower students through knowledge and practical learning,
          Microsys has helped thousands of learners excel in{" "}
          <span className="font-bold">
            MS-CIT, programming, and digital skills
          </span>
          .
          <br />
          <br />
          With expert faculty, personalized attention, and modern teaching
          methods, we ensure that every student not only learns concepts but
          also develops the confidence to apply them in real life.
        </p>
      </motion.div>

      {/* Class Information */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-amber-50 to-amber-100 p-10 rounded-2xl shadow-lg mb-16 max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Class Information
        </h3>
        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            <span className="font-semibold">📍 Address:</span> C-103/104,
            Mangalam Apartment, Opp. Boisar Railway Station, Boisar, Maharashtra
          </p>
          <p>
            <span className="font-semibold">📞 Contact:</span> +91 9822683958
          </p>
          <p>
            <span className="font-semibold">📚 Course:</span> MS-CIT
            (Information Technology Literacy) by MKCL, introduced in 2001, is
            Maharashtra's most popular IT course — designed to provide computer
            literacy to students, professionals, and homemakers alike.
          </p>

          {/* Google Maps */}
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.9996379543777!2d72.7591403036906!3d19.79761270273852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71ef7706d0e39%3A0xb9b9de147030f544!2sMicrosys%20Computers!5e0!3m2!1sen!2sin!4v1757167758922!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Microsys Computers Location"
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* Image Gallery Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-7xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          At a Glance: Our Classes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">
                  {image.title}
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tutors Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mb-16 max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Tutors
        </h3>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Our tutors are highly experienced professionals who bring{" "}
          <span className="font-semibold text-amber-600">
            knowledge, patience,
          </span>{" "}
          and <span className="font-semibold text-amber-600">passion</span> into
          every classroom. With strong academic qualifications and years of
          teaching expertise, they ensure that students gain both{" "}
          <span className="font-semibold">
            theoretical and practical skills.
          </span>
        </p>
      </motion.div>

      {/* Tutor Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <img
            src="./mm.jpg"
            alt="Minal Churi"
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-amber-400 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Minal M. Churi
          </h2>
          <p className="text-gray-600">🎓 MCA | 📌 25+ years of experience</p>
          <p className="text-gray-600">🎂 Age: 48</p>
          <p className="text-gray-600">✉️ swati.churi777@gmail.com</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <img
            src="./pp.jpg"
            alt="Manoj Churi"
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-amber-400 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Manoj S. Churi
          </h2>
          <p className="text-gray-600">🎓 B.Com | 📌 20+ years of experience</p>
          <p className="text-gray-600">🎂 Age: 55</p>
          <p className="text-gray-600">✉️ manoj.churi22@gmail.com</p>
        </motion.div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16 max-w-6xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          What Our Students Say
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              text: "The teaching style is excellent and interactive. I gained a lot of confidence in computers. Highly recommend Microsys Computers!",
              name: "Mayuri Yashwantrao",
            },
            {
              text: "Best learning environment with supportive tutors. I suggest everyone join Microsys Computers.",
              name: "Amisha Gharat",
            },
            {
              text: "Amazing classes! Tutors explain concepts very clearly. Microsys helped me a lot in my studies.",
              name: "Vaibhavi Patil",
            },
            {
              text: "The courses are very practical and useful. I enjoyed learning here and recommend Microsys Computers to all.",
              name: "Prapti Churi",
            },
            {
              text: "Microsys Computers provides the best computer education with excellent guidance. I feel lucky to join here.",
              name: "Aadarsh Shrivastav",
            },
            {
              text: "Friendly teachers and modern teaching methods make learning very easy. I strongly recommend Microsys Computers.",
              name: "Neha Pagdhare",
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                ⭐️⭐️⭐️⭐️⭐️
              </h4>
              <p className="text-gray-600 italic mb-4">"{review.text}"</p>
              <p className="font-bold text-amber-600">– {review.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Closing Message */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-10 rounded-2xl shadow-lg max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold mb-4">A Message to Our Students</h3>
        <p className="text-lg leading-relaxed">
          "Education is not just about learning facts, but about training the
          mind to think. At Microsys Computers, we believe in nurturing
          curiosity, discipline, and creativity in every student. With hard work
          and the right guidance, you can achieve excellence in both academics
          and life."
        </p>
      </motion.div>
    </div>
  );
};

export default About;
