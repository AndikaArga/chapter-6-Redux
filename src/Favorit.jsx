import React, { useEffect } from "react";
import { Game_favorit } from "./redux/actions/gameAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGameId } from "./redux/Reducers/gameReducer";
import { WebAsset, Window } from "@mui/icons-material";

export default function Favorit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Data = useSelector((state) => {
    return state?.game.gameFavoritData;
  });

  useEffect(() => {
    dispatch(Game_favorit());
  }, []);

  return (
    <div className="bg-[#222222] w-screen h-screen bg-cover overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[70%] mt-4 mx-auto">
        {Data.length === 0 ? (
          <div className="text-white font-semibold text-lg">
            Masih belum ada game favorit
          </div>
        ) : (
          Data.map((game) => (
            <div
              key={game.id}
              onClick={() => {
                dispatch(setGameId(game?.id));
                navigate("/GameDetails");
              }}
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
                    {game.genre}
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
