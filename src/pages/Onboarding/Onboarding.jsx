import ONBOARDINGIMG from '../../assets/Onboarding/OnboardingImg.svg';
import SHIELD_ICON from '../../assets/Onboarding/Shield.svg';
import PERSON_ICON from '../../assets/Onboarding/Person.svg';
import CARD_ICON from '../../assets/Onboarding/Card.svg';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';

export default function Onboarding() {
  const navigate = useNavigate();

  const steps = [
    {
      title: 'KYC Verification',
      description: 'Keep a copy of your PAN, Aadhaar card and passport size photo',
      icon: SHIELD_ICON,
    },
    {
      title: 'Personal Information',
      description: 'Keep highest education certificate and a passport sized photo handy',
      icon: PERSON_ICON,
    },
    {
      title: 'Bank & Income Verification',
      description: 'Keep your last 6 month bank statements ready',
      icon: CARD_ICON,
    },
  ];

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
        <div className="flex flex-col gap-[12px] rounded-[8px] border border-[#E8EBF1] bg-[#FFF] py-[16px]">
          {steps?.map((steps) => {
            return <StepsUI img={steps.icon} title={steps.title} description={steps.description} />;
          })}
        </div>
      </div>
    </div>
  );
}

function StepsUI({ img, title, description }) {
  return (
    <div
      className="rounded-1xl flex gap-[12px] px-[16px] hover:cursor-pointer hover:bg-[#f1f1f1]"
      onClick={() => console.log(title)}
    >
      <div className="flex-shrink-0">
        <img src={img} />
      </div>
      <div>
        <p className="text-[16px] font-[600] text-[#143A72]">{title}</p>
        <p className="text-[13px] font-[400] text-[#505662]">{description} </p>
      </div>
    </div>
  );
}
