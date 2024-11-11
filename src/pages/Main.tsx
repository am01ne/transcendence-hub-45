import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";
import { User42 } from "@/components/icons/User42";
import { toast } from "sonner";

const Main = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Welcome back!");
    navigate("/game");
  };

  const handleTestAccount = () => {
    toast.success("Logged in as test user");
    navigate("/game");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold gradient-text">
            Welcome to Pinger
          </h1>
          <p className="text-xl text-muted-foreground">
            Experience the thrill of Ping Pong right from your device.
            With intuitive controls and realistic physics.
          </p>
        </div>

        <div className="glass-card space-y-6">
          <h2 className="text-2xl font-semibold">Let's get you started</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Email</label>
              <Input
                type="email"
                defaultValue="test@example.com"
                className="glass-effect"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm text-muted-foreground">Password</label>
                <button type="button" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </button>
              </div>
              <Input
                type="password"
                defaultValue="password"
                className="glass-effect"
              />
            </div>
            
            <Button className="w-full glass-button flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <LogIn size={20} />
              Sign In
            </Button>
          </form>
          
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
          
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full glass-button flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
              onClick={() => handleTestAccount()}
            >
              <User42 size={20} />
              Use Test Account
            </Button>
            
            <Button
              variant="outline"
              className="w-full glass-button flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <User42 size={20} />
              Continue with 42
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="glass-card aspect-square max-w-lg mx-auto">
          <div className="bg-neutral-900 rounded-lg aspect-[4/3] mb-4 relative overflow-hidden group">
            {/* Game field */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-dashed border-2 border-white/10 flex">
                {/* Center line */}
                <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-white/10"></div>
                
                {/* Paddles */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-white rounded-full animate-float"></div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-white rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
                
                {/* Ball */}
                <div className="absolute w-3 h-3 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "0.25s" }}></div>
                
                {/* Score */}
                <div className="absolute top-4 left-0 right-0 flex justify-center gap-8 text-2xl font-mono">
                  <span className="text-white/80">0</span>
                  <span className="text-white/80">0</span>
                </div>
              </div>
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
              <p className="text-sm text-white/80">Click to start playing</p>
            </div>
          </div>
          <h3 className="text-2xl font-mono mb-2">Ping Pong</h3>
          <p className="text-muted-foreground">
            Challenge players worldwide in real-time matches.
            Climb the leaderboard and become the ultimate champion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;