import { Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const friends = [
  { 
    id: 2, 
    name: "Alice Smith", 
    status: "online", 
    level: 28,
    avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=64&h=64&fit=crop&auto=format"
  },
  { 
    id: 3, 
    name: "Bob Johnson", 
    status: "offline", 
    level: 35,
    avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=64&h=64&fit=crop&auto=format"
  },
  { 
    id: 4, 
    name: "Carol White", 
    status: "online", 
    level: 42,
    avatar: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=64&h=64&fit=crop&auto=format"
  },
];

const FriendsList = () => {
  return (
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
              <Link to={`/chat/${friend.id}`}>
                <Button size="sm" variant="outline">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </Link>
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
  );
};

export default FriendsList;