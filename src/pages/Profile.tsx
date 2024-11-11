import { User, Trophy, GamepadIcon, Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="pt-8 space-y-6">
      <div className="glass-card">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">
            <User size={40} className="text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">Level 42</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card flex items-center gap-4">
          <Trophy size={24} className="text-yellow-500" />
          <div>
            <h3 className="font-medium">Rank</h3>
            <p className="text-2xl font-bold">#123</p>
          </div>
        </div>
        
        <div className="glass-card flex items-center gap-4">
          <GamepadIcon size={24} className="text-green-500" />
          <div>
            <h3 className="font-medium">Games Played</h3>
            <p className="text-2xl font-bold">42</p>
          </div>
        </div>
        
        <div className="glass-card flex items-center gap-4">
          <Settings size={24} className="text-purple-500" />
          <div>
            <h3 className="font-medium">Win Rate</h3>
            <p className="text-2xl font-bold">76%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;