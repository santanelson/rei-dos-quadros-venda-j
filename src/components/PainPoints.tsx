import { AlertCircle } from "lucide-react";

const PainPoints = () => {
  const pains = [
    {
      title: "Contas se Acumulando",
      description: "O dinheiro não chega e as contas só aumentam. Você precisa de uma renda extra urgente."
    },
    {
      title: "Preso em Casa",
      description: "Quer trabalhar de casa mas não sabe por onde começar ou o que fazer."
    },
    {
      title: "Sem Habilidades Artísticas",
      description: "Tem medo de não saber criar artes bonitas ou desenhar bem."
    },
    {
      title: "Falta de Oportunidades",
      description: "Cansado de ver oportunidades que nunca dão certo ou exigem investimento alto."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-foreground">Você Está Cansado de</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Passar por Isso?
            </span>
          </h2>
          <p className="text-xl text-secondary">
            Conheço bem essa sensação. Mas existe uma saída.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pains.map((pain, index) => (
            <div 
              key={index}
              className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-primary group-hover:animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-foreground mb-2">{pain.title}</h3>
                  <p className="text-muted-foreground">{pain.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-8">
            <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
              E se eu te disser que existe um método simples, que você pode começar{" "}
              <span className="text-accent">hoje mesmo</span>, usando apenas seu{" "}
              <span className="text-primary">celular</span>, para criar uma{" "}
              <span className="text-cyan">renda extra real</span>?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
