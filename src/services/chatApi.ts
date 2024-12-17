const BASE_URL = 'http://localhost:8000';

export interface Message {
  id: number;
  sender: number;
  content: string;
  timestamp: string;
}

export interface Chat {
  id: number;
  participants: number[];
  lastMessage?: string;
}

export interface FriendRequest {
  user1: string;
  user2: string;
  type: 'friend' | 'game';
  status: 'pending' | 'accepted' | 'declined';
}

export const chatApi = {
  getChats: async (userId: number): Promise<Chat[]> => {
    const response = await fetch(`${BASE_URL}/getchats/${userId}`);
    return response.json();
  },

  getMessages: async (chatId: number): Promise<Message[]> => {
    const response = await fetch(`${BASE_URL}/getMessages/${chatId}`);
    return response.json();
  },

  getNotifications: async (userId: number): Promise<any[]> => {
    const response = await fetch(`${BASE_URL}/getNotifications/${userId}`);
    return response.json();
  },

  inviteFriend: async (request: FriendRequest): Promise<void> => {
    await fetch(`${BASE_URL}/inviteFriend/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
  },

  acceptFriend: async (user1: string, user2: string, type: string): Promise<void> => {
    await fetch(`${BASE_URL}/acceptFriend`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user1, user2, type }),
    });
  },

  declineFriend: async (user1: string, user2: string): Promise<void> => {
    await fetch(`${BASE_URL}/declineFriend/${user1}/${user2}`, { method: 'POST' });
  },

  blockFriend: async (user1: string, user2: string): Promise<void> => {
    await fetch(`${BASE_URL}/blockFriend/${user1}/${user2}`, { method: 'POST' });
  },

  deblockFriend: async (user1: string, user2: string): Promise<void> => {
    await fetch(`${BASE_URL}/deblockFriend/${user1}/${user2}`, { method: 'POST' });
  },
};