import { User, Trophy, GamepadIcon, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import StatsCard from "@/components/StatsCard";
import FriendsList from "@/components/profile/FriendsList";
import PlayersList from "@/components/profile/PlayersList";

// Hardcoded current user ID: 1
const currentUserId = 1;

const Profile = () => {
  const performanceData = [
    { month: "Jan", winRate: 65 },
    { month: "Feb", winRate: 70 },
    { month: "Mar", winRate: 68 },
    { month: "Apr", winRate: 75 },
    { month: "May", winRate: 80 },
  ];

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
                <CardTitle className="text-2xl">User {currentUserId}</CardTitle>
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
            <StatsCard
              icon={Trophy}
              iconColor="text-yellow-500"
              label="Rank"
              value="#123"
              glowColor="rgba(234,179,8,0.5)"
            />
            <StatsCard
              icon={GamepadIcon}
              iconColor="text-green-500"
              label="Games"
              value="42"
              glowColor="rgba(34,197,94,0.5)"
            />
            <StatsCard
              icon={Trophy}
              iconColor="text-purple-500"
              label="Win Rate"
              value="76%"
              glowColor="rgba(168,85,247,0.5)"
            />
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

        <div className="space-y-6">
          <FriendsList />
          <PlayersList />
        </div>
      </div>
    </div>
  );
};

export default Profile;