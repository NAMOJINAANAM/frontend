import Image from "next/image";
import GuestLayout from "@/app/layouts/GuestLayout"
import HeroCarousel from "@/components/herocarousel"
import GamingZone from "@/components/GamingZone";
import FoodZone from "@/components/FoodZone";
export default function Home() {

  return (
    <GuestLayout>
      <div className="mt-10">
    <HeroCarousel/>
    <GamingZone/>
    <FoodZone/>
    </div>
    </GuestLayout>
  );
}
