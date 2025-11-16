import { Check, Zap, Home, Palette, Rocket, DollarSign, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Comece Hoje Mesmo",
      description: "Acesso imediato após a compra. Em minutos você já está aprendendo"
    },
    {
      icon: Palette,
      title: "100% Para Iniciantes",
      description: "Não precisa saber desenhar, ter experiência ou conhecimento técnico"
    },
    {
      icon: Home,
      title: "Trabalhe de Casa",
      description: "Crie sua renda extra sem sair do conforto do seu lar"
    },
    {
      icon: Rocket,
      title: "+1500 Artes Prontas",
      description: "Comece vendendo imediatamente com nosso banco gigante de artes"
    },
    {
      icon: DollarSign,
      title: "Lucre Sem Produzir",
      description: "Aprenda a intermediar vendas e ganhar sem precisar fazer os quadros"
    },
    {
      icon: Clock,
      title: "No Seu Ritmo",
      description: "Estude quando quiser, de onde estiver, sem pressa"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-foreground">Por Que o Método</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Rei dos Quadros Funciona?
            </span>
          </h2>
          <p className="text-xl text-secondary">
            Tudo que você precisa para começar a lucrar de verdade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] group hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-card to-purple-dark border-2 border-accent/50 rounded-3xl p-10 shadow-[0_0_40px_rgba(251,191,36,0.2)]">
            <div className="flex items-center justify-center mb-6">
              <Check className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-3xl font-black text-center mb-6 text-foreground">
              Resultado Garantido
            </h3>
            <p className="text-xl text-center text-muted-foreground mb-6 leading-relaxed">
              Seguindo o método passo a passo, você terá tudo que precisa para fazer suas primeiras vendas. 
              Não é sobre talento, é sobre seguir o sistema certo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-foreground">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <Check className="w-5 h-5 text-accent" />
                <span className="font-semibold">Sistema Testado</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <Check className="w-5 h-5 text-accent" />
                <span className="font-semibold">Suporte Incluído</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <Check className="w-5 h-5 text-accent" />
                <span className="font-semibold">Garantia Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
