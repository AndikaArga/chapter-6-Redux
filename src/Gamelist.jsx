import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames, getPopularGames } from "./redux/actions/gameAction";
import { useNavigate } from "react-router-dom";
import {
  removeFavorit,
  removeFavoritData,
  setFavoritGames,
  setGameId,
} from "./redux/Reducers/gameReducer";
import { StarBorder, Star, WebAsset, Window } from "@mui/icons-material";

export default function Gamelist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => {
    return state?.user?.token;
  });

  const dataGame = useSelector((state) => {
    return state?.game?.games;
  });
  const dataPopular = useSelector((state) => {
    return state?.game?.gamespopular;
  });
  const Favorit = useSelector((state) => {
    return state.game.gameFavorit;
  });


  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getPopularGames());
  }, []);

  return (
    <div className=" bg-transparent">
      <div className="flex gap-8">
        <div className="flex flex-col flex-grow gap-4">
          <div className="text-2xl font-bold text-center rounded-md bg-[#333333]/75 text-white backdrop-blur-[20px]  py-2 shadow-lg">
            <span className="text-yellow-400">New</span> Releases
          </div>
          {dataGame.slice(0, 8).map((e) => (
            <div
              key={e?.id}
              onClick={(event) => {
                if (event.target.tagName === "DIV") {
                  dispatch(setGameId(e?.id));
                  navigate("/GameDetails");
                }
              }}
              className="backdrop-blur-[20px] bg-[#333333]/75 rounded-md overflow-hidden shadow-lg flex items-center transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <div className="my-4 ml-6">
                <img
                  src={e.thumbnail}
                  alt={e.title}
                  className="object-cover w-full h-[100px]"
                />
              </div>
              <div className="p-4 flex justify-between flex-grow">
                <div>
                  <p className="font-semibold text-md text-white">{e.title}</p>
                  <p className="mt-2 inline-block text-sm bg-yellow-400 text-[#101010] px-2 py-1 rounded-md font-semibold">
                    {e.genre}
                  </p>
                </div>
              </div>
              <div className=" flex mr-6 gap-4">
                <div className="flex-grow text-end text-white hover:text-black">
                  {e?.id &&
                    token &&
                    (Favorit.includes(e?.id) ? (
                      <p
                        className="text-yellow-500"
                        onClick={() => {
                          dispatch(removeFavorit(e?.id)),
                            dispatch(removeFavoritData(e?.id));
                        }}
                      >
                        <Star />
                      </p>
                    ) : (
                      <p
                        className="text-yellow-500"
                        onClick={() => dispatch(setFavoritGames(e?.id))}
                      >
                        <StarBorder />
                      </p>
                    ))}
                </div>
                <div className="flex-grow text-end  text-white">
                  {e.platform.includes("PC") && (
                    <div className=" text-yellow-500">
                      <Window />
                    </div>
                  )}
                  {e.platform === "Web Browser" && (
                    <div className=" text-yellow-500">
                      <WebAsset />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold text-center rounded-md text-white backdrop-blur-[20px] bg-[#333333]/75 py-2 shadow-lg">
            <span className="text-yellow-400">Most Played</span> Today
          </div>
          <div className="flex flex-col flex-grow justify-between">
            {dataPopular.slice(0, 5).map((game) => (
              <div
                key={game.id}
                onClick={() => {
                  dispatch(setGameId(game?.id));
                  navigate("/GameDetails");
                }}
                className="rounded-md overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 m-2">
                    <div className="text-white">
                      {game.platform.includes("PC") && (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
