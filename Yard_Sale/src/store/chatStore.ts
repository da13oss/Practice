import { create } from 'zustand';
import { ChatRoom, Message } from '../types';
import io, { Socket } from 'socket.io-client';

interface ChatStore {
  chatRooms: ChatRoom[];
  activeChatRoom: ChatRoom | null;
  socket: Socket | null;
  messages: Message[];
  connectSocket: () => void;
  disconnectSocket: () => void;
  sendMessage: (content: string, roomId: string) => void;
  joinRoom: (roomId: string) => void;
  setActiveChatRoom: (room: ChatRoom) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  chatRooms: [],
  activeChatRoom: null,
  socket: null,
  messages: [],

  connectSocket: () => {
    const socket = io('YOUR_WEBSOCKET_SERVER_URL');
    
    socket.on('message', (message: Message) => {
      set((state) => ({
        messages: [...state.messages, message],
      }));
    });

    set({ socket });
  },

  disconnectSocket: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: null });
    }
  },

  sendMessage: (content: string, roomId: string) => {
    const { socket } = get();
    if (socket) {
      socket.emit('message', { content, roomId });
    }
  },

  joinRoom: (roomId: string) => {
    const { socket } = get();
    if (socket) {
      socket.emit('join-room', roomId);
    }
  },

  setActiveChatRoom: (room: ChatRoom) => {
    set({ activeChatRoom: room });
  },
}));