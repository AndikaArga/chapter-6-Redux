import axios from "axios";
import {
  setAllgame,
  setPopularGames,
  setgameDetail,
  setgameFavorit,
} from "../Reducers/gameReducer";
const apiKey = import.meta.env.VITE_REACT_APP_RAPIDAPI_API;
const apiHost = import.meta.env.VITE_REACT_APP_RAPIDAPI_HOST;

export const getAllGames = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      {
        params: {
          "sort-by": "release-date",
        },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": apiHost,
        },
      }
    );
    // console.log("response", response.data);
    dispatch(setAllgame(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.message);
      return;
    }
    alert(error.message);
  }
};

export const getPopularGames = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      {
        params: {
          "sort-by": "popularity",
        },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": apiHost,
        },
      }
    );
    // console.log("response", response.data);
    dispatch(setPopularGames(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.message);
      return;
    }
    alert(error.message);
  }
};

export const getDetailGame = () => async (dispatch, getState) => {
  try {
    dispatch(setgameDetail(null));
    const id = getState().game?.gameId;
    const response = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game`,
      {
        params: { id: id },
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": apiHost,
        },
      }
    );
    dispatch(setgameDetail(response.data));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.message);
      return;
    }
    alert(error.message);
  }
};

export const Game_favorit = () => async (dispatch, getState) => {
  const game_favorit = getState().game.gameFavorit;
  try {
    for (const id of game_favorit) {
      const response = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/game`,
        {
          params: { id: id },
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": apiHost,
          },
        }
      );
      dispatch(setgameFavorit(response.data));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error:", error.message);
    } else {
      console.error("Error:", error);
    }
  }
};
