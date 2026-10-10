import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Events />
      </main>
    </>
  );
}