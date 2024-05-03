import React from "react";
import Navbar from "./Navbar";
import Gamelist from "./Gamelist";

export default function UserPage() {
  return (
    <div className="w-screen h-screen bg-cover bg-[#222222] overflow-y-auto">
      <div>
        <Navbar />
      </div>
      <div className="mx-52 mt-4">
        <Gamelist />
      </div>
    </div>
  );
}
