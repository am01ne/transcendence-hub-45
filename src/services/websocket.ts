export class ChatWebSocket {
  private ws: WebSocket | null = null;
  private messageHandlers: ((message: any) => void)[] = [];

  constructor(userId: number, roomId: number) {
    this.connect(userId, roomId);
  }

  private connect(userId: number, roomId: number) {
    this.ws = new WebSocket(`ws://localhost:8000/ws/chat/${userId.toString()}/${roomId.toString()}/`);
    
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.messageHandlers.forEach(handler => handler(data));
    };

    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
      // Attempt to reconnect after 5 seconds
      setTimeout(() => this.connect(userId, roomId), 5000);
    };
  }

  public sendMessage(message: string) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ message }));
    }
  }

  public onMessage(handler: (message: any) => void) {
    this.messageHandlers.push(handler);
  }

  public disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}