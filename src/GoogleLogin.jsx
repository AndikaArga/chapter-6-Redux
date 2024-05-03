import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTokenUser } from "./redux/Reducers/loginReducer";
import gambar from "../public/Image/images.png"

function GoogleLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://shy-cloud-3319.fly.dev/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios.request(config);
      dispatch(setTokenUser(response?.data?.data?.token));
      navigate("/User");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return;
      }
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => {
      registerLoginWithGoogleAction(responseGoogle.access_token);
    },
  });

  return (
    <button
      onClick={() => loginWithGoogle()}
      className="w-10 h-10 rounded-full"
    >
      <img
        src={gambar}
        alt=""
        className="w-full h-full rounded-full object-cover"
      />
    </button>
  );
}

export default GoogleLogin;
