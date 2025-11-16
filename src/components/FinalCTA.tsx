import { Button } from "@/components/ui/button";
import { Crown, ArrowRight, Timer } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-purple-dark to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary rounded-full blur-[200px] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Urgency */}
          <div className="inline-flex items-center gap-2 bg-destructive text-foreground px-6 py-3 rounded-lg font-semibold text-lg mb-8">
            <Timer className="w-5 h-5" />
            ÚLTIMA CHANCE - BLACK NOVEMBER
          </div>

          {/* Main message */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-foreground">É Hora de</span>
            <br />
            <span className="text-primary">
              Transformar Sua Realidade
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Você tem duas opções: continuar na mesma situação ou dar o primeiro passo 
            para criar uma <span className="text-primary font-semibold">renda extra real</span> trabalhando de casa.
          </p>

          {/* Benefits reminder */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <p className="text-foreground font-semibold text-lg">
                Método completo + 1500 artes prontas
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-4xl mb-3">🔥</div>
              <p className="text-foreground font-semibold text-lg">
                R$ 37 só na Black November
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <p className="text-foreground font-semibold text-lg">
                Garantia total de 7 dias
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-4xl mb-3">⚡</div>
              <p className="text-foreground font-semibold text-lg">
                Comece hoje mesmo
              </p>
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-foreground text-2xl md:text-3xl px-12 md:px-20 py-10 rounded-xl font-semibold transition-all"
            >
              <Crown className="mr-3 w-7 h-7" />
              SIM, QUERO COMEÇAR AGORA
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
          </div>

          <p className="text-muted-foreground text-lg mb-4">
            💳 Pagamento 100% seguro | ⚡ Acesso imediato
          </p>

          {/* Final warning */}
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8">
            <p className="text-foreground font-semibold text-xl mb-2">
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
