import ONBOARDINGIMG from '../../assets/Onboarding/OnboardingImg.svg';
import SHIELD_ICON from '../../assets/Onboarding/Shield.svg';
import PERSON_ICON from '../../assets/Onboarding/Person.svg';
import CARD_ICON from '../../assets/Onboarding/Card.svg';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-[#F4F6FA]">
      <div className="flex justify-center bg-[#E6F4FB] pt-[30px] pb-[15px]">
        <img src={ONBOARDINGIMG} className="" />
      </div>
      <div className="px-[16px]">
        <div className="pt-[16px] pb-[36px]">
          <p className="text-center text-[25px] font-[700] tracking-[-0.04px] text-[#143A72]">
            Welcome to Axis Max Life Onboarding
          </p>
          <p className="text-center text-[13px] font-[500] text-[#505662]">
            Complete your profile to get started
          </p>
        </div>
        <div className="flex flex-col gap-[12px] rounded-[8px] border border-[#E8EBF1] bg-[#FFF] p-[16px]">
          <div className="flex gap-[12px]">
            <div className="flex-shrink-0">
              <img src={SHIELD_ICON} />
            </div>
            <div>
              <p className="text-[16px] font-[600] text-[#143A72]">KYC Verification</p>
              <p className="text-[13px] font-[400] text-[#505662]">
                Keep a copy of your PAN, Aadhaar card and passport size photo
              </p>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <div className="flex-shrink-0">
              <img src={PERSON_ICON} />
            </div>
            <div>
              <p className="text-[16px] font-[600] text-[#143A72]">Personal Information</p>
              <p className="text-[13px] font-[400] text-[#505662]">
                Keep highest education certificate and a passport sized photo handy
              </p>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <div className="flex-shrink-0">
              <img src={CARD_ICON} />
            </div>
            <div>
              <p className="text-[16px] font-[600] text-[#143A72]">Bank & Income Verification</p>
              <p className="text-[13px] font-[400] text-[#505662]">
                Keep your last 6 month bank statements ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
