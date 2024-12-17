import { Users, UserPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { chatApi } from "@/services/chatApi";

const players = [
  { 
    id: 5, 
    name: "David Brown", 
    level: 31,
    avatar: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=64&h=64&fit=crop&auto=format"
  },
  { 
    id: 6, 
    name: "Eva Green", 
    level: 45,
    avatar: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=64&h=64&fit=crop&auto=format"
  },
  { 
    id: 7, 
    name: "Frank Black", 
    level: 38,
    avatar: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=64&h=64&fit=crop&auto=format"
  },
];

const PlayersList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleInviteFriend = async (userId: number) => {
    try {
      await chatApi.inviteFriend({
        user1: "1", // Hardcoded current user ID
        user2: userId.toString(),
        type: "friend",
        status: "pending"
      });
      toast({
        title: "Friend request sent",
        description: "Your friend request has been sent successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send friend request.",
        variant: "destructive",
      });
    }
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleInviteFriend(player.id)}
              >
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
  );
};

export default PlayersList;