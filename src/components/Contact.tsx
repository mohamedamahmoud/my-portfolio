import { Globe, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-portfolio-light" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto bg-white rounded-lg p-8 shadow-lg">
          <div className="space-y-6">
            <a
              href="https://www.cisco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-portfolio-secondary hover:text-portfolio-accent transition-colors"
            >
              <Globe className="w-6 h-6" />
              <span>Cisco</span>
            </a>
            <a
              href="mailto:mohameda.mahmoud186@gmail.com"
              className="flex items-center gap-3 text-portfolio-secondary hover:text-portfolio-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>mohameda.mahmoud186@gmail.com</span>
            </a>
            <a
              href="tel:+16132400406"
              className="flex items-center gap-3 text-portfolio-secondary hover:text-portfolio-accent transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>(613) 240-0406</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};