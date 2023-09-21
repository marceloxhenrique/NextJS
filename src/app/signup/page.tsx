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
    <main className="flex  flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <section className="flex flex-col p-8  border border-cya-800 rounded-md ">
        <h1 className="flex justify-center text-2xl pb-4">Signup</h1>

        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          className="input"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
        />
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
        <button onClick={onSignup} className="button">
          Signup here
        </button>
        <p className="flex flex-row  justify-center mt-6">
          Already have an account?
          <Link className="underline text-blue-500 mx-1" href={"/login"}>
            {" "}
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
