import AadhaarCardVerification from './steps/KYCVerification/AadhaarCardVerification';
import PanCardVerification from './steps/KYCVerification/PanCardVerification';
import { stageSchemas } from './validationSchemas';

export const onboardingFormConfig = {
  stages: [
    {
      id: 'KYCVerification',
      label: 'KYC Verification',
      steps: [
        { id: 'step1', label: 'PAN Card ', component: PanCardVerification },
        { id: 'step2', label: 'Aadhaar Card Verification', component: AadhaarCardVerification },
        // { id: 'selfie', label: 'Selfie Verification', component: SelfieIdentityVerification },
      ],
    },
    // {
    //   id: 'PersonalInformationVerification',
    //   label: 'Personal Information Verification',
    //   steps: [
    //     { id: 'basicInfo', label: 'Basic Information', component: BasicInformation },
    //     { id: 'businessInfo', label: 'Business Information', component: BusinessInformation },
    //     { id: 'educationProof', label: 'Education Proof', component: EducationProof },
    //   ],
    // },
  ],
  schemas: stageSchemas,
  defaultValues: {
    panNumber: '',
    aadhaarNumber: '',
    selfieFile: null,
    basicInfo: {},
    businessInfo: {},
    educationProof: {},
  },
};
