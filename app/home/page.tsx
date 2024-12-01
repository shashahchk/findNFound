"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "../mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Home: React.FC = () => {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [matches, setMatches] = useState<typeof users>([]);
  const [swipeAnimation, setSwipeAnimation] = useState("");
  const router = useRouter();

  const handleSwipeRight = () => {
    setSwipeAnimation("animate-swipeRight");
    setTimeout(() => {
      setMatches([...matches, users[currentUserIndex]]);
      setCurrentUserIndex(currentUserIndex + 1);
      setSwipeAnimation("");
    }, 500);
  };

  const handleSwipeLeft = () => {
    setSwipeAnimation("animate-swipeLeft");
    setTimeout(() => {
      setCurrentUserIndex(currentUserIndex + 1);
      setSwipeAnimation("");
    }, 500);
  };

  if (currentUserIndex >= users.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
          No more users
        </h1>
        <button
          onClick={() =>
            router.push(
              `/chat?matches=${encodeURIComponent(JSON.stringify(matches))}`
            )
          }
          className="bg-blue-500 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition duration-300 animate__animated animate__pulse"
        >
          View Matches
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
      <div
        className={`w-32 h-32 rounded-full mb-4 border-4 border-gray-700 ${swipeAnimation}`}
      >
        <img
          src={users[currentUserIndex].profilePicture}
          alt={`${users[currentUserIndex].name} profile`}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
        {users[currentUserIndex].name}
      </h1>
      <p className="mb-4 text-xl animate__animated animate__fadeIn">
        {users[currentUserIndex].bio}
      </p>
      <div className="flex mb-4 space-x-2 animate__animated animate__fadeIn">
        {users[currentUserIndex].tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="w-64 h-64 mb-4 animate__animated animate__fadeIn">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
        >
          {users[currentUserIndex].images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleSwipeLeft}
          className="bg-red-500 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition duration-300"
        >
          Swipe Left
        </button>
        <button
          onClick={handleSwipeRight}
          className="bg-green-500 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition duration-300"
        >
          Swipe Right
        </button>
      </div>
    </div>
  );
};

export default Home;
