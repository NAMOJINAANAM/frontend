"use client";

import  Button from "@/components/ui/button";

import { 
  HiMapPin, 
  HiPhone, 
  HiEnvelope, 
  HiArrowRight
} from "react-icons/hi2";
import { FaInstagram,FaFacebook  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const quickLinks = [
    { name: "Gaming Zone", href: "#gaming" },
    { name: "Food Menu", href: "#food" },
    { name: "Celebrations", href: "#celebrations" },
    { name: "Book Now", href: "#book" },
  ];

  const gameLinks = [
    { name: "Arcade Games", href: "#arcade" },
    { name: "Bowling Alley", href: "#bowling" },
    { name: "VR Experiences", href: "#vr" },
    { name: "All Games", href: "#all-games" },
  ];

  const eventLinks = [
    { name: "Birthday Parties", href: "#birthdays" },
    { name: "Corporate Events", href: "#corporate" },
    { name: "Custom Events", href: "#custom" },
    { name: "Group Packages", href: "#packages" },
  ];

  return (
    <footer className="bg-[var(--color-white)] dark:bg-[var(--color-black)] border-t border-[var(--color-light-gray)]">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-flame-red)] mr-3">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-flame-red)] bg-clip-text text-transparent">
                Namojinaanam
              </span>
            </div>
            <p className="text-[var(--color-black)] dark:text-[var(--color-white)] mb-6 max-w-md text-sm leading-relaxed">
              The ultimate entertainment destination where friends and families come together 
              to play, feast, and celebrate life's special moments.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)]">
                <HiMapPin className="h-4 w-4 text-[var(--color-purple)]" />
                <span>123 Entertainment Blvd, Fun City, FC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)]">
                <HiPhone className="h-4 w-4 text-[var(--color-purple)]" />
                <a href="tel:+15551234567" className="hover:text-[var(--color-purple)] transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)]">
                <HiEnvelope className="h-4 w-4 text-[var(--color-purple)]" />
                <a href="mailto:info@Namojinaanam.com" className="hover:text-[var(--color-purple)] transition-colors">
                  info@Namojinaanam.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)] hover:text-[var(--color-purple)] transition-colors duration-200 flex items-center group"
                  >
                    <HiArrowRight className="h-3 w-3 mr-2 text-[var(--color-purple)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gaming */}
          <div>
            <h3 className="font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mb-4 text-lg">Gaming</h3>
            <ul className="space-y-3">
              {gameLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)] hover:text-[var(--color-purple)] transition-colors duration-200 flex items-center group"
                  >
                    <HiArrowRight className="h-3 w-3 mr-2 text-[var(--color-purple)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mb-4 text-lg">Events</h3>
            <ul className="space-y-3">
              {eventLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)] hover:text-[var(--color-purple)] transition-colors duration-200 flex items-center group"
                  >
                    <HiArrowRight className="h-3 w-3 mr-2 text-[var(--color-purple)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="py-8 border-t border-[var(--color-light-gray)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mb-2 text-lg">Stay in the Game</h3>
              <p className="text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)] max-w-md">
                Get exclusive offers and event updates delivered to your inbox
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 min-w-[250px] border-[var(--color-light-gray)] focus:border-[var(--color-purple)]"
              />
              <Button 
                className="bg-gradient-to-r from-[var(--color-flame-orange)] to-[var(--color-flame-red)] text-white hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="py-6 border-t border-[var(--color-light-gray)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)] order-2 md:order-1">
              © 2024 Namojinaanam Entertainment. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 order-1 md:order-2">
              <span className="text-sm text-[var(--color-black)] dark:text-[var(--color-light-gray)] hidden sm:block">Follow us:</span>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-[var(--color-purple)] hover:text-white transition-colors duration-300 rounded-full h-10 w-10"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-[var(--color-purple)] hover:text-white transition-colors duration-300 rounded-full h-10 w-10"
                  aria-label="Facebook"
                >
                  <FaFacebook  className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-[var(--color-purple)] hover:text-white transition-colors duration-300 rounded-full h-10 w-10"
                  aria-label="Twitter"
                >
                  <FaXTwitter  className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm order-3">
              <a 
                href="#privacy" 
                className="text-[var(--color-black)] dark:text-[var(--color-light-gray)] hover:text-[var(--color-purple)] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-[var(--color-black)] dark:text-[var(--color-light-gray)] hover:text-[var(--color-purple)] transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;