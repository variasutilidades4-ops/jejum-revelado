import { Shield, Clock, CreditCard, Lock, ArrowRight } from "lucide-react";

const Offer = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden" id="oferta">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Urgency banner */}
          <div className="bg-secondary text-secondary-foreground text-center py-3 px-6 rounded-t-2xl font-bold flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            OFERTA POR TEMPO LIMITADO - 50% DE DESCONTO
          </div>

          <div className="bg-white rounded-b-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Comece Sua Transformação{" "}
                <span className="text-gradient">Agora Mesmo!</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Acesso imediato a todo o conteúdo + bônus exclusivos
              </p>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-lg">
                De <span className="line-through">R$ 197,00</span> por apenas:
              </p>
              <div className="flex items-center justify-center gap-2 my-4">
                <span className="text-2xl font-bold text-foreground">12x de</span>
                <span className="text-6xl md:text-7xl font-extrabold text-gradient">R$ 4,70</span>
              </div>
              <p className="text-muted-foreground">
                ou <span className="font-bold text-foreground">R$ 47,00</span> à vista
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-8">
              <a 
                href="#" 
                className="btn-cta pulse-glow text-xl px-12 py-5 w-full md:w-auto inline-flex"
              >
                QUERO MEU ACESSO AGORA
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-sm">Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="text-sm">Cartão, Pix ou Boleto</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Garantia de 7 dias</span>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-accent rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-foreground text-lg mb-1">
                  Garantia Incondicional de 7 Dias
                </h4>
                <p className="text-muted-foreground">
                  Se você não ficar 100% satisfeito(a) com o conteúdo, devolvemos seu dinheiro 
                  integralmente. Sem perguntas, sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
