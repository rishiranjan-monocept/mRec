import * as Yup from 'yup';

export const stageSchemas = {
  KYCVerification: {
    step1: Yup.object({
      panNumber: Yup.string()
        .required('PAN number is required')
        .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'Invalid PAN format'),
    }),
    step2: Yup.object({
      aadhaarNumber: Yup.string()
        .required('Aadhaar number is required')
        .matches(/^[0-9]{12}$/, 'Invalid Aadhaar format'),
    }),
    step3: Yup.object({
      selfieFile: Yup.mixed()
        .required('Selfie verification is required')
        .test(
          'fileType',
          'Only image files are allowed',
          (value) => value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
        ),
    }),
  },
};
