import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailGame } from "./redux/actions/gameAction";
import { useNavigate } from "react-router-dom";
import { setBuy } from "./redux/Reducers/gameReducer";

export default function GameDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const DataBuy = useSelector((state) => state.game.gameBuy);
  const gameDetails = useSelector((state) => {
    return state?.game?.gameDetail;
  });
  const Token = useSelector((state) => {
    return state?.user?.token;
  });

  useEffect(() => {
    const fetchGameDetails = async () => {
      setLoading(true);
      await dispatch(getDetailGame());
      setLoading(false);
    };
    fetchGameDetails();
  }, []);

  // const handlePlay = () => {
  //   if (Token === null) {
  //     alert("Silakan Login Terlebih Dahulu");
  //   } else {
  //     window.open(gameDetails?.game_url, "_blank");
  //   }
  // };
  const calculateValue = (e) => {
    if (e.id < 10) {
      return "Rp " + (e.id * 100000).toLocaleString("id-ID");
    } else if (e.id < 100) {
      return "Rp " + (e.id * 10000).toLocaleString("id-ID");
    } else {
      return "Rp " + (e.id * 1000).toLocaleString("id-ID");
    }
  };

  const handleBuy = async () => {
    if (Token === null) {
      alert("Silakan Login Terlebih Dahulu");
    } else {
      if (confirm(`Ingin membeli game ?`)) {
        alert("Game berhasil dibeli");
        await dispatch(setBuy(gameDetails?.id));
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-[#222222] w-screen h-screen flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

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
                  onClick={handleBuy}
                >
                  Lock
                </button>
              ) : DataBuy.includes(gameDetails?.id) ? (
                <button
                  className="w-full bg-blue-500 py-2 flex justify-center items-center rounded-md text-white font-bold text-sm"
                  onClick={() => navigate("/GameBuy")}
                >
                  Berangkas
                </button>
              ) : (
                <button
                  className="w-full bg-blue-500 py-2 flex justify-center items-center rounded-md text-white font-bold text-sm"
                  onClick={handleBuy}
                >
                  {calculateValue(gameDetails)}
                </button>
              )}
            </div>
            <button
              className="w-full text-center py-2 bg-[#333333] text-white mt-2 rounded-md"
              onClick={() => navigate("/")}
            >
              Kembali
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
