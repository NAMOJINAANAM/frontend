"use client";

import Button from "@/components/ui/button";
import { 
  HiMapPin, 
  HiPhone, 
  HiEnvelope, 
  HiArrowRight
} from "react-icons/hi2";
import { FaInstagram, FaFacebook, FaGamepad, FaUtensils, FaGlassCheers } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Gaming Zone", href: "#gaming", icon: FaGamepad },
    { name: "Food Zone", href: "#food", icon: FaUtensils },
    { name: "Celebration Zone", href: "#celebrations", icon: FaGlassCheers },
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
    <footer className="bg-gradient-to-b from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)] border-t-2 border-[var(--gaming-border-1)]">
      {/* Animated Top Border */}
      <div className="h-1 bg-gradient-to-r from-[var(--gaming-border-1)] via-[var(--food-border-1)] to-[var(--celebration-border-1)] animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--gaming-text-1)] via-[var(--food-text-1)] to-[var(--celebration-text-1)] p-1 mr-4">
                <div className="w-full h-full bg-[var(--gaming-bg-1)] rounded-lg flex items-center justify-center">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gaming-text-1)] via-[var(--food-text-1)] to-[var(--celebration-text-1)] text-lg">
                    FZ
                  </span>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--gaming-text-1)] via-[var(--food-text-1)] to-[var(--celebration-text-1)] bg-clip-text text-transparent">
                FunZone
              </span>
            </div>
            <p className="text-[var(--gaming-text-2)] mb-6 max-w-md text-sm leading-relaxed">
              The ultimate entertainment destination where friends and families come together 
              to play, feast, and celebrate life's special moments.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[var(--gaming-text-2)]">
                <HiMapPin className="h-5 w-5 text-[var(--gaming-text-1)]" />
                <span>123 Entertainment Blvd, Fun City, FC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--gaming-text-2)]">
                <HiPhone className="h-5 w-5 text-[var(--gaming-text-1)]" />
                <a href="tel:+15551234567" className="hover:text-[var(--gaming-text-1)] transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--gaming-text-2)]">
                <HiEnvelope className="h-5 w-5 text-[var(--gaming-text-1)]" />
                <a href="mailto:info@funzone.com" className="hover:text-[var(--gaming-text-1)] transition-colors">
                  info@funzone.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--gaming-text-1)] mb-4 text-lg flex items-center">
              <div className="w-3 h-3 bg-[var(--gaming-text-1)] rounded-full mr-2 animate-pulse"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-[var(--gaming-text-2)] hover:text-[var(--gaming-text-1)] transition-colors duration-200 flex items-center group"
                    >
                      {IconComponent && <IconComponent className="h-4 w-4 mr-2 text-[var(--gaming-text-1)]" />}
                      <HiArrowRight className="h-3 w-3 mr-2 text-[var(--gaming-text-1)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Gaming */}
          <div>
            <h3 className="font-semibold text-[var(--gaming-text-1)] mb-4 text-lg flex items-center">
              <div className="w-3 h-3 bg-[var(--gaming-text-1)] rounded-full mr-2"></div>
              Gaming
            </h3>
            <ul className="space-y-3">
              {gameLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-[var(--gaming-text-2)] hover:text-[var(--gaming-text-1)] transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-[var(--gaming-text-1)] rounded-full mr-3 group-hover:animate-pulse"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-semibold text-[var(--celebration-text-1)] mb-4 text-lg flex items-center">
              <div className="w-3 h-3 bg-[var(--celebration-text-1)] rounded-full mr-2"></div>
              Events
            </h3>
            <ul className="space-y-3">
              {eventLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-[var(--gaming-text-2)] hover:text-[var(--celebration-text-1)] transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-[var(--celebration-text-1)] rounded-full mr-3 group-hover:animate-pulse"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t-2 border-[var(--gaming-border-2)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-[var(--gaming-text-2)] order-2 md:order-1">
              © 2024 FunZone Entertainment. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 order-1 md:order-2">
              <span className="text-sm text-[var(--gaming-text-2)] hidden sm:block">Follow us:</span>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-[var(--gaming-text-1)] hover:text-[var(--gaming-bg-1)] transition-colors duration-300 rounded-full h-10 w-10 border border-[var(--gaming-border-1)]"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-[var(--gaming-text-1)] hover:text-[var(--gaming-bg-1)] transition-colors duration-300 rounded-full h-10 w-10 border border-[var(--gaming-border-1)]"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-[var(--gaming-text-1)] hover:text-[var(--gaming-bg-1)] transition-colors duration-300 rounded-full h-10 w-10 border border-[var(--gaming-border-1)]"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm order-3">
              <a 
                href="#privacy" 
                className="text-[var(--gaming-text-2)] hover:text-[var(--gaming-text-1)] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-[var(--gaming-text-2)] hover:text-[var(--gaming-text-1)] transition-colors duration-200"
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