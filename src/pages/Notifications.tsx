import { Bell, Check, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Mock notifications data
const notifications = [
  {
    id: 1,
    type: "friend",
    message: "John Doe sent you a friend request",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "tournament",
    message: "New tournament starting soon!",
    timestamp: "3 hours ago",
  },
  {
    id: 3,
    type: "match",
    message: "Alice invited you to a match",
    timestamp: "5 hours ago",
  },
];

const Notifications = () => {
  const { toast } = useToast();

  const handleAction = (action: string, type: string) => {
    toast({
      title: `${action} ${type}`,
      description: `You have ${action.toLowerCase()}ed the ${type}`,
    });
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      {notifications.map((notification) => (
        <Card key={notification.id} className="w-full">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.timestamp}</p>
              </div>
              <div className="flex gap-2">
                {notification.type === "tournament" ? (
                  <Button
                    onClick={() => handleAction("Join", "tournament")}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <Trophy className="h-4 w-4 mr-2" />
                    Join
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={() => handleAction("Accept", notification.type)}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleAction("Deny", notification.type)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Notifications;