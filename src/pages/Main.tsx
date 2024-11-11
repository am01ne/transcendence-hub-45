import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";
import { User42 } from "@/components/icons/User42";

const Main = () => {
  const [isLogin, setIsLogin] = useState(true);

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
          <h2 className="text-2xl font-semibold">
            {isLogin ? "Let's get you started" : "Create an account"}
          </h2>
          
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass-effect"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm text-muted-foreground">Password</label>
                {isLogin && (
                  <button type="button" className="text-sm text-blue-400 hover:underline">
                    Forgot password?
                  </button>
                )}
              </div>
              <Input
                type="password"
                placeholder="Enter your password"
                className="glass-effect"
              />
            </div>
            
            <Button className="w-full glass-button flex items-center justify-center gap-2">
              <LogIn size={20} />
              {isLogin ? "Sign In" : "Sign Up"}
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
          
          <Button
            variant="outline"
            className="w-full glass-button flex items-center justify-center gap-2"
          >
            <User42 size={20} />
            Continue with 42
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="glass-card aspect-square max-w-lg mx-auto">
          <div className="bg-neutral-900 rounded-lg aspect-[4/3] mb-4">
            {/* Game preview placeholder */}
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