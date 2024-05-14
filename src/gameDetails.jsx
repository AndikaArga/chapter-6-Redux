import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailGame } from "./redux/actions/gameAction";
import { useNavigate } from "react-router-dom";

export default function GameDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameDetails = useSelector((state) => {
    return state?.game?.gameDetail;
  });
  const Token = useSelector((state) => {
    return state?.user?.token;
  });

  useEffect(() => {
    dispatch(getDetailGame());
  }, []);

  const handlePlay = () => {
    if (Token === null) {
      alert("Silakan Login Terlebih Dahulu");
    } else {
      window.open(gameDetails?.game_url, "_blank");
    }
  };

  return (
    <div className="bg-[#222222] w-screen h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 w-[80%]">
        <div className="backdrop-blur-[20px] bg-[#444444]/75 shadow-lg rounded px-8 py-6 flex gap-8 max-lg:flex-col items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Game Details
            </h2>
            <img
              src={gameDetails?.thumbnail}
              alt={gameDetails?.title}
              className="rounded-lg mb-4 w-[600px] max-lg:w-full"
            />
            <div>
              {Token === null ? (
                <button
                  className="w-full bg-red-500 py-2 flex justify-center items-center rounded-md text-white font-bold text-sm"
                  onClick={handlePlay}
                >
                  Lock
                </button>
              ) : (
                <button
                  className="bg-yellow-400 py-2 flex justify-center items-center rounded-md text-[#101010] font-bold w-full"
                  onClick={handlePlay}
                >
                  Play
                </button>
              )}
            </div>
            <button
              className="w-full text-center py-2 bg-[#333333] text-white mt-2 rounded-md"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
          <div>
            <p className="text-lg font-bold mb-2 text-white">
              {gameDetails?.title}
            </p>
            <p className="text-white mb-4">
              Description: {gameDetails?.short_description}
            </p>
            <p className="text-white mb-4">
              Developer: {gameDetails?.developer}
            </p>
            <p className="text-white mb-4">
              Publisher: {gameDetails?.publisher}
            </p>
            <p className="text-white mb-4">Genre: {gameDetails?.genre}</p>
            <p className="text-white mb-4">Platform: {gameDetails?.platform}</p>
            <p className="text-white mb-4">
              Release Date: {gameDetails?.release_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
