import { GamepadIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Game = () => {
  const navigate = useNavigate();

  const mockGoals = [
    { player: "Player 1", time: "2:15" },
    { player: "Player 2", time: "5:30" },
    { player: "Player 1", time: "8:45" },
  ];

  return (
    <div className="pt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
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

      <Card className="glass-card p-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <User size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold">Player 1</h3>
                <p className="text-sm text-muted-foreground">Rank #123</p>
              </div>
            </div>
            <div className="text-2xl font-bold">2</div>
          </div>

          <div className="h-px bg-border" />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <User size={24} className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold">Player 2</h3>
                <p className="text-sm text-muted-foreground">Rank #456</p>
              </div>
            </div>
            <div className="text-2xl font-bold">1</div>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h4 className="font-medium mb-2">Goals History</h4>
            <div className="space-y-2">
              {mockGoals.map((goal, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{goal.player}</span>
                  <span className="text-muted-foreground">{goal.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Game;