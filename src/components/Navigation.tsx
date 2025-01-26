import { Home, User, Briefcase, FileText, Mail } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto py-2">
        <Tabs defaultValue="home" onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto">
            <TabsTrigger value="home" className="flex gap-2 items-center">
              <Home className="w-4 h-4" />
              Home
            </TabsTrigger>
            <TabsTrigger value="about" className="flex gap-2 items-center">
              <User className="w-4 h-4" />
              About
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex gap-2 items-center">
              <Briefcase className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="cv" className="flex gap-2 items-center">
              <FileText className="w-4 h-4" />
              CV
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex gap-2 items-center">
              <Mail className="w-4 h-4" />
              Contact
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};