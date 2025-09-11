import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-soft">
      <nav className="container mx-auto px-4 py-2 lg:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src="/lovable-uploads/f08b8498-73d0-4f7f-a9d1-c1de091e1a8b.png" alt="Honorato e Rocha Contabilidade" className="h-24 sm:h-14 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base">
              Sobre
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base">
              Serviços
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base">
              Contato
            </button>
            <Button onClick={() => window.open("https://wa.me/5547997480033", "_blank")} variant="default" size="sm" className="bg-primary hover:bg-primary-dark text-sm lg:text-base">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-card">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Sobre
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                Contato
              </button>
              <Button onClick={() => window.open("https://wa.me/5547997480033", "_blank")} variant="default" className="bg-primary hover:bg-primary-dark w-full">
                Fale Conosco
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;