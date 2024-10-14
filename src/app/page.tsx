'use client'
import Detail from "@/components/Detail";
import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection"
import WatchDetails from "@/components/Watchdetail";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
     <Hero />
    < Detail />
   < NewCollection />
   <WatchDetails />
      <Footer />
    </div>
  );
}
