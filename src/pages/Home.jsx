import React from "react";
import { API_BASE_URL } from "../config/env";

export default function Home() {
  const env = API_BASE_URL;
  return (
    <div>
      <h1 className="text-red-600">Home to home {env}</h1>
    </div>
  );
}
