import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    path: "assets/dep-1.png"
  },
  {
    id: 2,
    path: "assets/dep-2.png"
  },
  {
    id: 3,
    path: "assets/dep-3.png"
  },
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
              {/* Container com posição relativa e overflow escondido */}
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 rounded-xl aspect-[3/4] border-2 border-dashed border-primary/30 mb-4">
                <img
                  src={testimonial.path}
                  alt="depoimentos"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
