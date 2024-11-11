import { User, Trophy, GamepadIcon, Settings, Users, MessageSquare, UserPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Input } from "@/components/ui/input";

const Profile = () => {
  const performanceData = [
    { month: "Jan", winRate: 65 },
    { month: "Feb", winRate: 70 },
    { month: "Mar", winRate: 68 },
    { month: "Apr", winRate: 75 },
    { month: "May", winRate: 80 },
  ];

  const friends = [
    { id: 1, name: "Alice Smith", status: "online", level: 28, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    { id: 2, name: "Bob Johnson", status: "offline", level: 35, avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" },
    { id: 3, name: "Carol White", status: "online", level: 42, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
  ];

  const players = [
    { id: 4, name: "David Brown", level: 31, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
    { id: 5, name: "Eva Green", level: 45, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
    { id: 6, name: "Frank Black", level: 38, avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12" },
  ];

  return (
    <div className="pt-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] max-w-2xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <CardTitle className="text-2xl">John Doe</CardTitle>
                <div className="text-muted-foreground">Level 42</div>
                <div className="text-muted-foreground">Rank #123</div>
              </div>
              <Link to="/settings" className="ml-auto">
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] max-w-xs">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Trophy size={24} className="text-yellow-500" />
                  <div>
                    <div className="font-medium">Rank</div>
                    <div className="text-2xl font-bold">#123</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] max-w-xs">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <GamepadIcon size={24} className="text-green-500" />
                  <div>
                    <div className="font-medium">Games</div>
                    <div className="text-2xl font-bold">42</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] max-w-xs">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Trophy size={24} className="text-purple-500" />
                  <div>
                    <div className="font-medium">Win Rate</div>
                    <div className="text-2xl font-bold">76%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card max-w-2xl">
            <CardHeader>
              <CardTitle>Performance History</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]" config={{ winRate: { color: "#3b82f6" } }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip />
                    <Line type="monotone" dataKey="winRate" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Friends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {friends.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium">{friend.name}</div>
                      <div className="text-sm text-muted-foreground">Level {friend.level}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Link to={`/profile/${friend.id}`}>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Players
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search players..." className="pl-9" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {players.map((player) => (
                <div key={player.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium">{player.name}</div>
                      <div className="text-sm text-muted-foreground">Level {player.level}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <UserPlus className="h-4 w-4" />
                    </Button>
                    <Link to={`/profile/${player.id}`}>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
