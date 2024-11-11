import { GamepadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-8">
      <div className="glass-card aspect-video flex items-center justify-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="text-center relative z-10">
          <GamepadIcon size={48} className="mx-auto mb-4 text-blue-400 animate-float" />
          <h2 className="text-2xl font-bold mb-2 gradient-text">Game Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            The ping pong game is under development
          </p>
          <Button 
            className="glass-button group-hover:scale-110 transition-transform duration-300"
            onClick={() => navigate("/chat")}
          >
            Find Players
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Game;