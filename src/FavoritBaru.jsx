import React from "react";
import Navbar from "./Navbar";
import Favorit from "./Favorit";

export default function FavoritBaru() {
  return (
    <div className="bg-[#222222]">
      <div>
        <Navbar />
        <Favorit />
      </div>
    </div>
  );
}
