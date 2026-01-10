import { ArrowDown, Leaf, Timer, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Método 100% Natural</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Descubra{" "}
              <span className="font-display italic text-gradient-gold">
                Os Segredos do Jejum
              </span>
              <br />
              e Transforme Sua Vida
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl mx-auto lg:mx-0">
              O guia definitivo que já ajudou <strong>+5.000 pessoas</strong> a perderem peso, 
              aumentarem a energia e conquistarem uma saúde de ferro através do jejum intermitente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="#oferta" className="btn-cta pulse-glow">
                QUERO TRANSFORMAR MINHA VIDA
                <ArrowDown className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Quick benefits */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Timer className="w-5 h-5" />
                </div>
                <span className="text-sm">Resultados em 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm">Método comprovado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-sm">100% Natural</span>
              </div>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="flex-1 relative">
            <div className="relative floating">
              <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center p-8">
                  <img src="public/assets/capa-jejum.jpeg" alt="Capa do E-book" className="w-48 h-auto mx-auto" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl font-bold shadow-lg">
                <span className="text-2xl">-50%</span>
                <span className="text-sm block">HOJE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 29.2C384 25 480 25 576 33.3C672 41.7 768 58.3 864 62.5C960 66.7 1056 58.3 1152 50C1248 41.7 1344 33.3 1392 29.2L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
