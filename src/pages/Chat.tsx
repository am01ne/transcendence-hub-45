import { useState } from "react";
import { User, Send } from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="pt-8 grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-8rem)]">
      <div className="glass-card lg:col-span-1 overflow-y-auto">
        <h2 className="font-medium mb-4">Online Users</h2>
        {[1, 2, 3].map((user) => (
          <div
            key={user}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <User size={20} className="text-blue-400" />
            </div>
            <div>
              <p className="font-medium">User {user}</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass-card lg:col-span-3 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          <p className="text-center text-muted-foreground">
            Start a conversation
          </p>
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 glass-effect rounded-xl px-4 py-2"
          />
          <button className="glass-button">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;