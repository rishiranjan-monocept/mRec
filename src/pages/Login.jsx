
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const selector = useSelector((store) => store.auth.user);
  const handleLogin = () => {
    dispatch(login({ name, password }));
    if (name && password) navigate("/home");
    else alert("Please enter username and password");
  };
  useEffect(() => {
    console.log("Selector-------->>", selector);
  }, [selector]);


  return (
    <div className="flex justify-center h-screen items-center ">
      <div className=" border-blue-400 border-1 flex justify-center p-3 flex-col gap-4 items-center rounded-4xl bg-blue-100 h-70 w-100">
        <h1 className="text-2xl text-blue-400">Login</h1>
        <div className="flex  flex-row gap-x-1.5 ">
          <label className="text-blue-300 text-[25px]">Username</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border-1 rounded-2xl px-2"
            placeholder="Enter username"
          />
        </div>
        <div className="flex  flex-row gap-x-1.5 ">
          <label className="text-blue-300 text-[25px]">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border-1 rounded-2xl px-2"
            placeholder="Enter password"
          />
        </div>
        <button
          className="border-blue-200 px-6 py-2 rounded-[10px] bg-blue-500 hover:bg-blue-700 hover:text-white"
          onClick={handleLogin}
        >
          <h2 className="text-[18px]">Login</h2>
        </button>
      </div>
    </div>
  );
}
