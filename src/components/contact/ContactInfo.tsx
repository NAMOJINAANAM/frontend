'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: FaPhone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Call us for immediate assistance",
      color: "from-[var(--gaming-border-1)] to-[var(--gaming-text-1)]"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: "info@funzone.com",
      description: "Send us a message anytime",
      color: "from-[var(--food-border-1)] to-[var(--food-text-1)]"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: "123 Entertainment Avenue, Fun City",
      description: "Visit our amazing venue",
      color: "from-[var(--celebration-border-1)] to-[var(--celebration-text-1)]"
    },
    {
      icon: FaClock,
      title: "Hours",
      details: "Mon-Sun: 10AM - 10PM",
      description: "Extended weekend hours",
      color: "from-[var(--gallery-border-1)] to-[var(--gallery-text-1)]"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--gaming-bg-2)] to-[var(--gaming-bg-1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gaming-text-1)] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[var(--gaming-text-2)] max-w-2xl mx-auto">
            Multiple ways to reach us. We're always happy to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-b from-[var(--gaming-bg-1)]/50 to-[var(--gaming-bg-2)]/50 border-2 border-[var(--gaming-border-2)] hover:border-[var(--gaming-text-1)] transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} mb-6`}>
                  <IconComponent className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--gaming-text-1)] mb-2">
                  {method.title}
                </h3>
                <p className="text-lg text-[var(--gaming-text-1)] font-semibold mb-2">
                  {method.details}
                </p>
                <p className="text-sm text-[var(--gaming-text-2)]">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-[var(--celebration-border-1)] to-[var(--celebration-text-1)] border-2 border-[var(--celebration-border-2)]">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaWhatsapp className="text-2xl text-white" />
            <h3 className="text-xl font-bold text-white">Urgent Matters</h3>
          </div>
          <p className="text-white/90 mb-4">
            For urgent issues or same-day bookings, message us directly on WhatsApp
          </p>
          <p className="text-2xl font-bold text-white">+1 (555) 123-HELP</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;