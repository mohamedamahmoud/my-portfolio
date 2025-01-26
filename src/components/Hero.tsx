import { BriefcaseIcon, GraduationCap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-portfolio-light to-white pt-16"
      id="home"
    >
      <div className="container mx-auto px-4 py-16 animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-portfolio-primary mb-4">
              Mohamed Mahmoud
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-secondary mb-8">
              Software Engineer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
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
          <div className="w-48 h-300 md:w-64 md:h-64">
            <img
              src="/assets/profile-photo.png"
              alt="Mohamed Mahmoud"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};