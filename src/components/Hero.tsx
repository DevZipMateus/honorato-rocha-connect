import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden" style={{backgroundImage: `url('/lovable-uploads/a37561d3-ca34-416b-8abe-351002e717d4.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/80"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='white' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-primary-foreground mb-6 backdrop-blur-sm">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">12 anos de experiência</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Contabilidade 
              <span className="block text-accent-light">Profissional</span>
              em Garuva/SC
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Escritório especializado em contabilidade e assessoria empresarial. 
              Atendemos empresas de todos os regimes tributários com uma equipe qualificada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => window.open("https://wa.me/5547997480033", "_blank")}
                size="lg"
                variant="hero"
                className="group shadow-floating"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                size="lg"
                className="border-white/20 text-primary-foreground hover:bg-white/10 backdrop-blur-sm"
              >
                Nossos Serviços
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Shield className="h-5 w-5 text-accent-light mr-2" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">12+</div>
                <div className="text-sm text-primary-foreground/80">Anos de Experiência</div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-5 w-5 text-accent-light mr-2" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">100+</div>
                <div className="text-sm text-primary-foreground/80">Clientes Atendidos</div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="h-5 w-5 text-accent-light mr-2" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">Todos</div>
                <div className="text-sm text-primary-foreground/80">Regimes Tributários</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-floating">
              <img
                src="/lovable-uploads/8ebe353a-d59e-4949-93cc-46caf2d026d3.png"
                alt="Honorato e Rocha Contabilidade"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;