import { BriefcaseIcon, CheckIcon } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software QA Test Engineer",
      company: "Cisco",
      location: "Ottawa, ON Canada",
      period: "July 2022 - Present",
      responsibilities: [
        "Developed APIs and parsers in python using pyATS",
        "Wrote test cases to test multicast traffic using IXIA on new catalyst switches series",
        "Replicated defects reported by customers and filed bugs if needed",
      ],
    },
    {
      title: "Automation Scripting",
      company: "Ericsson",
      location: "Ottawa, ON Canada",
      period: "September 2020 - August 2021",
      responsibilities: [
        "Developed tools to Automate repetitive tasks including email content auto-population",
        "Assisted engineers in modifying and adding logic to Python and Perl code",
        "Gained hands-on experience with MS Flow, Azure, Selenium, Docker",
        "Managed Jira tasks and provided daily progress updates",
      ],
    },
    {
      title: "Research Associate",
      company: "Carleton University",
      location: "Computer Systems Department",
      period: "January - August 2020",
      responsibilities: [
        "Worked with embedded C, MATLAB, Python and Linux",
        "Used HTML, CSS, JavaScript and Markdown for website modifications",
        "Assisted colleagues with Windows/Ubuntu server configuration",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Professional Experience
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-portfolio-light rounded-lg p-6 md:p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <BriefcaseIcon className="w-8 h-8 text-portfolio-accent mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-portfolio-primary">
                    {exp.title}
                  </h3>
                  <p className="text-portfolio-secondary mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-portfolio-secondary mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckIcon className="w-5 h-5 text-portfolio-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};