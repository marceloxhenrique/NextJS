"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

// const notify = () => toast("Here is your toast");
export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const onSignup = async () => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.password.length > 0
    ) {
      try {
        const res = await axios.post("/api/users/signup", user);
        console.log("Signup success", res.data);
        router.push("/login");
        toast.success("Sugnup succesfully");
        // notify;
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      toast.error("Fill up the form");
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

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
        {user.username.length < 0 && <p>Enter a valid Usernames</p>}
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
