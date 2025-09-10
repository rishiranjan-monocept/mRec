import React, { useEffect } from "react";
import { API_BASE_URL } from "../config/env";
import { testGet, testPost } from "../services/testApi";

export default function Home() {
  const env = API_BASE_URL;
  useEffect(() => {
    testGet();
    testPost();
  }, []);
  return (
    <div>
      <h1 className="text-red-600">Home to home {env}</h1>
    </div>
  );
}
