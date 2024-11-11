import { User, Trophy, GamepadIcon, Settings, Users, MessageSquare, UserPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";

const Profile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data with real-looking examples
  const performanceData = [
    { month: "Jan", winRate: 65 },
    { month: "Feb", winRate: 70 },
    { month: "Mar", winRate: 68 },
    { month: "Apr", winRate: 75 },
    { month: "May", winRate: 80 },
  ];

  const friends = [
    { 
      id: 1, 
      name: "Alice Smith", 
      status: "online", 
      level: 28,
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=64&h=64&fit=crop&auto=format"
    },
    { 
      id: 2, 
      name: "Bob Johnson", 
      status: "offline", 
      level: 35,
      avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=64&h=64&fit=crop&auto=format"
    },
    { 
      id: 3, 
      name: "Carol White", 
      status: "online", 
      level: 42,
      avatar: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=64&h=64&fit=crop&auto=format"
    },
  ];

  const players = [
    { 
      id: 4, 
      name: "David Brown", 
      level: 31,
      avatar: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=64&h=64&fit=crop&auto=format"
    },
    { 
      id: 5, 
      name: "Eva Green", 
      level: 45,
      avatar: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=64&h=64&fit=crop&auto=format"
    },
    { 
      id: 6, 
      name: "Frank Black", 
      level: 38,
      avatar: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=64&h=64&fit=crop&auto=format"
    },
  ];

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">
                <User size={40} className="text-blue-400" />
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

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card h-24 transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              <CardContent className="pt-4">
                <div className="flex items-center gap-4">
                  <Trophy size={24} className="text-yellow-500" />
                  <div>
                    <div className="font-medium">Rank</div>
                    <div className="text-2xl font-bold">#123</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card h-24 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              <CardContent className="pt-4">
                <div className="flex items-center gap-4">
                  <GamepadIcon size={24} className="text-green-500" />
                  <div>
                    <div className="font-medium">Games</div>
                    <div className="text-2xl font-bold">42</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card h-24 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <CardContent className="pt-4">
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

          {/* Performance Chart */}
          <Card className="glass-card">
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

        {/* Friends and Players Lists */}
        <div className="space-y-6">
          {/* Friends List */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Friends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {friends.map((friend) => (
                <div 
                  key={friend.id} 
                  className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={friend.avatar} 
                      alt={friend.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
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

          {/* Players List */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Players
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search players..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredPlayers.map((player) => (
                <div 
                  key={player.id} 
                  className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={player.avatar} 
                      alt={player.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
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