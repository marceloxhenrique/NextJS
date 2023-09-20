import React from "react";
interface UserData {
  id: number;
}

export default function UserProfile({ params }: { params: UserData }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <p>{params.id}</p>
    </div>
  );
}
