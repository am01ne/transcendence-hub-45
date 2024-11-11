import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { User42 } from "@/components/icons/User42";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto px-4">
        <h1 className="text-6xl font-bold gradient-text">
          Welcome to Transcendence
        </h1>
        <p className="text-xl text-muted-foreground">
          Experience the ultimate ping pong game with friends. Challenge players,
          climb the leaderboard, and chat in real-time.
        </p>
      </div>

      <div className="glass-card w-full max-w-md animate-float">
        <div className="space-y-4">
          <Link to="/auth">
            <Button className="w-full glass-button flex items-center justify-center gap-2">
              <LogIn size={20} />
              Sign In
            </Button>
          </Link>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <Button
            variant="outline"
            className="w-full glass-button flex items-center justify-center gap-2"
          >
            <User42 size={20} />
            Continue with 42
          </Button>
        </div>
      </div>

      <div className="glass-card grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-2">Real-time Gameplay</h3>
          <p className="text-muted-foreground">
            Experience smooth, lag-free ping pong matches
          </p>
        </div>
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-2">Global Leaderboard</h3>
          <p className="text-muted-foreground">
            Compete and rank among the best players
          </p>
        </div>
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
          <p className="text-muted-foreground">
            Connect with players in real-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;