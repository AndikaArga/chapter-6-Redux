import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Gamelist from "./Gamelist";

export default function UserPage() {
  const Token = useSelector((state) => {
    return state?.user?.token;
  });

  useEffect(() => {
    if (Token === null) {
      localStorage.clear();
    }
  }, [Token]);

  return (
    <div className="w-screen h-screen bg-cover bg-[#222222] overflow-y-auto">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="w-[80%] mx-auto mt-20">
        <Gamelist />
      </div>
    </div>
  );
}
