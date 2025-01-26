import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CV = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/mohamed-cv.pdf';
    link.download = 'Mohamed_Mahmoud_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-white" id="cv">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-portfolio-primary">
          Curriculum Vitae
        </h2>
        <div className="max-w-4xl mx-auto bg-portfolio-light rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-portfolio-primary" />
              <span className="text-xl font-semibold text-portfolio-primary">
                My CV
              </span>
            </div>
            <Button 
              onClick={handleDownload}
              className="flex items-center gap-2 bg-portfolio-primary hover:bg-portfolio-secondary"
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
          <div className="aspect-[1/1.4] w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/mohamed-cv.pdf"
              className="w-full h-full"
              title="CV Preview"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Click the download button above to get a copy of my full CV
          </p>
        </div>
      </div>
    </section>
  );
};