import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">Os Segredos do Jejum</span>
          </div>
          
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Transforme sua saúde e sua vida através do poder do jejum intermitente.
          </p>

          <div className="border-t border-white/10 pt-6">
            <p className="text-white/40 text-sm flex items-center justify-center gap-1">
               © 2026 Todos os direitos reservados.
            </p>
            <p className="text-white/30 text-xs mt-2">
              Este produto não substitui a orientação de um profissional de saúde.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
