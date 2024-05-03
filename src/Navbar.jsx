import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDataUser, setTokenUser } from "./redux/Reducers/loginReducer";
import {
  clearFavoritGames,
  clearFavoritGamesData,
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
    <nav className="backdrop-blur-[20px] bg-[#333333]/75 flex justify-between items-center py-3 px-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <button
          className="text-white px-4 py-2 font-bold hover:text-yellow-400 transition-colors duration-300"
          onClick={() => navigate("/")}
        >
          Game Zone
        </button>
        {token && (
          <button
            className="text-white px-4 py-2 font-bold hover:text-yellow-400 transition-colors duration-300"
            onClick={() => navigate("/Favorit")}
          >
            Favorite
          </button>
        )}
      </div>
      <div className="flex items-center">
        {token === null ? (
          <button
            onClick={() => navigate("/Login")}
            className="text-white px-4 py-2 font-bold hover:text-yellow-400 transition-colors duration-300"
          >
            Login
          </button>
        ) : (
          <div className="flex items-center">
            <div className="text-white px-4 py-2 mr-4">{`Halo, ${nama}`}</div>
            <button
              onClick={handleLogout}
              className="text-white px-4 py-2 font-bold hover:text-yellow-400 transition-colors duration-300"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
