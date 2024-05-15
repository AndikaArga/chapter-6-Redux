import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGames,
  getPopularGames,
  getRelevanGame,
} from "./redux/actions/gameAction";
import { useNavigate } from "react-router-dom";
import {
  removeFavorit,
  removeFavoritData,
  setFavoritGames,
  setGameId,
  setHistory,
} from "./redux/Reducers/gameReducer";
import { StarBorder, Star, Inventory2 } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const calculateValue = (e) => {
  if (e.id < 10) {
    return "Rp " + (e.id * 100000).toLocaleString("id-ID");
  } else if (e.id < 100) {
    return "Rp " + (e.id * 10000).toLocaleString("id-ID");
  } else {
    return "Rp " + (e.id * 1000).toLocaleString("id-ID");
  }
};

export default function Gamelist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state?.user?.token);
  const dataGame = useSelector((state) => state?.game?.games);
  const dataPopular = useSelector((state) => state?.game?.gamespopular);
  const dataRelevan = useSelector((state) => state?.game?.gamesrelevan);

  const Favorit = useSelector((state) => state.game.gameFavorit);
  const DataBuy = useSelector((state) => state.game.gameBuy);
  const Data22 = useSelector((state) =>
    console.log("state", state.game.gameHistory)
  );

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getPopularGames());
    dispatch(getRelevanGame());
  }, [dispatch]);

  const sliderSettings = {
    infinite: false,
    slidesToShow: 4,
    speed: 1000,
    slidesToScroll: 3,
  };

  if (!dataGame || dataGame.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
      <div className="text-2xl font-bold text-white">
        <span className="text-yellow-400">Game</span> Baru
      </div>
      <Slider {...sliderSettings}>
        {dataGame.map((e) => (
          <div
            key={e?.id}
            onClick={(event) => {
              const isStarIcon =
                event.target.closest(".MuiSvgIcon-root") !== null;
              if (!isStarIcon) {
                dispatch(setGameId(e?.id));
                dispatch(setHistory(e?.id));
                navigate("/GameDetails");
              }
            }}
            className=" p-4 hover:cursor-pointer"
          >
            <div className="my-4 mx-auto">
              <img
                src={e.thumbnail}
                alt={e.title}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="flex flex-col ">
              <div className=" flex justify-between">
                <p className="font-semibold text-md text-white">{e.title}</p>
                <span>
                  {e?.id &&
                    token &&
                    (Favorit.includes(e?.id) ? (
                      <Star
                        className="text-yellow-500"
                        onClick={() => {
                          dispatch(removeFavorit(e?.id));
                          dispatch(removeFavoritData(e?.id));
                        }}
                      />
                    ) : (
                      <StarBorder
                        className="text-yellow-500"
                        onClick={() => dispatch(setFavoritGames(e?.id))}
                      />
                    ))}
                </span>
              </div>
              <p className="mt-2 text-sm text-yellow-500 font-semibold flex justify-between items-center">
                {calculateValue(e)}
                {DataBuy.includes(e?.id) && (
                  <Inventory2
                    className="text-gray-200"
                    style={{ fontSize: "20px" }}
                    onClick={() => {
                      navigate("/GameBuy");
                    }}
                  />
                )}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-2xl font-bold text-white">
        <span className="text-yellow-400">Game</span> Terpopuler
      </div>
      <Slider {...sliderSettings}>
        {dataPopular.map((e) => (
          <div
            key={e?.id}
            onClick={(event) => {
              const isStarIcon =
                event.target.closest(".MuiSvgIcon-root") !== null;
              if (!isStarIcon) {
                dispatch(setGameId(e?.id));
                dispatch(setHistory(e?.id));
                navigate("/GameDetails");
              }
            }}
            className=" p-4 hover:cursor-pointer"
          >
            <div className="my-4 mx-auto">
              <img
                src={e.thumbnail}
                alt={e.title}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="flex flex-col ">
              <div className=" flex justify-between">
                <p className="font-semibold text-md text-white">{e.title}</p>
                <span>
                  {e?.id &&
                    token &&
                    (Favorit.includes(e?.id) ? (
                      <Star
                        className="text-yellow-500"
                        onClick={() => {
                          dispatch(removeFavorit(e?.id));
                          dispatch(removeFavoritData(e?.id));
                        }}
                      />
                    ) : (
                      <StarBorder
                        className="text-yellow-500"
                        onClick={() => dispatch(setFavoritGames(e?.id))}
                      />
                    ))}
                </span>
              </div>
              <p className="mt-2 text-sm text-yellow-500 font-semibold flex justify-between items-center">
                {calculateValue(e)}
                {DataBuy.includes(e?.id) && (
                  <Inventory2
                    className="text-gray-200"
                    style={{ fontSize: "20px" }}
                    onClick={() => {
                      navigate("/GameBuy");
                    }}
                  />
                )}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-2xl font-bold text-white">
        <span className="text-yellow-400">Rekomendasi</span> Untuk Anda
      </div>
      <Slider {...sliderSettings}>
        {dataRelevan.map((e) => (
          <div
            key={e?.id}
            onClick={(event) => {
              const isStarIcon =
                event.target.closest(".MuiSvgIcon-root") !== null;
              if (!isStarIcon) {
                dispatch(setGameId(e?.id));
                dispatch(setHistory(e?.id));
                navigate("/GameDetails");
              }
            }}
            className=" p-4 hover:cursor-pointer"
          >
            <div className="my-4 mx-auto">
              <img
                src={e.thumbnail}
                alt={e.title}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="flex flex-col ">
              <div className=" flex justify-between">
                <p className="font-semibold text-md text-white">{e.title}</p>
                <span>
                  {e?.id &&
                    token &&
                    (Favorit.includes(e?.id) ? (
                      <Star
                        className="text-yellow-500"
                        onClick={() => {
                          dispatch(removeFavorit(e?.id));
                          dispatch(removeFavoritData(e?.id));
                        }}
                      />
                    ) : (
                      <StarBorder
                        className="text-yellow-500"
                        onClick={() => dispatch(setFavoritGames(e?.id))}
                      />
                    ))}
                </span>
              </div>
              <p className="mt-2 text-sm text-yellow-500 font-semibold flex justify-between items-center">
                {calculateValue(e)}
                {DataBuy.includes(e?.id) && (
                  <Inventory2
                    className="text-gray-200"
                    style={{ fontSize: "20px" }}
                    onClick={() => {
                      navigate("/GameBuy");
                    }}
                  />
                )}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
