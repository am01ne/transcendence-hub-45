import { GamepadIcon, MessageSquare } from "lucide-react";

const Game = () => {
  return (
    <div className="pt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 glass-card aspect-video flex items-center justify-center">
        <div className="text-center">
          <GamepadIcon size={48} className="mx-auto mb-4 text-blue-400" />
          <h2 className="text-2xl font-bold mb-2">Game Coming Soon</h2>
          <p className="text-muted-foreground">
            The ping pong game is under development
          </p>
        </div>
      </div>
      
      <div className="glass-card flex flex-col h-[60vh]">
        <div className="flex items-center gap-2 pb-4 border-b border-white/10">
          <MessageSquare size={20} />
          <h2 className="font-medium">Live Chat</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <p className="text-center text-muted-foreground">
            No messages yet
          </p>
        </div>
        
        <div className="pt-4 border-t border-white/10">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full glass-effect rounded-xl px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Game;