import { Gift, Sparkles, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import packArtes from "@/assets/pack-artes.png";

const BonusSection = () => {
  const scrollToCTA = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-purple-dark to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[140px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-primary text-foreground px-6 py-3 rounded-full font-black text-lg mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
              <Gift className="w-6 h-6" />
              BÔNUS EXCLUSIVO
              <Gift className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-foreground">Mais de</span>{" "}
              <span className="bg-gradient-to-r from-accent via-primary to-cyan bg-clip-text text-transparent">
                1500 Artes Prontas
              </span>
              <br />
              <span className="text-foreground">Para Você Vender Hoje!</span>
            </h2>
          </div>

          {/* Main Bonus Card */}
          <div className="bg-gradient-to-br from-card via-purple-dark to-card border-4 border-accent rounded-3xl p-10 md:p-14 shadow-[0_0_50px_rgba(251,191,36,0.3)] mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={packArtes} 
                  alt="Pack de 1500 Artes para Quadros" 
                  className="w-64 h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  Pacote Completo de Artes
                </h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Mais de <span className="text-accent font-bold">1500 artes profissionais</span> prontas 
                  para você começar a vender <span className="text-primary font-bold">imediatamente</span>. 
                  Não precisa esperar aprender a criar, você já pode lucrar no primeiro dia!
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-semibold">Alta Qualidade</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-semibold">Diversos Temas</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 px-4 py-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-cyan" />
                    <span className="text-foreground font-semibold">Pronto para Uso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits of the bonus */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-accent/30 rounded-2xl p-6 text-center hover:border-accent/60 transition-all">
              <div className="text-4xl font-black text-accent mb-2">⚡</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Acelera Resultados</h4>
              <p className="text-sm text-muted-foreground">
                Comece a vender hoje mesmo sem esperar aprender a criar artes
              </p>
            </div>
            <div className="bg-card border border-primary/30 rounded-2xl p-6 text-center hover:border-primary/60 transition-all">
              <div className="text-4xl font-black text-primary mb-2">🎯</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Elimina Bloqueios</h4>
              <p className="text-sm text-muted-foreground">
                Não precisa se preocupar em não saber desenhar ou criar
              </p>
            </div>
            <div className="bg-card border border-cyan/30 rounded-2xl p-6 text-center hover:border-cyan/60 transition-all">
              <div className="text-4xl font-black text-cyan mb-2">💰</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Lucro Imediato</h4>
              <p className="text-sm text-muted-foreground">
                Possibilidade real de fazer sua primeira venda nas próximas horas
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-foreground text-2xl px-16 py-8 rounded-2xl font-black shadow-[0_0_40px_rgba(251,191,36,0.6)] hover:shadow-[0_0_50px_rgba(251,191,36,0.8)] transition-all transform hover:scale-105"
            >
              <a href="https://pay.kiwify.com.br/6XXV6m1" target="_blank" rel="noopener noreferrer">
                QUERO AS 1500 ARTES AGORA
              </a>
            </Button>
            <p className="text-muted-foreground mt-4">
              + Método completo + Suporte + Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
