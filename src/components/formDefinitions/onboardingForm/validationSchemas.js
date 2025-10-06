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

  PersonalInformationVerification: {
    step1: Yup.object({
      basicInfo: Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        dob: Yup.date()
          .required('Date of birth is required')
          .max(new Date(), 'DOB cannot be in the future'),
      }),
    }),
    step2: Yup.object({
      businessInfo: Yup.object({
        businessName: Yup.string().required('Business name is required'),
        gstNumber: Yup.string().required('GST number is required'),
      }),
    }),
    step3: Yup.object({
      educationProof: Yup.object({
        degree: Yup.string().required('Degree is required'),
        certificateFile: Yup.mixed()
          .required('Certificate file is required')
          .test(
            'fileType',
            'Only PDF or image files are allowed',
            (value) => value && ['application/pdf', 'image/jpeg', 'image/png'].includes(value.type)
          ),
      }),
    }),
  },
};
