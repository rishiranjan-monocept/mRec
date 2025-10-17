import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Upload } from 'lucide-react';
import PancardDemo from '../../../../../assets/Onboarding/PANCARD_DEMO.svg';

// Helper component for the dashed upload box
const UploadFileComponent = () => (
  <div
    onClick={() => console.log('Upload clicked')}
    className="flex w-full cursor-pointer items-center justify-between rounded-xl border-2 border-dashed border-[#B8BBBF] p-4 text-center transition-colors hover:border-[#4B5563] hover:bg-[#F9FAFB]"
  >
    <div className="items-center gap-2 rounded bg-[#F4F6FA] p-2">
      <Upload className="h-5 w-5 text-[#424752]" />
    </div>
    <div className="flex flex-col items-center gap-2 text-[#4B5563]">
      <span className="self-stretch text-center font-sans text-sm leading-normal font-normal text-[#171A21]">
        + Upload a file
      </span>
      <p className="overflow-hidden text-center font-sans text-sm leading-normal font-normal text-ellipsis text-[#505662]">
        PDF or JPG not more than 1 MB.
      </p>
    </div>
  </div>
);

export default function PanCardVerification({ nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const PAN_REGEX = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;

  const onSubmit = (data) => {
    console.log('PAN Number submitted:', data.panNumber);
    nextStep();
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between bg-[#f5f6fa] font-sans">
      {/* Centered, responsive container */}
      <div className="mx-auto flex w-full flex-col items-center gap-6 p-4 sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        {/* PAN Card Demo Image */}
        <div className="flex justify-center">
          <img src={PancardDemo} alt="PAN Card Demo" className="w-full max-w-xs md:max-w-sm" />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start gap-6 self-stretch rounded-lg border-2 border-gray-200 bg-white p-6 shadow-[0_4px_12px_0_rgba(114,120,129,0.20)]"
        >
          {/* PAN Number Input */}
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <label
                htmlFor="panNumber"
                className="text-base leading-normal font-medium text-[#171A21]"
              >
                PAN Number*
              </label>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-[#0057FF]">
                Instant verification
              </span>
            </div>

            <div className="flex w-full flex-col gap-1">
              <input
                id="panNumber"
                type="text"
                placeholder="Enter PAN card number"
                className={`w-full rounded-lg border p-3 text-base font-normal uppercase transition-colors placeholder:text-[#B8BBBF] focus:border-[#0057FF] focus:outline-none ${
                  errors.panNumber ? 'border-red-500' : 'border-[#B8BBBF]'
                }`}
                {...register('panNumber', {
                  required: 'PAN number is required.',
                  pattern: {
                    value: PAN_REGEX,
                    message:
                      'Invalid PAN format. Must be 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F).',
                  },
                  maxLength: {
                    value: 10,
                    message: 'PAN number must be 10 characters.',
                  },
                  minLength: {
                    value: 10,
                    message: 'PAN number must be 10 characters.',
                  },
                  setValueAs: (v) => v.toUpperCase(),
                  onBlur: (e) => {
                    e.target.value = e.target.value.toUpperCase();
                  },
                })}
              />
              <p
                className={`text-sm font-normal ${
                  errors.panNumber ? 'font-semibold text-red-500' : 'text-[#727881]'
                }`}
              >
                {errors.panNumber ? errors.panNumber.message : 'Enter your 10-digit PAN number'}
              </p>
            </div>
          </div>

          {/* Upload Section */}
          <div className="w-full">
            <UploadFileComponent />
          </div>
        </form>
      </div>
      {/* Continue Button */}
      <div className="mt-auto w-full border-t border-[#E8EBF1] bg-[#ffffff] p-4">
        <button
          type="submit"
          className="w-full rounded-4xl bg-[#97144D] py-3 text-base font-semibold text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
