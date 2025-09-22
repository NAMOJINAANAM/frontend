'use client';

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import GuestLayout from "@/app/layouts/GuestLayout";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
    <GuestLayout>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      </GuestLayout>
    </main>
  );
};

export default ContactPage;