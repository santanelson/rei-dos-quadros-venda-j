import { Button } from "@/components/ui/button";
import { Crown, ArrowRight, Timer } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-purple-dark to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-primary via-accent to-cyan rounded-full blur-[200px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Urgency */}
          <div className="inline-flex items-center gap-2 bg-destructive/90 text-foreground px-6 py-3 rounded-full font-black text-lg shadow-[0_0_30px_rgba(239,68,68,0.5)] animate-pulse mb-8">
            <Timer className="w-6 h-6" />
            ÚLTIMA CHANCE - BLACK NOVEMBER
          </div>

          {/* Main message */}
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-foreground">É Hora de</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-cyan bg-clip-text text-transparent">
              Transformar Sua Realidade
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Você tem duas opções: continuar na mesma situação ou dar o primeiro passo 
            para criar uma <span className="text-primary font-bold">renda extra real</span> trabalhando de casa.
          </p>

          {/* Benefits reminder */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <p className="text-foreground font-bold text-lg">
                Método completo + 1500 artes prontas
              </p>
            </div>
            <div className="bg-card border-2 border-accent/30 rounded-2xl p-6">
              <div className="text-4xl mb-3">🔥</div>
              <p className="text-foreground font-bold text-lg">
                R$ 37 só na Black November
              </p>
            </div>
            <div className="bg-card border-2 border-cyan/30 rounded-2xl p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <p className="text-foreground font-bold text-lg">
                Garantia total de 7 dias
              </p>
            </div>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6">
              <div className="text-4xl mb-3">⚡</div>
              <p className="text-foreground font-bold text-lg">
                Comece hoje mesmo
              </p>
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent via-primary to-accent hover:from-accent/90 hover:via-primary/90 hover:to-accent/90 text-foreground text-2xl md:text-3xl px-12 md:px-20 py-10 rounded-2xl font-black shadow-[0_0_60px_rgba(251,191,36,0.7)] hover:shadow-[0_0_70px_rgba(251,191,36,0.9)] transition-all transform hover:scale-105 border-2 border-accent/50 animate-pulse"
            >
              <Crown className="mr-3 w-8 h-8" />
              SIM, QUERO COMEÇAR AGORA
              <ArrowRight className="ml-3 w-8 h-8" />
            </Button>
          </div>

          <p className="text-muted-foreground text-lg mb-4">
            💳 Pagamento 100% seguro | ⚡ Acesso imediato
          </p>

          {/* Final warning */}
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-destructive/20 to-primary/20 border-2 border-destructive/50 rounded-2xl p-8">
            <p className="text-foreground font-bold text-xl mb-2">
              ⏰ Não perca esta oportunidade
            </p>
            <p className="text-muted-foreground">
              Depois da Black November, o preço volta para R$ 97,00. 
              Esta é sua chance de entrar com o menor preço do ano e começar a transformar sua vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
