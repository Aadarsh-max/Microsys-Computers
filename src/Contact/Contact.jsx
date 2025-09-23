import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden font-oswald">
      <div className="max-w-2xl w-full relative z-10 transform hover:scale-[1.02] transition-transform duration-500 ease-out">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-amber-200/50 hover:shadow-amber-500/20 transition-all duration-700 hover:border-amber-300/70">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent animate-fade-in-down">
              Get in Touch
            </h1>
            <p className="mt-3 text-gray-600 text-lg max-w-lg mx-auto">
              Have questions or need assistance? We're here to help you with
              courses, training, and IT solutions. Reach out to us via phone,
              email, or visit our center.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-4 rounded-full animate-scale-in"></div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 text-gray-700 mb-10">
            <div className="group p-4 rounded-xl hover:bg-amber-50/70 transition-all duration-300 border-l-4 border-transparent hover:border-amber-400">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full mr-4 group-hover:bg-amber-200 transition-colors duration-300">
                  <Building2 className="w-4 h-4 text-amber-600" />
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-amber-600 w-20 inline-block">
                    Institute:
                  </span>
                  <span className="group-hover:text-amber-700 transition-colors duration-300">
                    Microsys Computers
                  </span>
                </div>
              </div>
            </div>

            <div className="group p-4 rounded-xl hover:bg-green-50/70 transition-all duration-300 border-l-4 border-transparent hover:border-green-400">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mr-4 group-hover:bg-green-200 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-green-600 w-20 inline-block">
                    Phone:
                  </span>
                  <a
                    href="tel:9822783958"
                    className="hover:text-green-600 hover:underline transform hover:scale-105 transition-all duration-300 text-green-700"
                  >
                    98226 83958
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-4 rounded-xl hover:bg-blue-50/70 transition-all duration-300 border-l-4 border-transparent hover:border-blue-400">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full mr-4 mt-1 group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-blue-600 w-20 inline-block">
                    Email:
                  </span>
                  <a
                    href="mailto:microsyscomputers.103@gmail.com"
                    className="hover:text-blue-600 hover:underline transform hover:scale-105 transition-all duration-300 break-all text-blue-700"
                  >
                    microsyscomputers.103@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-4 rounded-xl hover:bg-red-50/70 transition-all duration-300 border-l-4 border-transparent hover:border-red-400">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full mr-4 mt-1 group-hover:bg-red-200 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-red-600" />
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-red-600 w-20 inline-block">
                    Address:
                  </span>
                  <span className="group-hover:text-red-700 transition-colors duration-300 text-red-700">
                    C-103 Mangalam Apartment, Near Railway Station, Boisar,
                    Palghar, Maharashtra
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-amber-200/50">
              <h2 className="text-xl font-semibold text-amber-700 mb-4">
                Connect With Us
              </h2>
              <div className="flex flex-col space-y-3">
                <div className="group p-3 rounded-xl hover:bg-blue-50/70 transition-all duration-300 border-l-4 border-transparent hover:border-blue-500">
                  <a
                    href="https://in.linkedin.com/in/manoj-churi-62896542?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </div>
                    LinkedIn
                  </a>
                </div>

                <div className="group p-3 rounded-xl hover:bg-pink-50/70 transition-all duration-300 border-l-4 border-transparent hover:border-pink-500">
                  <a
                    href="https://www.instagram.com/microsyscomputers103?igsh=a2xtcTdzaTBieTVk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-700 hover:text-pink-600 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-pink-100 rounded mr-3 group-hover:bg-pink-200 transition-colors duration-300">
                      <Instagram className="w-4 h-4 text-pink-600" />
                    </div>
                    Instagram
                  </a>
                </div>

                <div className="group p-3 rounded-xl hover:bg-blue-50/70 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064077511737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <Facebook className="w-4 h-4 text-blue-700" />
                    </div>
                    Facebook
                  </a>
                </div>

                <div className="group p-3 rounded-xl hover:bg-green-50/70 transition-all duration-300 border-l-4 border-transparent hover:border-green-500">
                  <a
                    href="https://wa.me/9822683958"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-700 hover:text-green-600 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded mr-3 group-hover:bg-green-200 transition-colors duration-300">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </div>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 text-center">
              Visit Our Center
            </h2>
            <div className="relative group">
              <div className="w-full h-72 border-2 border-amber-300/60 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02] hover:border-amber-400">
                <iframe
                  title="Microsys Computers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398.38285430406637!2d72.76044866545952!3d19.79793495595922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71ef7706d0e39%3A0xb9b9de147030f544!2sMicrosys%20Computers!5e0!3m2!1sen!2sin!4v1757781159001!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500 hover:saturate-110"
                ></iframe>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }

        .animate-scale-in {
          animation: scale-in 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default Contact;
