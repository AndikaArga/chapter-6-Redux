import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  gamespopular: [],
  gamesrelevan: [],
  gameFavorit: [],
  gameFavoritData: [],
  gameHistory: [],
  gameHistoryData: [],
  gameBuy: [],
  gameBuyData: [],
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
    setBuy: (state, action) => {
      state.gameBuy = [...state.gameBuy, action.payload];
    },
    setBuyData: (state, action) => {
      const gameToAdd = action.payload;
      const isGameExist = state.gameBuyData.some(
        (game) => game.id === gameToAdd.id
      );
      if (!isGameExist) {
        state.gameBuyData = [...state.gameBuyData, action.payload];
      }
    },
    clearBuy: (state) => {
      state.gameBuy = [];
    },
    clearBuyData: (state) => {
      state.gameBuyData = [];
    },
    setHistory: (state, action) => {
      state.gameHistory = [...state.gameHistory, action.payload];
    },
    setHistoryData: (state, action) => {
      const gameToAdd = action.payload;
      const isGameExist = state.gameHistoryData.some(
        (game) => game.id === gameToAdd.id
      );
      if (!isGameExist) {
        state.gameHistoryData = [...state.gameHistoryData, action.payload];
      }
    },
    clearHistory: (state) => {
      state.gameHistory = [];
    },
    clearHistoryGamesData: (state) => {
      state.gameHistoryData = [];
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
  setRelevanGames,
  setBuy,
  setBuyData,
  setHistory,
  setHistoryData,
  clearHistory,
  clearHistoryGamesData,
  clearBuy,
  clearBuyData,
} = gameSlicer.actions;

export default gameSlicer.reducer;
