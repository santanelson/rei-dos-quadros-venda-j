import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-rei-dos-quadros-sem-fundo.png";
import { Crown } from "lucide-react";
const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById("offer")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-purple-dark to-background pt-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 relative z-10 mx-0 my-0 py-0">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <img src={logo} alt="Rei dos Quadros" className="w-80 h-auto" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
            <span className="text-foreground">
              Crie e Venda Quadros
            </span>
            <br />
            <span className="text-foreground">
              Personalizados Usando
            </span>
            <br />
            <span className="text-primary">
              Apenas Seu Celular
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Aprenda o método completo para lucrar de casa criando quadros incríveis, 
            mesmo sem experiência ou habilidade para desenhar
          </p>

          {/* Key Benefits - Quick highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base animate-fade-in animation-delay-400">
            {["✨ Comece Hoje Mesmo", "📱 Só Precisa do Celular", "🎨 +1500 Artes Prontas", "💰 Lucre Sem Produzir"].map((benefit, index) => <div key={index} className="bg-card border border-border rounded-lg px-4 py-2 transition-all hover:border-primary">
                <span className="text-foreground font-medium">{benefit}</span>
              </div>)}
          </div>

          {/* CTA Button */}
          <div className="pt-8 animate-fade-in animation-delay-500">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-foreground text-xl px-12 py-8 rounded-xl font-semibold transition-all">
              <a href="https://pay.kiwify.com.br/6XXV6m1" target="_blank" rel="noopener noreferrer">
                <Crown className="mr-3 w-6 h-6" />
                GARANTIR VAGA POR R$ 37
                <Crown className="ml-3 w-6 h-6" />
              </a>
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
    </section>;
};
export default Hero;