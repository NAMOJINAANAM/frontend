import Image from "next/image";
import GuestLayout from "@/app/layouts/GuestLayout"
import ZoneCarousel from "@/components/herocarousel"
import GamingZone from "@/components/GamingZone";
import FoodZone from "@/components/FoodZone";
import CelebrationZone from "@/components/CelebrationZone";
import GalleryZone from "@/components/GalleryZone";
import BlogPreview from "@/components/BlogPreview";
import ContactLocation from "@/components/ContactLocation";
import GamingCategories from "@/components/GamingCategories";
import Seo from "@/lib/seo";
export default function Home() {

  return (<>
  
    <Seo
        title="Namojinaanam | Entertainment Hub"
        description="Namojinaanam is your ultimate entertainment destination featuring a vibrant gaming zone, delicious food, celebration spaces, gallery, and more. Book now for unforgettable experiences."
        keywords="GameZone, Gaming Zone, Food Zone,Celebrations, Entertainment"
        url="/"
      />
    <GuestLayout>
    <ZoneCarousel/>
    <GamingZone/>
     <GamingCategories/>
    <CelebrationZone/>
    <FoodZone/>
      {/* <div className="h-0.5 bg-black"></div> */}
    <GalleryZone/>
      {/* <div className="h-0.5 bg-black"></div> */}
    <BlogPreview/>
    <ContactLocation/>
    </GuestLayout>
  </>
  );
}
