import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../features/language/languageSlice";
import { useTranslation } from "react-i18next";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const selector = useSelector((store) => store.auth.user);
  const language = useSelector((store) => store.language.language);

  const handleLogin = () => {
    dispatch(login({ name, password }));
    if (name && password) navigate("/home");
    else alert("Please enter username and password");
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="flex justify-center h-screen items-center ">
      <select onChange={handleLanguageChange} value={language}>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
      </select>

      <div className=" border-blue-400 border-1 flex justify-center p-3 flex-col gap-4 items-center rounded-4xl bg-blue-100 h-70 w-100">
        <h1 className="text-2xl text-blue-400">{t("login")}</h1>
        <div className="flex  flex-row gap-x-1.5 ">
          <label className="text-blue-300 text-[25px]">{t("username")}</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border-1 rounded-2xl px-2"
            placeholder={t("enter_username")}
          />
        </div>
        <div className="flex  flex-row gap-x-1.5 ">
          <label className="text-blue-300 text-[25px]">{t("password")}</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border-1 rounded-2xl px-2"
            placeholder={t("enter_password")}
          />
        </div>
        <button
          className="border-blue-200 px-6 py-2 rounded-[10px] bg-blue-500 hover:bg-blue-700 hover:text-white"
          onClick={handleLogin}
        >
          <h2 className="text-[18px]">{t("login_button")}</h2>
        </button>
      </div>
    </div>
  );
}
