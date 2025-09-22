import Image from "next/image";
import GuestLayout from "@/app/layouts/GuestLayout"
import ZoneCarousel from "@/components/herocarousel"
import GamingZone from "@/components/GamingZone";
import FoodZone from "@/components/FoodZone";
import CelebrationZone from "@/components/CelebrationZone";
import GalleryZone from "@/components/GalleryZone";
import BlogPreview from "@/components/BlogPreview";
import ContactLocation from "@/components/ContactLocation";
export default function Home() {

  return (
    <GuestLayout>
    <ZoneCarousel/>
    <GamingZone/>
      <div className="h-0.5 bg-black"></div>
    <FoodZone/>
      <div className="h-0.5 bg-black"></div>
    <CelebrationZone/>
      <div className="h-0.5 bg-black"></div>
    <GalleryZone/>
      <div className="h-0.5 bg-black"></div>
    <BlogPreview/>
    <ContactLocation/>
    </GuestLayout>
  );
}
