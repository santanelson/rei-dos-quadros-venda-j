import { Shield, Check } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card via-purple-dark to-card border-4 border-accent rounded-3xl p-10 md:p-14 shadow-[0_0_50px_rgba(251,191,36,0.3)]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.5)]">
                  <Shield className="w-16 h-16 text-foreground" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  Garantia Incondicional de{" "}
                  <span className="text-accent">7 Dias</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Você tem <span className="text-primary font-bold">7 dias completos</span> para 
                  acessar o método, testar as estratégias e ver os resultados. Se por qualquer motivo 
                  você não ficar satisfeito, devolvemos{" "}
                  <span className="text-accent font-bold">100% do seu dinheiro</span>.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-foreground">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">
                      Sem perguntas, sem burocracia
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-foreground">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">
                      Devolução rápida e garantida
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-foreground">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">
                      Você não tem nada a perder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-secondary">
              O risco é <span className="text-accent font-bold">zero</span>. 
              A oportunidade é <span className="text-primary font-bold">real</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
