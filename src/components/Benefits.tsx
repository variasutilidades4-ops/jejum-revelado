import { Zap, Brain, Scale, Heart, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Perda de Peso Acelerada",
    description: "Queime gordura de forma natural e eficiente, sem dietas restritivas ou passar fome."
  },
  {
    icon: Brain,
    title: "Clareza Mental",
    description: "Melhore seu foco, concentração e produtividade com um cérebro mais ativo."
  },
  {
    icon: Zap,
    title: "Energia Duradoura",
    description: "Diga adeus ao cansaço! Tenha energia constante durante todo o dia."
  },
  {
    icon: Heart,
    title: "Saúde do Coração",
    description: "Melhore seus níveis de colesterol e pressão arterial naturalmente."
  },
  {
    icon: Clock,
    title: "Longevidade",
    description: "Ative os genes da longevidade e retarde o envelhecimento celular."
  },
  {
    icon: Shield,
    title: "Sistema Imunológico",
    description: "Fortaleça suas defesas naturais e fique menos doente."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            BENEFÍCIOS COMPROVADOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Por Que o Jejum{" "}
            <span className="text-gradient">Funciona?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milhares de estudos científicos comprovam os benefícios do jejum intermitente 
            para sua saúde física e mental e eu sou a prova viva de que isso funciona MUITO!!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card-benefit group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
