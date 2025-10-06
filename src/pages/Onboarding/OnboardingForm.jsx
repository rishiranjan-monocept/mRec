import React from 'react';
import { onboardingFormConfig } from '../../components/formDefinitions/onboardingForm';
import MultiStageForm from '../../components/forms/MultiStageForm/MultiStageForm';
import Header from '../../components/Header';

export default function OnboardingForm() {
  const handleFinalSubmit = (data) => {
    console.log('Final onboarding data:', data);
  };
  return (
    <div className="border-2">
      <Header title={'Onboarding'} />
      <MultiStageForm
        stagesConfig={onboardingFormConfig.stages}
        schemas={onboardingFormConfig.schemas}
        defaultValues={onboardingFormConfig.defaultValues}
        onSubmitFinal={handleFinalSubmit}
      />
    </div>
  );
}
