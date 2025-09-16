import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você! Entre em contato pelos nossos canais 
            ou visite nosso escritório no centro de Garuva/SC.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="shadow-card hover:shadow-floating transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Telefone</h4>
                    <p className="text-muted-foreground mb-4">+55 47 9643-0016</p>
                    <Button
                      onClick={() => window.open("https://wa.me/554796430016", "_blank")}
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      Chamar no WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">E-mail</h4>
                    <p className="text-muted-foreground mb-4">anapaula@honoratoerocha.com.br</p>
                    <Button
                      onClick={() => window.open("mailto:anapaula@honoratoerocha.com.br", "_blank")}
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      Enviar E-mail
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Endereço</h4>
                    <p className="text-muted-foreground mb-4">
                      Rua Afonso Pereira da Rocha, nº 434<br />
                      Centro - Garuva/SC
                    </p>
                    <Button
                      onClick={() => window.open("https://www.google.com/maps/place/Honorato+e+Rocha+Contabilidade/@-26.0300156,-48.8545957,17z/data=!3m1!4b1!4m6!3m5!1s0x94dc04924898b1eb:0x9230a1038124e4bb!8m2!3d-26.0300204!4d-48.8520154!16s%2Fg%2F11f03xc245?entry=ttu&g_ep=EgoyMDI1MDgyNy4wIKXMDSoASAFQAw%3D%3D", "_blank")}
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      Ver no Mapa
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta<br />
                      08h às 12h - 13h30 às 18h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-floating transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Instagram</h4>
                    <p className="text-muted-foreground mb-4">@honoratoerocha</p>
                    <Button
                      onClick={() => window.open("https://www.instagram.com/honoratoerocha/", "_blank")}
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      Seguir no Instagram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:pl-8 mt-8 lg:mt-0">
            <div className="bg-gradient-hero rounded-3xl p-6 lg:p-8 text-center shadow-floating mb-6 lg:mb-8">
              <h3 className="text-xl lg:text-2xl font-bold text-primary-foreground mb-3 lg:mb-4">
                Visite Nosso Escritório
              </h3>
              <p className="text-sm lg:text-base text-primary-foreground/90">
                Localizado no centro de Garuva/SC, oferecemos fácil acesso e estacionamento próximo.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-floating h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8742963472887!2d-48.854595700000005!3d-26.030015600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dc04924898b1eb%3A0x9230a1038124e4bb!2sHonorato%20e%20Rocha%20Contabilidade!5e0!3m2!1spt!2sbr!4v1732729200000!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Honorato e Rocha Contabilidade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;