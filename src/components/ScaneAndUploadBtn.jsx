import React from 'react';
import CAMERA from '../assets/Onboarding/Camera.svg';
export default function ScaneAndUploadBtn({ title, icon, handleUploadOrScan }) {
  return (
    <button
      className="flex w-[232px] justify-center gap-x-[8px] rounded-[50px] border-1 border-[#CBCCD0] bg-[#fff] px-[24px] py-[12px]"
      onClick={handleUploadOrScan}
      disabled={false}
    >
      <p className="text-[16px] font-[700] text-[#424752]">{title}</p>
      <img src={icon} />
    </button>
  );
}
