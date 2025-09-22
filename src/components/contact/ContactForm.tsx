'use client';

import { useState } from "react";
import Button from "@/components/ui/button";
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--gaming-bg-1)] to-[var(--gaming-bg-2)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--gaming-text-1)] mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-[var(--gaming-text-2)]">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-b from-[var(--gaming-bg-1)]/50 to-[var(--gaming-bg-2)]/50 rounded-2xl border-2 border-[var(--gaming-border-2)] p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-[var(--gaming-text-1)] mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--gaming-text-2)]" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-[var(--gaming-border-2)] rounded-xl focus:border-[var(--gaming-text-1)] focus:ring-2 focus:ring-[var(--gaming-text-1)] bg-[var(--gaming-bg-1)]/30 text-[var(--gaming-text-2)] placeholder-[var(--gaming-text-2)]/50 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--gaming-text-1)] mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--gaming-text-2)]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-[var(--gaming-border-2)] rounded-xl focus:border-[var(--gaming-text-1)] focus:ring-2 focus:ring-[var(--gaming-text-1)] bg-[var(--gaming-bg-1)]/30 text-[var(--gaming-text-2)] placeholder-[var(--gaming-text-2)]/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--gaming-text-1)] mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--gaming-text-2)]" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-[var(--gaming-border-2)] rounded-xl focus:border-[var(--gaming-text-1)] focus:ring-2 focus:ring-[var(--gaming-text-1)] bg-[var(--gaming-bg-1)]/30 text-[var(--gaming-text-2)] placeholder-[var(--gaming-text-2)]/50 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--gaming-text-1)] mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[var(--gaming-border-2)] rounded-xl focus:border-[var(--gaming-text-1)] focus:ring-2 focus:ring-[var(--gaming-text-1)] bg-[var(--gaming-bg-1)]/30 text-[var(--gaming-text-2)] transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Information</option>
                  <option value="event">Event Planning</option>
                  <option value="group">Group Rates</option>
                  <option value="complaint">Complaint</option>
                  <option value="compliment">Compliment</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-[var(--gaming-text-1)] mb-2">
                Message *
              </label>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-[var(--gaming-text-2)]" />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-[var(--gaming-border-2)] rounded-xl focus:border-[var(--gaming-text-1)] focus:ring-2 focus:ring-[var(--gaming-text-1)] bg-[var(--gaming-bg-1)]/30 text-[var(--gaming-text-2)] placeholder-[var(--gaming-text-2)]/50 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[var(--gaming-border-1)] to-[var(--gaming-text-1)] text-[var(--gaming-bg-1)] hover:shadow-2xl transition-all duration-300 py-4 rounded-xl font-bold text-lg group"
            >
              <FaPaperPlane className="mr-3 text-xl group-hover:rotate-12 transition-transform" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;