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
        <div className="space-y-4 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <div className="relative">
            <h1 className="text-6xl font-bold gradient-text animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[200%_auto] duration-1000">
              Welcome to Pinger
            </h1>
            <p className="text-xl text-muted-foreground mt-4 transform transition-all duration-500 group-hover:translate-x-2">
              Experience the thrill of Ping Pong right from your device.
              With intuitive controls and realistic physics.
            </p>
          </div>
        </div>

        <div className="glass-card space-y-6 relative group hover:shadow-[0_0_2rem_0_rgba(59,130,246,0.2)] transition-all duration-500">
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h2 className="text-2xl font-semibold transform transition-all duration-300 group-hover:translate-y-[-2px]">
            {isLogin ? "Let's get you started" : "Create an account"}
          </h2>
          
          <form className="space-y-4">
            <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
              <label className="text-sm text-muted-foreground">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass-effect focus:ring-2 ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            <div className="space-y-2 transform transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex justify-between">
                <label className="text-sm text-muted-foreground">Password</label>
                {isLogin && (
                  <button type="button" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Forgot password?
                  </button>
                )}
              </div>
              <Input
                type="password"
                placeholder="Enter your password"
                className="glass-effect focus:ring-2 ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            <Button className="w-full glass-button flex items-center justify-center gap-2 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <LogIn size={20} className="transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">{isLogin ? "Sign In" : "Sign Up"}</span>
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
            className="w-full glass-button flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <User42 size={20} className="transform group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">Continue with 42</span>
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="glass-card aspect-square max-w-lg mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_3rem_0_rgba(59,130,246,0.3)]">
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
              <p className="text-sm text-white/80 transform transition-all duration-500 group-hover:translate-y-[-0.5rem]">
                Click to start playing
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-mono mb-2 transform transition-all duration-300 group-hover:translate-x-2">Ping Pong</h3>
          <p className="text-muted-foreground transform transition-all duration-300 group-hover:translate-x-2">
            Challenge players worldwide in real-time matches.
            Climb the leaderboard and become the ultimate champion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;