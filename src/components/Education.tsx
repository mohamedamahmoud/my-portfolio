import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 bg-portfolio-light" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Education
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-portfolio-accent mt-1" />
            <div>
              <h3 className="text-xl font-bold text-portfolio-primary">
                Bachelor's Degree in Computer Systems Engineering
              </h3>
              <p className="text-portfolio-secondary">Carleton University</p>
              <div className="mt-4">
                <p className="text-gray-600">
                  Comprehensive education in computer systems engineering, covering software
                  development, testing methodologies, and system architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};