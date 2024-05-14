import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  gamespopular: [],
  gamesrelevan: [],
  gameFavorit: [],
  gameFavoritData: [],
  gameId: null,
  gameDetail: null,
};

const gameSlicer = createSlice({
  name: "game",
  initialState,
  reducers: {
    setAllgame: (state, action) => {
      state.games = action.payload;
    },
    setPopularGames: (state, action) => {
      state.gamespopular = action.payload;
    },
    setRelevanGames: (state, action) => {
      state.gamesrelevan = action.payload;
    },
    setFavoritGames: (state, action) => {
      state.gameFavorit = [...state.gameFavorit, action.payload];
    },
    clearFavoritGames: (state) => {
      state.gameFavorit = [];
    },
    removeFavorit: (state, action) => {
      state.gameFavorit = [
        ...state.gameFavorit?.filter((e) => e !== action.payload),
      ];
    },
    setGameId: (state, action) => {
      state.gameId = action.payload;
    },
    setgameDetail: (state, action) => {
      state.gameDetail = action.payload;
    },
    setgameFavorit: (state, action) => {
      const gameToAdd = action.payload;
      const isGameExist = state.gameFavoritData.some(
        (game) => game.id === gameToAdd.id
      );
      if (!isGameExist) {
        state.gameFavoritData = [...state.gameFavoritData, action.payload];
      }
    },
    removeFavoritData: (state, action) => {
      state.gameFavoritData = [
        ...state.gameFavoritData?.filter((e) => e.id !== action.payload),
      ];
    },
    clearFavoritGamesData: (state) => {
      state.gameFavoritData = [];
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const {
  setAllgame,
  removeFavoritData,
  setgameFavorit,
  clearFavoritGamesData,
  setFavoritGames,
  setPopularGames,
  setGameId,
  setgameDetail,
  setSearchKeyword,
  removeFavorit,
  clearFavoritGames,
  setRelevanGames
} = gameSlicer.actions;

export default gameSlicer.reducer;
