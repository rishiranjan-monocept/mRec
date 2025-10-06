import React, { useState } from 'react';
import chevron_down from '../../assets/Onboarding/chevron-down.svg';
import chevron_up from '../../assets/Onboarding/chevron-up.svg';
import SPEAKER from '../../assets/Onboarding/Speaker.svg';
import OnboardingSteps from './OnboardingSteps';

export default function CollapsibleSection({ title, subtitle, steps }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#EBF5FD] p-4">
        <img src={SPEAKER} alt="speaker" className="h-6 w-6 object-contain" />
        <div className="flex cursor-pointer items-center gap-2" onClick={() => setOpen(!open)}>
          <p className="w-[92%] text-[16px] font-[500] text-[#143A72]">{title}</p>
          <img src={open ? chevron_up : chevron_down} alt="toggle" />
        </div>
        {subtitle && <p className="text-[13px] font-[400] text-[#505662]">{subtitle}</p>}
      </div>

      {open &&
        steps.map((step, index) => (
          <OnboardingSteps
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
    </div>
  );
}
