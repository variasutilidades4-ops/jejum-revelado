import { Check, BookOpen, Video, FileText, Gift } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "E-book Completo",
    description: "Guia passo a passo com tudo sobre jejum intermitente",
    value: "R$ 97"
  },
  {
    icon: Video,
    title: "Vídeo-aulas Exclusivas",
    description: "Aulas práticas para você aplicar o método",
    value: "R$ 197"
  },
  {
    icon: FileText,
    title: "Plano Alimentar de 30 Dias",
    description: "Cardápio completo para potencializar seus resultados",
    value: "R$ 67"
  },
  {
    icon: Gift,
    title: "Bônus: Receitas Fit",
    description: "50 receitas deliciosas para sua nova rotina",
    value: "R$ 47"
  }
];

const WhatYouGet = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CONTEÚDO COMPLETO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Veja Tudo Que Você{" "}
            <span className="text-gradient">Vai Receber</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-accent/50 to-transparent border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-muted-foreground line-through text-sm">{item.value}</span>
                <div className="flex items-center text-primary">
                  <Check className="w-5 h-5 mr-1" />
                  <span className="font-bold">INCLUSO</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-secondary/10 rounded-2xl p-6">
            <p className="text-muted-foreground mb-2">Valor total:</p>
            <p className="text-2xl font-bold text-muted-foreground line-through">R$ 408,00</p>
            <p className="text-lg text-foreground font-medium mt-2">
              Por apenas <span className="text-4xl font-extrabold text-gradient-gold">R$ 47</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
