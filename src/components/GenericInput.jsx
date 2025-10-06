import React, { useState, useRef } from 'react';

export default function GenericInput({ label, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  const handleContainerClick = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className={`relative flex h-[56px] cursor-pointer items-center rounded-[8px] border ${isFocused ? 'border-[##0092DB] shadow-[0_0_0_2px_#0092DB]' : 'border-[#A8ABB1]'} bg-white px-4 py-[8px]`}
      onClick={handleContainerClick}
    >
      <label
        className={`absolute top-1 left-4 transition-all duration-200 ${isFocused || value ? 'top-1 text-[13px] text-[#505662]' : 'top-3.5 text-[16px] text-[#6B6F76]'}`}
        // htmlFor="floatingInput"
      >
        {label}
      </label>
      <input
        id="floatingInput"
        ref={inputRef}
        className="w-full bg-transparent pt-5 text-[16px] font-[400] text-[#171A21] outline-none"
        style={{ caretColor: '#0092DB', caretWidth: 1.5 }}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete="off"
      />
    </div>
  );
}
