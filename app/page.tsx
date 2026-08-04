import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
