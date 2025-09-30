// src/layouts/BaseLayout.jsx
import React from 'react';

export default function BaseLayout({ children }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="sm-w-full h-full w-full overflow-y-auto bg-white shadow-lg sm:w-[60%]">
        {children}
      </div>
    </div>
  );
}
