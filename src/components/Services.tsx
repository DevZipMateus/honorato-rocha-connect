import { Calculator, FileText, Users, CreditCard, Building, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Empresarial",
      description: "Escrituração contábil completa para empresas de todos os regimes tributários: Simples Nacional, Lucro Presumido e Lucro Real.",
      features: ["Balanços e demonstrações", "Conciliações bancárias", "Controle patrimonial", "Relatórios gerenciais"]
    },
    {
      icon: FileText,
      title: "Assessoria Empresarial",
      description: "Consultoria especializada para tomada de decisões estratégicas e crescimento sustentável do seu negócio.",
      features: ["Planejamento tributário", "Consultoria fiscal", "Orientação empresarial", "Análise de viabilidade"]
    },
    {
      icon: Users,
      title: "Regularização de CPF",
      description: "Atendimento a pessoas físicas para regularização de CPF com pendências na Receita Federal.",
      features: ["Análise de pendências", "Regularização de situação", "Orientação fiscal PF", "Acompanhamento processual"]
    },
    {
      icon: CreditCard,
      title: "Contratos e Documentos",
      description: "Elaboração de contratos em geral, recibos e declarações com segurança jurídica.",
      features: ["Contratos comerciais", "Recibos diversos", "Declarações", "Documentação legal"]
    },
    {
      icon: Building,
      title: "Abertura de Empresas",
      description: "Processo completo de abertura de empresas com agilidade e segurança em todos os órgãos.",
      features: ["Registro na Junta Comercial", "Inscrição Municipal", "Licenças necessárias", "Orientação inicial"]
    },
    {
      icon: Shield,
      title: "Compliance Fiscal",
      description: "Garantia de conformidade com todas as obrigações fiscais e tributárias vigentes.",
      features: ["Obrigações acessórias", "Cumprimento de prazos", "Atualização legislativa", "Auditoria preventiva"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços contábeis e empresariais 
            para atender todas as necessidades do seu negócio com excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-floating transition-all duration-300 group border-0 bg-gradient-to-br from-card to-card/50"
              >
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center shadow-floating">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Precisa de Ajuda Contábil?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a crescer com segurança fiscal e estratégia contábil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open("https://wa.me/5547997480033", "_blank")}
              size="lg"
              variant="hero"
            >
              Falar no WhatsApp
            </Button>
            <Button
              onClick={() => window.open("mailto:anapaula@honoratoerocha.com.br", "_blank")}
              variant="outline"
              size="lg"
              className="border-white/20 text-primary-foreground hover:bg-white/10"
            >
              Enviar E-mail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;