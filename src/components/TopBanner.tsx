import { Sparkles } from "lucide-react";
const TopBanner = () => {
  return <div className="fixed top-0 left-0 right-0 z-50 bg-destructive text-foreground">
      <div className="container px-4 py-3 mx-0">
        <div className="flex items-center justify-center gap-3 text-sm md:text-base font-semibold">
          <Sparkles className="w-5 h-5" />
          <span>BLACK NOVEMBER - OFERTA LIMITADA</span>
          <Sparkles className="w-5 h-5" />
        </div>
      </div>
    </div>;
};
export default TopBanner;