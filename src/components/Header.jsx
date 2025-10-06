import React from 'react';
import ARROW from '../assets/Onboarding/Arrow.svg';
export default function Header({ title }) {
  return (
    <div className="flex items-center bg-[#143A72] px-[16px] py-[12px] text-white">
      <div className="flex gap-[8px]" onClick={() => window.history.back()}>
        <img src={ARROW} />
        <p className="text-[16px] font-[400]">{title}</p>
      </div>
    </div>
  );
}
