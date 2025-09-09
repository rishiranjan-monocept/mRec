import React, { use } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const selector = useSelector((state) => state.auth.user);
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="border-2 border-b-black p-4 m-4 flex justify-center items-center h-screen  ">
      {/* <h1 className="text-red-600">Home to home</h1> */}
      <div className="flex flex-col gap-4 items-center  border-2">
        <h2 className="text-blue-600">
          Welcome, {selector?.name} this is your password is{" "}
          <span className="text-2xl">{selector?.password}</span>!
        </h2>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
}
