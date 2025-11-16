import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Eu preciso saber desenhar?",
      answer: "Não! O método ensina tudo do zero, e você ainda recebe +1500 artes prontas para começar a vender imediatamente. Não é necessário nenhuma habilidade artística."
    },
    {
      question: "Funciona só com celular?",
      answer: "Sim! Todo o método foi criado pensando em quem tem apenas um smartphone. Você não precisa de computador, tablet ou equipamentos caros. Apenas seu celular e as orientações certas."
    },
    {
      question: "Posso vender sem produzir os quadros?",
      answer: "Sim! Uma das estratégias que você vai aprender é como intermediar vendas, ou seja, você vende mas não precisa produzir. Você aprende a encontrar fornecedores e lucrar apenas fazendo a ponte entre cliente e produtor."
    },
    {
      question: "Quanto preciso investir para começar?",
      answer: "Apenas o valor do método (R$ 37 na Black November). Você não precisa de investimento inicial em estoque, pois pode trabalhar sob demanda ou intermediando vendas. As artes já vêm prontas."
    },
    {
      question: "Depois da Black November o preço volta ao normal?",
      answer: "Sim. O preço normal do método é R$ 97,00. Essa oferta de R$ 37,00 é exclusiva da Black November e válida apenas por tempo limitado."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias para acessar todo o conteúdo, aplicar as estratégias e ver os resultados. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro, sem perguntas ou burocracia."
    },
    {
      question: "Vou ter suporte?",
      answer: "Sim! Você terá acesso a suporte exclusivo para tirar suas dúvidas e te ajudar na implementação do método."
    },
    {
      question: "Quanto tempo leva para fazer a primeira venda?",
      answer: "Depende da sua dedicação, mas muitos alunos fazem a primeira venda nas primeiras semanas. Com as artes prontas, você pode começar a vender ainda mais rápido."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-dark to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">Perguntas</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-secondary">
              Tire suas últimas dúvidas antes de começar
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 hover:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              Ainda tem dúvidas?{" "}
              <span className="text-primary font-semibold">
                Entre em contato pelo suporte
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
