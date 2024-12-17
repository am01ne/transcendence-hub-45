import { Bell, Check, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { chatApi } from "@/services/chatApi";

const Notifications = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const currentUserId = 1; // Hardcoded current user ID

  // Fetch notifications
  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications', currentUserId],
    queryFn: () => chatApi.getNotifications(currentUserId),
  });

  // Accept friend/game request mutation
  const acceptMutation = useMutation({
    mutationFn: ({ user1, user2, type }: { user1: number, user2: number, type: string }) => 
      chatApi.acceptFriend(user1, user2, type),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      toast({
        title: "Request accepted",
        description: "The request has been accepted successfully",
      });
    },
  });

  // Decline friend/game request mutation
  const declineMutation = useMutation({
    mutationFn: (user2: number) => chatApi.declineFriend(currentUserId, user2),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      toast({
        title: "Request declined",
        description: "The request has been declined",
      });
    },
  });

  const handleAction = (action: "accept" | "decline", notification: any) => {
    if (action === "accept") {
      acceptMutation.mutate({
        user1: currentUserId,
        user2: notification.sender,
        type: notification.type,
      });
    } else {
      declineMutation.mutate(notification.sender);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      {notifications?.map((notification: any) => (
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
                    onClick={() => handleAction("accept", notification)}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <Trophy className="h-4 w-4 mr-2" />
                    Join
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={() => handleAction("accept", notification)}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleAction("decline", notification)}
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