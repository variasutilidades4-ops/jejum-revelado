import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O jejum intermitente é seguro?",
    answer: "Sim! O jejum intermitente é um método natural e seguro, praticado há milhares de anos. No entanto, recomendamos que pessoas com condições médicas específicas consultem um profissional de saúde antes de iniciar."
  },
  {
    question: "Vou passar fome durante o jejum?",
    answer: "Não! No e-book você aprenderá técnicas comprovadas para controlar a fome e fazer a transição de forma gradual e confortável. A maioria das pessoas relata que a fome diminui após os primeiros dias."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "A maioria dos nossos alunos relata mudanças perceptíveis já na primeira semana, como mais energia e menos inchaço. Resultados significativos de perda de peso geralmente aparecem entre 2 a 4 semanas."
  },
  {
    question: "Posso fazer exercícios durante o jejum?",
    answer: "Sim! Inclusive, muitas pessoas relatam melhor performance nos treinos. O e-book inclui um capítulo completo sobre como otimizar seus exercícios durante o jejum."
  },
  {
    question: "Como recebo o material?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os dados de acesso à área de membros, onde poderá baixar todo o conteúdo."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito(a), basta solicitar o reembolso que devolvemos 100% do seu investimento."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Ainda Tem{" "}
            <span className="text-gradient">Dúvidas?</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-accent/50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
