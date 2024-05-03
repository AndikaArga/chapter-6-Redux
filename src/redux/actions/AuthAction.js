import axios from "axios";
import { setDataUser, setTokenUser } from "../Reducers/loginReducer";

export const login = (email, password) => async (dispatch, getState) => {
  try {
    const response_login = await axios.post(
      "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
      {
        email: email,
        password: password,
      }
    );
    if (response_login.status === 200) {
      dispatch(setTokenUser(response_login?.data?.data?.token));
      return response_login.status;
    }
  } catch (error) {
   alert(error.response.data.message)
  }
};

export const RegisterUser =
  (email, password, name) => async (dispatch, getState) => {
    try {
      const response_login = await axios.post(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
        {
          email: email,
          password: password,
          name: name,
        }
      );

      if (response_login.status === 201) {
        return response_login.status;
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

export const getDataUser = () => async (dispatch, getState) => {
  try {
    const token = getState().user?.token;
    const response = await axios.get(
      "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      dispatch(setDataUser(response?.data?.data));
    }
    return response;
  } catch (error) {
    alert(error)
  }
};
