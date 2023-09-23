"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    if (user.email.length > 0 && user.password.length > 0) {
      try {
        // console.log(user);
        const res = await axios.post("/api/users/login", user);
        console.log(res.data);
        toast.success("Login success");
        router.push("/profile");
      } catch (error: any) {
        toast.error(error.message);
        console.error("Log in failed", error.message);
      }
    }
  };

  return (
    <main className="flex  flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <section className="flex flex-col p-8  border border-cya-800 rounded-md ">
        <h1 className="flex justify-center text-2xl pb-4">Login</h1>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
        <button onClick={onLogin} className="button">
          Login
        </button>

        <p className="flex flex-row  justify-center mt-6">
          Don{"'"}t have an account?
          <Link href={"/signup"} className="underline text-blue-500 mx-1">
            Signup
          </Link>
        </p>
      </section>
    </main>
  );
}
