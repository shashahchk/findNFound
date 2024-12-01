"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { users } from "../mockData";

const Chat: React.FC = () => {
  const searchParams = useSearchParams();
  const matches = searchParams.get("matches");
  const matchedUsers = matches ? JSON.parse(matches) : [];
  const router = useRouter();

  const handleUserClick = (userId: string) => {
    router.push(`/chat/${userId}`);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 ${"bg-gray-900 text-white"}`}
    >
      <div className="absolute top-4 right-4"></div>
      <h1 className="text-2xl font-bold mb-4">Matches</h1>
      <div className="w-full max-w-md mb-4">
        {matchedUsers.map((user: (typeof users)[0]) => (
          <div
            key={user.id}
            className={`p-4 border-b mb-4 cursor-pointer ${"border-gray-700"} hover:bg-gray-500 dark:hover:bg-gray-800 transition duration-300`}
            onClick={() => handleUserClick(user.id)}
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p>{user.bio}</p>
            <div className="flex mt-2 space-x-2">
              {user.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
