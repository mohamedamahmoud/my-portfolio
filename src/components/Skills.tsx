import { ShieldCheck, Bug, Computer } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Testing",
      skills: ["Manual Testing", "Automated Testing", "Test Planning", "Defect Tracking"],
    },
    {
      icon: <Computer className="w-6 h-6" />,
      title: "Technical",
      skills: ["Python", "Java", "SQL", "Git", "CI/CD"],
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality Assurance",
      skills: ["Test Cases", "Bug Reports", "Quality Metrics", "Process Improvement"],
    },
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-portfolio-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-portfolio-accent mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-portfolio-primary mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-portfolio-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};