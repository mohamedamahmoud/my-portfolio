import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;