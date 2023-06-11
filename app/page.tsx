import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen w-full snap-y snap-mandatory overflow-scroll z-0">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section className="snap-center" id="experience">
        <WorkExperience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
