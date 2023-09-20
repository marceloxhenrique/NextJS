"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {};
  console.log(user);
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="text-black"
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      />
      <label htmlFor="email">Email</label>
      <input
        className="text-black"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="text-black"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      />
      <button onClick={onSignup} className="">
        Signup here
      </button>
      <Link href={"/login"}> Visit login page</Link>
    </div>
  );
}
