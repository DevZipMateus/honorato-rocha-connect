import { Building2, MapPin, Clock, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a Honorato e Rocha Contabilidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Localizado no centro de Garuva/SC, nosso escritório completa este ano 12 anos de história, 
            oferecendo serviços contábeis com excelência e comprometimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nossa História
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Com uma trajetória de 12 anos no mercado, a Honorato e Rocha Contabilidade 
              se consolidou como referência em serviços contábeis em Garuva e região. 
              Nossa equipe qualificada atende empresas de todos os regimes tributários 
              com dedicação e expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Estabelecidos no centro da cidade, oferecemos proximidade e facilidade 
              de acesso aos nossos clientes, mantendo sempre o foco na qualidade 
              dos serviços prestados e no relacionamento duradouro.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="shadow-card hover:shadow-floating transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Equipe Qualificada</h4>
                </div>
                <p className="text-muted-foreground">
                  Profissionais especializados e atualizados com as melhores práticas contábeis.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">12 Anos de Experiência</h4>
                </div>
                <p className="text-muted-foreground">
                  Mais de uma década oferecendo soluções contábeis com excelência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-card hover:shadow-floating transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Localização Central</h4>
              <p className="text-muted-foreground text-sm">
                Rua Afonso Pereira da Rocha, nº 434<br />
                Centro - Garuva/SC
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Horário de Funcionamento</h4>
              <p className="text-muted-foreground text-sm">
                Segunda a Sexta<br />
                08h às 12h - 13h30 às 18h
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-floating transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">CNPJ</h4>
              <p className="text-muted-foreground text-sm">
                19.130.609/0001-03
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;