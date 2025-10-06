import React from 'react';
import { useFormContext } from 'react-hook-form';
import InputField from '../../../../forms/fields/InputField';

export default function PanCardVerification({ nextStep }) {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();
  const panNumber = watch('panNumber');

  const onNext = () => {
    console.log('PAN Number submitted:', panNumber);
    nextStep();
  };

  return (
    <div className="border-2">
      <h2>PAN Card Verification</h2>
      <InputField name="panNumber" label="PAN Number" placeholder="Enter your PAN number" />

      {/* Conditional button example */}
      {panNumber && !errors.panNumber && (
        <button type="button" onClick={handleSubmit(onNext)}>
          Proceed to Aadhaar Verification
        </button>
      )}
    </div>
  );
}
