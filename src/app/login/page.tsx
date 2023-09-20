"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};
  console.log(user);
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      {/* <hr /> */}

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
      <button onClick={onLogin} className="">
        Login here
      </button>
      <Link href={"/signup"}> Visit Signup</Link>
    </div>
  );
}
