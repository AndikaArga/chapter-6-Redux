import React, { useEffect } from "react";
import { Game_Buy, Game_History } from "./redux/actions/gameAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGameId } from "./redux/Reducers/gameReducer";
import { WebAsset, Window } from "@mui/icons-material";
import Navbar from "./Navbar";

export default function History() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Data = useSelector((state) => {
    const gameHistoryData = state?.game.gameHistoryData;
    return [...gameHistoryData].reverse();
  });

  const calculateValue = (e) => {
    if (e.id < 10) {
      return "Rp " + (e.id * 100000).toLocaleString("id-ID");
    } else if (e.id < 100) {
      return "Rp " + (e.id * 10000).toLocaleString("id-ID");
    } else {
      return "Rp " + (e.id * 1000).toLocaleString("id-ID");
    }
  };

  useEffect(() => {
    dispatch(Game_History());
  }, []);

  return (
    <div className="bg-[#222222] w-screen h-screen bg-cover overflow-y-auto">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[80%] mt-4 mx-auto">
        {Data.length === 0 ? (
          <div className="text-white font-semibold text-lg flex">
            Belum ada yang yang dilihat
          </div>
        ) : (
          Data.map((game) => (
            <div
              key={game.id}
              onClick={() => {
                dispatch(setGameId(game?.id));
                navigate("/GameDetails");
              }}
              className=" hover:cursor-pointer"
            >
              <div className="flex-1">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="object-cover w-full rounded-md"
                />
              </div>
              <div className="p-4 flex justify-between">
                <div>
                  <p className="font-semibold text-sm text-[#E3E3E3]">
                    {game.title}
                  </p>
                  <p className="mt-2 inline-block text-sm bg-yellow-400 text-[#101010] px-2 py-1 rounded-md font-semibold">
                    {calculateValue(game)}
                  </p>
                </div>
                <div className="text-white">
                  {game.platform === "Windows" && (
                    <div className=" text-yellow-500">
                      <Window />
                    </div>
                  )}
                  {game.platform === "Web Browser" && (
                    <div className=" text-yellow-500">
                      <WebAsset />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
