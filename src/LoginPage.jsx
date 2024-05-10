import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import image from "../public/Image/bg.jpg";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("testproduk1@binaracademy.org");
  const [password, setPassword] = useState("Testproduk123");

  return (
    <div className=" w-screen h-screen bg-cover flex justify-center items-center bg-[url('../public/Image/1161813.jpg')]">
      <div className=" backdrop-blur-[20px] bg-[#a9eefe]/10 rounded-lg flex w-[65%] relative">
        <div className=" flex-1">
          <img src={image} alt="" className="w-full h-full rounded-bl-lg " />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center ">
          <div className="text-4xl font-bold text-[#dcf9fd] mb-6 text-center ">
            Login
          </div>
          <div className=" w-[80%] flex flex-col gap-4">
            <div>
              <label className="block text-[#dcf9fd] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="Masukkan email anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-2 bg-transparent border text-[#dcf9fd] placeholder-[#dcf9fd] rounded-md focus:outline-none"
              />
            </div>
            <div className="">
              <div>
                <label className="block text-[#dcf9fd] text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password anda"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 px-2 bg-transparent border text-[#dcf9fd] placeholder-[#dcf9fd] rounded-md focus:outline-none"
                />
              </div>
            </div>
            <button
              className="bg-[#dcf9fd] text-[#101010] font-semibold text-lg py-2 rounded-full"
              onClick={async () => {
                const response = await dispatch(login(email, password));
                if (response === 200) {
                  navigate("/");
                }
              }}
            >
              Submit
            </button>
          </div>
          <div className="flex justify-center mt-2 gap-1">
            <p>Belum punya akun ?</p>
            <button
              className="font-medium text-[#dcf9fd]"
              onClick={() => navigate("/Register")}
            >
              Register
            </button>
          </div>
          <div className="flex justify-center mt-7 text-sm items-center w-[80%]">
            <hr className="flex-grow border-t border-[#dcf9fd] mr-4" />
            <p className="text-[#dcf9fd]">More Login Methods</p>
            <hr className="flex-grow border-t border-[#dcf9fd] ml-4" />
          </div>
          <div className=" flex justify-center gap-6 mb-4 mt-5 ">
            <GoogleLogin />
          </div>
          <div className="absolute bottom-4 right-0 flex justify-end mr-4">
            <button
              className="bg-[#dcf9fd] text-[#101010] px-4 py-2 rounded-full font-semibold"
              onClick={() => navigate("/")}
            >
              Kembali ke game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
