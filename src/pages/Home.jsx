import React, { use } from "react";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../config/env";
export default function Home() {
  const env = API_BASE_URL;
  const selector = useSelector((state) => state.auth.user);
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div>
      <div className="flex border-2 flex-row justify-between items-center">
        <ul className="flex justify-around w-full p-4 m-4 list-none">
          <li>Home</li>
          <li>Contact</li>
          <li>Products</li>
          <li>Cart</li>
          <li>Logo</li>
        </ul>
      </div>
    </div>
    // <div className="border-2 border-b-black p-4 m-4 flex justify-center items-center h-screen  ">
    //   <div className="flex flex-col gap-4 items-center  border-2">
    //     <h2 className="text-blue-600">
    //       Welcome, {selector?.name} this is your password is{" "}
    //       <span className="text-2xl">{selector?.password}</span>!
    //     </h2>
    //     <button onClick={handleGoBack}>Go Back</button>
    //   </div>
    // </div>
  );
}
