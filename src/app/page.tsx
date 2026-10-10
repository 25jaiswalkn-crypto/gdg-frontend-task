import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Team />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}