import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent md:hidden">
      <a 
        href="#oferta" 
        className="btn-cta w-full justify-center text-base"
      >
        GARANTIR MINHA PROMOÇÃO
        <ArrowUp className="w-5 h-5 ml-2" />
      </a>
    </div>
  );
};

export default FloatingCTA;
