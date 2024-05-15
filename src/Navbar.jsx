import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDataUser, setTokenUser } from "./redux/Reducers/loginReducer";
import {
  clearBuy,
  clearBuyData,
  clearFavoritGames,
  clearFavoritGamesData,
  clearHistory,
  clearHistoryGamesData,
} from "./redux/Reducers/gameReducer";
import { getDataUser } from "./redux/actions/AuthAction";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.user?.token);
  const nama = useSelector((state) => state.user.userData.name);

  const handleLogout = () => {
    if (confirm(`Ingin Log-out?`)) {
      dispatch(setDataUser([]));
      dispatch(setTokenUser(null));
      dispatch(clearFavoritGames());
      dispatch(clearFavoritGamesData());
      dispatch(clearHistory());
      dispatch(clearHistoryGamesData());
      dispatch(clearBuy());
      dispatch(clearBuyData());
      navigate("/");
    }
  };

  const Token = useSelector((state) => {
    return state?.user?.token;
  });

  useEffect(() => {
    if (Token !== null) {
      dispatch(getDataUser());
    }
  }, [Token]);

  return (
    <nav className="bg-[#333333] flex justify-between items-center py-5 px-8">
      <div className="flex items-center space-x-8">
        <button
          className="text-white font-bold hover:text-yellow-400 transition-colors duration-300"
          onClick={() => navigate("/")}
        >
          Game Zone
        </button>
        {token && (
          <button
            className="text-white font-bold hover:text-yellow-400 transition-colors duration-300"
            onClick={() => navigate("/Favorit")}
          >
            Favorit
          </button>
        )}
        {token && (
          <button
            className="text-white font-bold hover:text-yellow-400 transition-colors duration-300"
            onClick={() => navigate("/GameBuy")}
          >
            Berangkas
          </button>
        )}
        {token && (
          <button
            className="text-white font-bold hover:text-yellow-400 transition-colors duration-300"
            onClick={() => navigate("/History")}
          >
            History
          </button>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {token === null ? (
          <button
            onClick={() => navigate("/Login")}
            className="text-white font-bold hover:text-yellow-400 transition-colors duration-300"
          >
            Login
          </button>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="text-white">{`Halo, ${nama}`}</div>
            <button
              onClick={handleLogout}
              className="text-white font-bold hover:text-yellow-400 transition-colors duration-300"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
