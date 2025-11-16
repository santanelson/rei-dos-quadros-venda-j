import { Smartphone, Users, TrendingUp, Lightbulb } from "lucide-react";

const MethodPresentation = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Criação pelo Celular",
      description: "Aprenda a criar artes profissionais usando apenas aplicativos gratuitos no seu smartphone"
    },
    {
      icon: Users,
      title: "Fornecedores Confiáveis",
      description: "Descubra onde comprar quadros e materiais com os melhores preços do mercado"
    },
    {
      icon: TrendingUp,
      title: "Estratégias de Venda",
      description: "Domine as técnicas para vender todos os dias e criar demanda constante"
    },
    {
      icon: Lightbulb,
      title: "Lucre Sem Produzir",
      description: "Aprenda a intermediar vendas e lucrar sem precisar produzir nada você mesmo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-dark to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-primary to-accent text-foreground px-6 py-2 rounded-full font-bold text-sm shadow-lg">
              A SOLUÇÃO
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-foreground">Conheça o</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent">
              Método Rei dos Quadros
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            O treinamento completo que ensina você a criar e vender quadros personalizados 
            do absoluto zero, mesmo sem nenhuma experiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] group hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                  <feature.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-accent/10 to-cyan/10 border-2 border-primary/30 rounded-3xl p-10">
          <h3 className="text-3xl font-black text-center mb-8 text-foreground">
            Como Funciona?
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-foreground font-bold shadow-lg">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Aprenda a Criar</h4>
                <p className="text-muted-foreground">
                  Passo a passo simples para criar artes incríveis usando apenas seu celular
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-foreground font-bold shadow-lg">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Encontre Fornecedores</h4>
                <p className="text-muted-foreground">
                  Acesse a lista exclusiva de fornecedores baratos e confiáveis
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-foreground font-bold shadow-lg">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Venda e Lucre</h4>
                <p className="text-muted-foreground">
                  Use as estratégias comprovadas para fazer vendas todos os dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodPresentation;
