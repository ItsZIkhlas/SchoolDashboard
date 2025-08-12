"use client"

import Link from "next/link";
import { useState } from "react";

const Homepage = () => {
  const [role, setRole] = useState("none");


  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center text-4xl font-bold mt-4">Homepage</h1>
      <div className="bg-lamaPurpleLight p-8 rounded-lg flex flex-col gap-4">
        <h3 className="text-black font-bold text-center">Choose Role</h3>
        <div className="flex flex-row items-center gap-4">
          <Link href={`/admin`}>
            <button
              className="bg-lamaSkyLight px-4 py-2 rounded-md"
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </Link>
          <Link href={`/student`}>
            <button
              className="bg-lamaSkyLight px-4 py-2 rounded-md"
              onClick={() => setRole("student")}
            >
              Student
            </button>
          </Link>
          <Link href={`/teacher`}>
            <button
              className="bg-lamaSkyLight px-4 py-2 rounded-md"
              onClick={() => setRole("teacher")}
            >
              Teacher
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage