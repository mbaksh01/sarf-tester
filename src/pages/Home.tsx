import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-7xl mb-8 text-center">Select Testing Method</h1>
        <NavLink
          to="/titles"
          className="text-3xl mb-4 p-2 border w-full rounded-lg cursor-pointer text-center hover:bg-gray-100"
        >
          Read full Tables
        </NavLink>
        <NavLink
          to="/"
          className="text-3xl mb-4 p-2 border w-full rounded-lg cursor-pointer text-center hover:bg-gray-100"
        >
          Translate Titles
        </NavLink>
        <NavLink
          to="/words"
          className="text-3xl mb-4 p-2 border w-full rounded-lg cursor-pointer text-center hover:bg-gray-100"
        >
          Translate Words
        </NavLink>
      </div>
    </main>
  );
}
