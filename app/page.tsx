"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LandingPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      {/* Background animation */}
      <div className="absolute inset-0 bg-black opacity-25 z-0"></div>
      <div className="absolute top-4 right-4 z-10"></div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-8 animate-fadeInDown">
          Find N Found
        </h1>
        <p className="text-xl mb-8 animate-fadeInUp">
          Join the best platform to find your ideal co-founder.
        </p>
        <button
          onClick={() => router.push("/home")}
          className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate-pulse"
        >
          Get Started
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default LandingPage;