import { BriefcaseIcon, GraduationCap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-portfolio-light to-white">
      <div className="container mx-auto px-4 py-16 animate-fadeIn">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-primary mb-6">
            Software QA Test Engineer
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-secondary mb-8">
            Ensuring software quality at Cisco
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-portfolio-secondary">
              <BriefcaseIcon className="w-6 h-6" />
              <span>Cisco</span>
            </div>
            <div className="flex items-center gap-2 text-portfolio-secondary">
              <GraduationCap className="w-6 h-6" />
              <span>Carleton University</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};