'use client';

import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import Button from "@/components/ui/button";
const MapSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[var(--gaming-bg-2)] to-[var(--gaming-bg-1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gaming-text-1)] mb-4">
            Find Us Here
          </h2>
          <p className="text-lg text-[var(--gaming-text-2)] max-w-2xl mx-auto">
            Visit our amazing entertainment venue located in the heart of the city
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border-2 border-[var(--gaming-border-1)] shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.621581789363!2d-74.005942748374!3d40.71274937922715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1233dd7b6b%3A0x5bc84684c4be83!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1632931234567!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FunZone Location"
              className="rounded-2xl"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-[var(--gaming-bg-1)]/50 to-[var(--gaming-bg-2)]/50 rounded-2xl border-2 border-[var(--gaming-border-2)] p-6">
              <h3 className="text-xl font-bold text-[var(--gaming-text-1)] mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[var(--gaming-text-1)]" />
                Our Address
              </h3>
              <p className="text-[var(--gaming-text-2)] mb-2">
                123 Entertainment Avenue
              </p>
              <p className="text-[var(--gaming-text-2)] mb-2">
                Times Square, New York, NY 10036
              </p>
              <p className="text-[var(--gaming-text-2)]">
                United States
              </p>
            </div>

            <div className="bg-gradient-to-b from-[var(--gaming-bg-1)]/50 to-[var(--gaming-bg-2)]/50 rounded-2xl border-2 border-[var(--gaming-border-2)] p-6">
              <h3 className="text-xl font-bold text-[var(--gaming-text-1)] mb-4">
                Parking & Transportation
              </h3>
              <ul className="space-y-2 text-[var(--gaming-text-2)]">
                <li>• Free parking for guests</li>
                <li>• Metro station: 5-minute walk</li>
                <li>• Bus stops nearby</li>
                <li>• Bike racks available</li>
              </ul>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-[var(--gaming-border-1)] to-[var(--gaming-text-1)] text-[var(--gaming-bg-1)] hover:shadow-2xl transition-all duration-300 py-3 rounded-xl font-bold"
              href="https://maps.google.com"
            >
              <FaDirections className="mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;