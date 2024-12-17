import { useState, useEffect, useRef } from "react";
import { User, Send, Ban, UserPlus, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { chatApi } from "@/services/chatApi";
import { ChatWebSocket } from "@/services/websocket";
import { useQuery } from "@tanstack/react-query";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const wsRef = useRef<ChatWebSocket | null>(null);
  const { toast } = useToast();
  
  // Mock current user ID - replace with actual user authentication
  const currentUserId = 1;

  const { data: chats = [] } = useQuery({
    queryKey: ['chats', currentUserId],
    queryFn: () => chatApi.getChats(currentUserId),
  });

  const { data: chatMessages = [] } = useQuery({
    queryKey: ['messages', selectedChat],
    queryFn: () => selectedChat ? chatApi.getMessages(selectedChat) : Promise.resolve([]),
    enabled: !!selectedChat,
  });

  useEffect(() => {
    if (selectedChat) {
      wsRef.current = new ChatWebSocket(
        currentUserId,
        selectedChat
      );

      wsRef.current.onMessage((data) => {
        setMessages(prev => [...prev, data]);
      });

      return () => {
        wsRef.current?.disconnect();
      };
    }
  }, [selectedChat]);

  const sendMessage = () => {
    if (!message.trim() || !wsRef.current) return;
    
    wsRef.current.sendMessage(message);
    setMessage("");
  };

  const handleInviteFriend = async (userId: number) => {
    try {
      await chatApi.inviteFriend({
        user1: currentUserId,
        user2: userId,
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

  return (
    <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
      <div className="glass-card lg:col-span-3 overflow-y-auto">
        <h2 className="font-medium mb-4">Chats</h2>
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat.id)}
            className={`flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer ${
              selectedChat === chat.id ? 'bg-white/10' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <User size={20} className="text-blue-400" />
            </div>
            <div>
              <p className="font-medium">Chat {chat.id}</p>
              <p className="text-xs text-muted-foreground">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass-card lg:col-span-6 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4">
          {selectedChat ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === currentUserId ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-xl ${
                    msg.sender === currentUserId
                      ? 'bg-blue-500/20 ml-auto'
                      : 'bg-gray-500/20'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              Select a chat to start messaging
            </p>
          )}
        </div>
        
        {selectedChat && (
          <div className="flex gap-2 p-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 glass-effect rounded-xl px-4 py-2"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button onClick={sendMessage} className="glass-button">
              <Send size={20} />
            </Button>
          </div>
        )}
      </div>

      <Card className="glass-card lg:col-span-3 p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center">
            <User size={40} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-sm text-muted-foreground">Online • Rank #42</p>
          
          <div className="w-full space-y-2 mt-4">
            <Button 
              className="w-full glass-button flex items-center gap-2"
              onClick={() => handleInviteFriend(2)}
            >
              <Target size={16} />
              Challenge to Match
            </Button>
            <Button 
              className="w-full glass-button flex items-center gap-2"
              onClick={() => handleInviteFriend(2)}
            >
              <UserPlus size={16} />
              Add Friend
            </Button>
            <Button 
              variant="destructive" 
              className="w-full flex items-center gap-2"
              onClick={() => chatApi.blockFriend(currentUserId, 2)}
            >
              <Ban size={16} />
              Block User
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Chat;