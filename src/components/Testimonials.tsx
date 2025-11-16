import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Dona de Casa",
      content: "Comecei sem saber nada, só com o celular. Em 2 semanas já tinha feito minha primeira venda. As artes prontas me ajudaram demais no início!",
      rating: 5
    },
    {
      name: "Lucas Oliveira",
      role: "Desempregado",
      content: "Estava sem trabalho e encontrei no método a solução. Hoje consigo pagar minhas contas vendendo quadros. O melhor é poder intermediar sem produzir.",
      rating: 5
    },
    {
      name: "Ana Paula",
      role: "Estudante",
      content: "Tinha medo de não saber criar, mas com o passo a passo e as artes prontas ficou muito fácil. Já estou fazendo uma renda extra boa todo mês!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quem Seguiu o Método
            </span>
            <br />
            <span className="text-foreground">Está Tendo Resultados</span>
          </h2>
          <p className="text-xl text-secondary">
            Veja o que nossos alunos estão dizendo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-8">
            <p className="text-xl font-bold text-foreground mb-4">
              Você Também Pode Ter Esses Resultados
            </p>
            <p className="text-muted-foreground">
              Não é sobre talento ou sorte. É sobre seguir o método certo, 
              no momento certo. E esse momento é agora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
