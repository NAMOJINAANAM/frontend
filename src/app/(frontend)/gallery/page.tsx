'use client';

import { useState } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GuestLayout from "@/app/layouts/GuestLayout";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main className="min-h-screen">
        <GuestLayout>
      <GalleryHero />
      <GalleryFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <GalleryGrid activeFilter={activeFilter} />
      </GuestLayout>
      <style jsx>{`
        .neon-text-gallery {
          text-shadow: 0 0 5px var(--gallery-text-1), 0 0 10px var(--gallery-text-1), 0 0 15px var(--gallery-text-1), 0 0 20px var(--gallery-border-1);
        }
      `}</style>
    </main>
  );
};

export default GalleryPage;