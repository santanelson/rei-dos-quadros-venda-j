import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo-rei-dos-quadros.png";
import { Sparkles, Crown } from "lucide-react";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-purple-dark to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src={logo} 
              alt="Rei dos Quadros" 
              className="w-64 h-auto drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]"
            />
          </div>

          {/* Black November Badge */}
          <div className="flex justify-center animate-fade-in animation-delay-100">
            <Badge className="bg-gradient-to-r from-primary to-accent text-foreground px-6 py-2 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.5)] border-0">
              <Sparkles className="w-5 h-5 mr-2" />
              BLACK NOVEMBER - OFERTA LIMITADA
              <Sparkles className="w-5 h-5 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight animate-fade-in animation-delay-200">
            <span className="bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent drop-shadow-lg">
              Crie e Venda Quadros
            </span>
            <br />
            <span className="text-foreground">
              Personalizados Usando
            </span>
            <br />
            <span className="text-accent drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
              Apenas Seu Celular
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-secondary font-medium max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Aprenda o método completo para lucrar de casa criando quadros incríveis, 
            mesmo sem experiência ou habilidade para desenhar
          </p>

          {/* Key Benefits - Quick highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base animate-fade-in animation-delay-400">
            {[
              "✨ Comece Hoje Mesmo",
              "📱 Só Precisa do Celular",
              "🎨 +1500 Artes Prontas",
              "💰 Lucre Sem Produzir"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-card border border-primary/30 rounded-lg px-4 py-2 shadow-lg hover:shadow-primary/20 transition-all hover:scale-105"
              >
                <span className="text-foreground font-semibold">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8 animate-fade-in animation-delay-500">
            <Button 
              onClick={scrollToCTA}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-foreground text-xl px-12 py-8 rounded-2xl font-black shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] transition-all transform hover:scale-105 border-2 border-accent/50"
            >
              <Crown className="mr-3 w-7 h-7" />
              GARANTIR VAGA POR R$ 37
              <Crown className="ml-3 w-7 h-7" />
            </Button>
            <p className="text-muted-foreground mt-4 text-sm">
              🔥 Apenas durante a Black November | De R$ 97 por apenas R$ 37
            </p>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex justify-center gap-8 text-muted-foreground text-sm animate-fade-in animation-delay-600">
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl">✓</span>
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl">✓</span>
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl">✓</span>
              <span>Suporte Incluído</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
