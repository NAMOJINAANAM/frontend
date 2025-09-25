'use client';

import Link from 'next/link';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGamepad,
  FaTrophy,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Arcade Games", href: "/gaming/arcade" },
    { name: "VR Experience", href: "/gaming/vr" },
    { name: "Bowling Alley", href: "/gaming/bowling" },
    { name: "Birthday Parties", href: "/celebrations/birthdays" },
    { name: "Food Menu", href: "/food" },
    { name: "Event Gallery", href: "/gallery" },
  ];

  const services = [
    { name: "Gaming Tournaments", icon: FaTrophy },
    { name: "Private Events", icon: FaStar },
    { name: "VR Gaming", icon: FaGamepad },
    { name: "Party Planning", icon: FaStar },
    { name: "Food Catering", icon: FaStar },
    { name: "Team Building", icon: FaTrophy },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-400" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-300" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="bg-black text-white border-t-4 border-[var(--color-primary)]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="w-20 h-20 bg-[var(--color-primary)] rounded-full border-4 border-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="relative">
                  <span className="text-2xl font-bold text-black">FZ</span>
                  <FaTrophy className="absolute -top-2 -right-3 text-black text-sm" />
                </div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your ultimate gaming destination! Experience state-of-the-art arcade games, 
              VR adventures, bowling alleys, and unforgettable celebrations. Book your 
              gaming session today!
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black transition-all duration-200 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[var(--color-primary)] flex items-center gap-2">
              <FaGamepad className="w-5 h-5" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--color-primary)] transition-all duration-200 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="w-3 h-3 text-[var(--color-primary)] transform group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[var(--color-primary)] flex items-center gap-2">
              <FaTrophy className="w-5 h-5" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-[var(--color-primary)]">
                    <service.icon className="w-3 h-3 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-gray-300">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[var(--color-primary)] flex items-center gap-2">
              <FaMapMarkerAlt className="w-5 h-5" />
              Visit Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Our Location</p>
                  <p className="text-gray-400 text-sm">123 Gaming Street, Fun City, FC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaPhone className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Call Us</p>
                  <p className="text-gray-400 text-sm">+1 (555) 123-GAME</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaEnvelope className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Email Us</p>
                  <p className="text-gray-400 text-sm">info@funzone.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaClock className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Opening Hours</p>
                  <p className="text-gray-400 text-sm">Mon-Sun: 10:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-black px-6 py-3 rounded-lg font-bold mt-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:scale-105"
            >
              <FaGamepad className="w-4 h-4" />
              Book Your Session
            </Link>
          </div>
        </div>

        {/* Gaming Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">50+</div>
            <div className="text-gray-300 text-sm">Arcade Games</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">10K+</div>
            <div className="text-gray-300 text-sm">Happy Players</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">500+</div>
            <div className="text-gray-300 text-sm">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support</div>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Fun Zone Gaming Center. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/safety" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200">
                Safety Guidelines
              </Link>
              <Link href="/careers" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}