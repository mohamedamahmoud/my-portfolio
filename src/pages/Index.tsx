import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { CV } from "@/components/CV";

const Index = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <CV />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;