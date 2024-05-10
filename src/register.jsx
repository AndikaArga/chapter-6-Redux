import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { RegisterUser } from "./redux/actions/AuthAction";
import image from "../public/Image/baru.jpg";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPasword] = useState("");

  return (
    <div className=" w-screen h-screen bg-cover flex justify-center items-center bg-[url('../public/Image/1161813.jpg')]">
      <div className=" backdrop-blur-[20px] bg-[#a9eefe]/10   rounded-lg flex w-[65%]">
        <div className="flex flex-col flex-1 justify-center items-center ">
          <div className="text-4xl font-bold text-[#E3E3E3] mb-6 text-center ">
            Register
          </div>
          <div className=" w-[80%] flex flex-col gap-4">
            <div>
              <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan email anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-2 px-2 bg-transparent border text-[#E3E3E3] placeholder-[#E3E3E3] rounded-md focus:outline-none"
              />
            </div>
            <div className="">
              <div>
                <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Masukkan password anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-2 bg-transparent border text-[#E3E3E3] placeholder-[#E3E3E3] rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div className="">
              <div>
                <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password anda"
                  value={password}
                  onChange={(e) => setPasword(e.target.value)}
                  className="w-full py-2 px-2 bg-transparent border text-[#E3E3E3] placeholder-[#E3E3E3] rounded-md focus:outline-none"
                />
              </div>
            </div>
            <button
              className="bg-[#E3E3E3] text-[#101010] font-semibold text-lg py-2 rounded-full"
              onClick={async () => {
                const response = await dispatch(
                  RegisterUser(email, password, name)
                );
                if (response === 201) {
                  alert("akun berhasil dibuat");
                  navigate("/Login");
                }
              }}
            >
              Submit
            </button>
          </div>
          <div className="flex justify-center mt-2 gap-1">
            <p>Sudah punya akun ?</p>
            <button
              className="font-medium text-[#E3E3E3]"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
          </div>
          <div class="flex justify-center mt-7 text-sm items-center w-[80%]">
            <hr class="flex-grow border-t border-[#E3E3E3] mr-4" />
            <p class="text-[#E3E3E3]">More Login Methods</p>
            <hr class="flex-grow border-t border-[#E3E3E3] ml-4" />
          </div>
          <div className=" flex justify-center gap-6 mb-4 mt-5 ">
            <GoogleLogin />
          </div>
        </div>
        <div className=" flex-1">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-br-lg rounded-tr-lg"
          />
        </div>
      </div>
    </div>
  );
}
