"use client";
import React from "react";
import axios from "axios";

export default function ProfilePage() {
  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/users/logout");
      console.log(res);
    } catch (error) {
      console.error("here", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <p>Profile page</p>
      <button
        onClick={handleLogout}
        className="bg-gray-500 py-2 px-4 rounded-md hover:bg-gray-400"
      >
        Log out
      </button>
    </div>
  );
}
