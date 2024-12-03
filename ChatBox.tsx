import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ChatBox = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-900 rounded-lg">
        {/* Chat messages would go here */}
        <div className="text-gray-400 text-center">
          Welcome to the chat room!
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};