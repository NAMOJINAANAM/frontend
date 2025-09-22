'use client';

import Button from "@/components/ui/button";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)]">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 text-[var(--gaming-text-1)]/20 text-6xl">
        <FaPhone />
      </div>
      <div className="absolute bottom-20 right-12 text-[var(--food-text-1)]/20 text-7xl">
        <FaEnvelope />
      </div>
      <div className="absolute top-1/4 right-8 text-[var(--celebration-text-1)]/20 text-5xl">
        <FaMapMarkerAlt />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--gaming-text-1)] mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-[var(--gaming-text-2)] mb-8 max-w-3xl mx-auto">
            Get in touch with us! We're here to answer any questions and help you plan your perfect visit.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-[var(--gaming-text-2)] bg-[var(--gaming-bg-1)]/30 px-4 py-2 rounded-xl">
              <FaPhone className="text-[var(--gaming-text-1)]" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--gaming-text-2)] bg-[var(--gaming-bg-1)]/30 px-4 py-2 rounded-xl">
              <FaClock className="text-[var(--gaming-text-1)]" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--gaming-text-2)] bg-[var(--gaming-bg-1)]/30 px-4 py-2 rounded-xl">
              <FaMapMarkerAlt className="text-[var(--gaming-text-1)]" />
              <span>Easy to Find</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;