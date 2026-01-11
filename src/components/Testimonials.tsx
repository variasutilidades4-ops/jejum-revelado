import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    placeholder: "Print WhatsApp 1",
    name: "Maria S.",
    result: "Perdeu 8kg em 30 dias"
  },
  {
    id: 2,
    placeholder: "Print WhatsApp 2",
    name: "João P.",
    result: "Mais energia e disposição"
  },
  {
    id: 3,
    placeholder: "Print WhatsApp 3",
    name: "Ana L.",
    result: "Controlou a ansiedade"
  },
  {
    id: 4,
    placeholder: "Print WhatsApp 4",
    name: "Carlos M.",
    result: "Baixou o colesterol"
  },
  {
    id: 5,
    placeholder: "Print WhatsApp 5",
    name: "Fernanda R.",
    result: "Perdeu 12kg em 2 meses"
  },
  {
    id: 6,
    placeholder: "Print WhatsApp 6",
    name: "Roberto A.",
    result: "Mais foco no trabalho"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 section-gradient" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageCircle className="w-4 h-4 inline mr-2" />
            DEPOIMENTOS REAIS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Veja o Que Nossos{" "}
            <span className="text-gradient-gold">Alunos Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reais de pessoas que transformaram suas vidas com o método 
            "Os Segredos do Jejum"
          </p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
          ))}
        </div>
        <p className="text-center text-muted-foreground mb-12">
          <strong className="text-foreground">4.9/5</strong> baseado em +500 avaliações
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card hover:shadow-xl transition-shadow">
              {/* WhatsApp screenshot placeholder */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl aspect-[3/4] flex flex-col items-center justify-center border-2 border-dashed border-primary/30 mb-4">
                <MessageCircle className="w-12 h-12 text-primary/40 mb-2" />
                <p className="text-primary/60 font-medium text-center px-4">
                  {testimonial.placeholder}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Adicione em src/assets
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
};

export default Testimonials;
