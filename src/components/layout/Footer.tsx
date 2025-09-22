'use client';

import Link from 'next/link';
import { 
  FaHome, 
  FaGamepad, 
  FaUtensils, 
  FaGlassCheers, 
  FaImages, 
  FaPhone, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/", icon: FaHome },
    { name: "Gaming Zone", href: "/gaming", icon: FaGamepad },
    { name: "Food Zone", href: "/food", icon: FaUtensils },
    { name: "Celebrations", href: "/celebrations", icon: FaGlassCheers },
    { name: "Gallery", href: "/gallery", icon: FaImages },
    { name: "Contact", href: "/contact", icon: FaPhone }
  ];

  const gamingServices = [
    "Arcade Games",
    "VR Experiences",
    "Bowling Alley",
    "Laser Tag",
    "E-Sports Arena",
    "Kids Zone"
  ];

  const foodServices = [
    "Multi-Cuisine Restaurant",
    "Snack Bar",
    "Beverage Counter",
    "Party Catering",
    "Custom Cakes"
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "123 Fun Street, Entertainment District, City - 123456"
    },
    {
      icon: FaPhoneAlt,
      text: "+1 (555) 123-4567"
    },
    {
      icon: FaEnvelope,
      text: "info@funzone.com"
    },
    {
      icon: FaClock,
      text: "Mon-Sun: 10:00 AM - 11:00 PM"
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-600" }
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#0D0D2B] text-white">
        {/* Newsletter Section */}
        {/* <div className="bg-gradient-to-r from-purple-700 to-blue-700 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-white/90">Get the latest news and special offers from FunZone</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-full text-gray-800 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-white text-[#0D0D2B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="font-bold text-xl text-[#0D0D2B]">FZ</span>
                </div>
                <span className="font-bold text-2xl">FunZone</span>
              </div>
              <p className="text-gray-300 mb-6">
                Your ultimate destination for entertainment, dining, and celebrations. 
                Experience the best gaming and culinary adventures under one roof.
              </p>
              
              {/* Social Links - Hidden on mobile, shown on desktop */}
              <div className="hidden md:flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    >
                      <link.icon className="mr-2 text-sm group-hover:scale-110 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Our Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-purple-300 mb-2 flex items-center">
                    <FaGamepad className="mr-2" /> Gaming
                  </h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {gamingServices.map((service, index) => (
                      <li key={index} className="hover:text-white transition-colors">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-300 mb-2 flex items-center">
                    <FaUtensils className="mr-2" /> Food & Dining
                  </h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {foodServices.map((service, index) => (
                      <li key={index} className="hover:text-white transition-colors">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contact Info</h4>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="text-purple-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links - Shown on mobile, hidden on desktop */}
              <div className="mt-6 flex space-x-4 md:hidden justify-center">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
                © {currentYear} FunZone Entertainment Center. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Quick Action Bar - Only visible on small screens */}
      <div className="lg:hidden bg-white border-t border-gray-200 py-3 px-4">
        <div className="flex justify-between items-center">
          <a href="tel:+15551234567" className="flex items-center space-x-2 text-[#0D0D2B]">
            <FaPhoneAlt className="text-purple-600" />
            <span className="text-sm font-medium">Call Now</span>
          </a>
          <a href="mailto:info@funzone.com" className="flex items-center space-x-2 text-[#0D0D2B]">
            <FaEnvelope className="text-purple-600" />
            <span className="text-sm font-medium">Email Us</span>
          </a>
          <a href="#map" className="flex items-center space-x-2 text-[#0D0D2B]">
            <FaMapMarkerAlt className="text-purple-600" />
            <span className="text-sm font-medium">Directions</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;