import { BriefcaseIcon, CheckIcon } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Professional Experience
        </h2>
        <div className="max-w-3xl mx-auto bg-portfolio-light rounded-lg p-6 md:p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <BriefcaseIcon className="w-8 h-8 text-portfolio-accent mt-1" />
            <div>
              <h3 className="text-xl font-bold text-portfolio-primary">
                Software QA Test Engineer
              </h3>
              <p className="text-portfolio-secondary mb-2">
                Cisco | July 2022 - Present
              </p>
              <ul className="space-y-2">
                {[
                  "Develop and execute comprehensive test plans",
                  "Implement automated testing solutions",
                  "Collaborate with development teams to ensure software quality",
                  "Identify and track software defects",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-portfolio-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};