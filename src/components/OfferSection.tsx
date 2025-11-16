import { Button } from "@/components/ui/button";
import { Check, Crown, Timer, Sparkles } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="offer" className="py-20 bg-gradient-to-b from-purple-dark via-background to-purple-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[180px] opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Urgency badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-destructive/90 to-primary text-foreground px-6 py-3 rounded-full font-black text-lg shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-pulse">
              <Timer className="w-6 h-6" />
              OFERTA BLACK NOVEMBER - TEMPO LIMITADO
              <Timer className="w-6 h-6" />
            </div>
          </div>

          {/* Main title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-foreground">Aproveite a</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-cyan bg-clip-text text-transparent">
                Black November
              </span>
            </h2>
            <p className="text-xl text-secondary">
              O preço mais baixo do ano. Por tempo limitado.
            </p>
          </div>

          {/* Offer card */}
          <div className="bg-gradient-to-br from-card via-purple-dark to-card border-4 border-primary rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(236,72,153,0.4)] mb-8">
            {/* Price comparison */}
            <div className="text-center mb-10">
              <div className="mb-4">
                <p className="text-muted-foreground text-lg mb-2">De:</p>
                <p className="text-4xl text-muted-foreground line-through font-bold">R$ 97,00</p>
              </div>
              <div className="mb-6">
                <p className="text-secondary text-xl mb-2">Por apenas:</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl text-muted-foreground">R$</span>
                  <span className="text-7xl md:text-8xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    37
                  </span>
                </div>
                <p className="text-accent text-2xl font-bold mt-2">
                  💰 Economia de R$ 60,00
                </p>
              </div>
              <div className="inline-block bg-primary/20 border-2 border-primary rounded-xl px-6 py-3">
                <p className="text-foreground font-bold text-lg">
                  🔥 Oferta válida APENAS durante a Black November
                </p>
              </div>
            </div>

            {/* What's included */}
            <div className="bg-background/30 rounded-2xl p-8 mb-10">
              <h3 className="text-2xl font-black text-center text-foreground mb-6">
                Você Vai Receber:
              </h3>
              <div className="space-y-4">
                {[
                  "✅ Método Rei dos Quadros Completo",
                  "🎨 +1500 Artes Profissionais Prontas",
                  "📱 Passo a Passo de Criação pelo Celular",
                  "🏭 Lista de Fornecedores Confiáveis",
                  "💰 Estratégias de Vendas Comprovadas",
                  "🤝 Técnicas para Lucrar Sem Produzir",
                  "📞 Suporte Exclusivo",
                  "✨ Atualizações Gratuitas"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-foreground text-lg"
                  >
                    <Check className="w-6 h-6 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-accent via-primary to-accent hover:from-accent/90 hover:via-primary/90 hover:to-accent/90 text-foreground text-2xl md:text-3xl px-12 md:px-20 py-10 rounded-2xl font-black shadow-[0_0_50px_rgba(251,191,36,0.7)] hover:shadow-[0_0_60px_rgba(251,191,36,0.9)] transition-all transform hover:scale-105 border-2 border-accent/50 mb-6"
              >
                <Crown className="mr-3 w-8 h-8" />
                GARANTIR MINHA VAGA POR R$ 37
                <Crown className="ml-3 w-8 h-8" />
              </Button>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Pagamento 100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan" />
                  <span>Garantia de 7 Dias</span>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-gradient-to-r from-destructive/20 to-primary/20 border-2 border-destructive/50 rounded-2xl p-6 text-center">
            <p className="text-foreground font-bold text-lg">
              ⚠️ Após a Black November, o preço volta para R$ 97,00
            </p>
            <p className="text-muted-foreground mt-2">
              Essa é sua chance de entrar com o menor preço do ano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
