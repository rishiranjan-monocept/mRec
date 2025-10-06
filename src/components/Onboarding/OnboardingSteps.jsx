import React from 'react';

export default function OnboardingSteps({ icon, title, description }) {
  return (
    <div className="flex items-start border-r border-b border-l border-[#DCDDE0] p-4">
      <div className="h-5 w-5 flex-shrink-0">
        <img src={icon} alt="step-icon" className="h-5 w-5 object-contain" />
      </div>
      <div className="pl-2">
        <p className="text-[16px] font-[600] text-[#505662]">{title}</p>
        <p className="text-[13px] font-[400] text-[#505662]">{description}</p>
      </div>
    </div>
  );
}
