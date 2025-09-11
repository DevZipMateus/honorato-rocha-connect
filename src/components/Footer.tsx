import { Phone, Mail, MapPin, Instagram, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 lg:mb-6">
              <img
                src="/lovable-uploads/8ebe353a-d59e-4949-93cc-46caf2d026d3.png"
                alt="Honorato e Rocha Contabilidade"
                className="h-12 lg:h-16 w-auto mr-4 bg-white/10 p-2 rounded-lg"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Escritório de contabilidade com 12 anos de experiência em Garuva/SC. 
              Oferecemos serviços contábeis completos com qualidade e confiança.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/honoratoerocha/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">(47) 99748-0033</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 break-all">
                    anapaula@honoratoerocha.com.br
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Rua Afonso Pereira da Rocha, nº 434<br />
                    Centro - Garuva/SC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informações</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Building2 className="h-5 w-5 text-accent-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    CNPJ: 19.130.609/0001-03
                  </p>
                </div>
              </div>
              <div>
                <p className="text-primary-foreground/80 font-medium mb-2">
                  Horário de Funcionamento:
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Segunda a Sexta<br />
                  08h às 12h - 13h30 às 18h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Honorato e Rocha Contabilidade. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              12 anos de experiência em contabilidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;