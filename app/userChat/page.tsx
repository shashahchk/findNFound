"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { users } from "../mockData";

const UserChat: React.FC = () => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === userId);
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  if (!user) {
    return <div>User not found</div>;
  }

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Chat with {user.name}</h1>
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-4">
        <div className="h-64 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">{message.user}: </span>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l-lg p-2"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserChat;