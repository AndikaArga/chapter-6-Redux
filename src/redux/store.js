import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import gameReducer from "./Reducers/gameReducer";
import loginReducer from "./Reducers/loginReducer";

const rootReducers = combineReducers({ game: gameReducer, user: loginReducer });

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create the store
// export default configureStore({
//   reducer: rootReducers,
//   devTools: import.meta.env.NODE_ENV === "development",
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export const persistor = persistStore(store);
