import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn, User42 } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass-card w-full max-w-md animate-float">
        <h1 className="text-4xl font-bold mb-8 gradient-text">
          {isLogin ? "Welcome Back" : "Join Transcendance"}
        </h1>
        
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="glass-effect"
          />
          <Input
            type="password"
            placeholder="Password"
            className="glass-effect"
          />
          
          <Button className="w-full glass-button flex items-center justify-center gap-2">
            <LogIn size={20} />
            {isLogin ? "Sign In" : "Sign Up"}
          </Button>
          
          <div className="relative my-8">
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
        </form>
        
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;