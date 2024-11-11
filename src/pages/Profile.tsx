import { User, Trophy, GamepadIcon, Settings, MessageSquare, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const performanceData = [
    { date: '2024-01', winRate: 65, playTime: 45 },
    { date: '2024-02', winRate: 70, playTime: 55 },
    { date: '2024-03', winRate: 60, playTime: 40 },
    { date: '2024-04', winRate: 75, playTime: 60 },
  ];

  const friends = [
    { id: 1, name: "Alice Smith", level: 15, avatar: "/placeholder.svg" },
    { id: 2, name: "Bob Johnson", level: 23, avatar: "/placeholder.svg" },
    { id: 3, name: "Carol White", level: 18, avatar: "/placeholder.svg" },
  ];

  return (
    <div className="pt-8 space-y-6 max-w-7xl mx-auto px-4">
      {/* Header Section */}
      <div className="glass-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">
              <User size={40} className="text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground">Level 15</p>
                <span className="text-muted-foreground">•</span>
                <p className="text-muted-foreground">41648 XP</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button variant="outline" size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Friend
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Performance Graph */}
          <Card>
            <CardHeader>
              <CardTitle>Performance History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Line type="monotone" dataKey="winRate" stroke="#3b82f6" />
                    <Line type="monotone" dataKey="playTime" stroke="#10b981" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <Trophy size={24} className="text-yellow-500 mb-2" />
                  <p className="text-sm text-muted-foreground">Global Rank</p>
                  <h3 className="text-2xl font-bold">#75</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <GamepadIcon size={24} className="text-green-500 mb-2" />
                  <p className="text-sm text-muted-foreground">Games Played</p>
                  <h3 className="text-2xl font-bold">142</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <Trophy size={24} className="text-purple-500 mb-2" />
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                  <h3 className="text-2xl font-bold">76%</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <Settings size={24} className="text-blue-500 mb-2" />
                  <p className="text-sm text-muted-foreground">Level Progress</p>
                  <Progress value={65} className="mt-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Friends List */}
        <Card className="hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
          <CardHeader>
            <CardTitle>Friends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {friends.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={friend.avatar} />
                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{friend.name}</p>
                      <p className="text-sm text-muted-foreground">Level {friend.level}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;