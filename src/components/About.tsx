export const About = () => {
  return (
    <section className="py-20 bg-portfolio-light" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <p className="text-lg text-portfolio-secondary leading-relaxed">
          I am a Computer Systems Engineer with a degree from Carleton University 
          and over three years of hands-on experience in automation and L2/L3 network protocol testing.
           Skilled in Python scripting and network technologies, I thrive on solving complex challenges and delivering efficient solutions in dynamic environments..
          </p>
        </div>
      </div>
    </section>
  );
};