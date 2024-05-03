import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userData: [],
};

const userSlicer = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setTokenUser: (state, action) => {
      state.token = action.payload;
    },
    setDataUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setTokenUser, setDataUser } = userSlicer.actions;

export default userSlicer.reducer;
