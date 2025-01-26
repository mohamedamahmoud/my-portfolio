import { Code2, Network, Server, Wrench, Brain, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "Java", "JavaScript", "Perl"],
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Networking & Security",
      skills: ["L2/L3 Multicast", "OSPF", "FnF", "Network Testing", "IXIA"],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "Azure", "MS Flow", "Selenium", "Linux/Ubuntu"],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Testing & QA",
      skills: ["API Testing", "pyATS", "Test Case Development", "Bug Tracking", "Jira"],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Technologies",
      skills: ["ROS", "OpenCV", "Flask", "JavaFX", "Android Studio", "MATLAB"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      skills: ["Team Collaboration", "Communication", "Problem Solving", "Technical Documentation", "Project Management"],
    },
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Professional Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    className="text-portfolio-secondary flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full"></span>
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