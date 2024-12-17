import { Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className="text-center text-muted-foreground">
          No friends yet. Add some friends from the Players list below!
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendsList;