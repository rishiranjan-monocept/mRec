import React, { useState } from 'react';
import Header from '../components/Header';
import tick from '../assets/Onboarding/tick.svg';
import CustomButton from '../components/CustomButton';
import CollapsibleSection from '../components/Onboarding/CollapsibleSection';
import ScaneAndUploadBtn from '../components/ScaneAndUploadBtn';
import CAMERA from '../assets/Onboarding/Camera.svg';
import GenericInput from '../components/GenericInput';

export default function Onboarding() {
  const [value, setValue] = useState('');
  const steps = [
    {
      title: 'KYC Verification',
      description: 'Keep a copy of your PAN and Aadhaar Card',
      icon: tick,
    },
    {
      title: 'Personal Information Verification',
      description: 'Keep highest education certificate and a passport sized photo handy',
      icon: tick,
    },
    {
      title: 'Bank & Income Verification',
      description: 'Keep your last 6 month bank statements ready',
      icon: tick,
    },
  ];

  const stepsForGoodToHave = [
    {
      title: 'GST number',
      description: 'If you have a registered business',
      icon: tick,
    },
    {
      title: 'Business address',
      description: 'Where your business is located',
      icon: tick,
    },
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      <Header title={'Onboarding'} />
      <div className="flex-1 overflow-y-auto">
        <CollapsibleSection
          title="Application Form Filling"
          subtitle="This stage has three steps:"
          steps={steps}
          ß
        />

        <CollapsibleSection title="Good to Have" steps={stepsForGoodToHave} />
      </div>
      <ScaneAndUploadBtn
        title={'Scan and Upload'}
        icon={CAMERA}
        handleUploadOrScan={() => {
          console.log('handleUploadOrScane is pressed');
        }}
        disabled={false}
      />
      <GenericInput
        value={value}
        onChange={() => {
          setValue(event.target.value);
        }}
        label={'Nominee Name'}
      />
      <div className="py-[26px]">
        <CustomButton title={'Proceed'} onClick={() => console.log('clicked customButton')} />
      </div>
    </div>
  );
}
