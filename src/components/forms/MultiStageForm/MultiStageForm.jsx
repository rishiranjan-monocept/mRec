import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import StageProgressBar from './StageProgressBar';
import useStageManager from './hooks/useStageManager';

export default function MultiStageForm({ stagesConfig, schemas, defaultValues, onSubmitFinal }) {
  const { currentStage, stageIndex, stepIndex, nextStep, prevStep, isLastStep, isLastStage } =
    useStageManager(stagesConfig);

  const schema = schemas[currentStage.id][`step${stepIndex + 1}`];

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
  });

  const CurrentStepComponent = currentStage.steps[stepIndex].component;

  const handleStepSubmit = (data) => {
    console.log('Data at step submit:', data);
    if (isLastStep() && isLastStage()) {
      onSubmitFinal(data);
    } else {
      nextStep();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleStepSubmit)}>
        <StageProgressBar
          stagesConfig={stagesConfig}
          stageIndex={stageIndex}
          stepIndex={stepIndex}
        />

        {/* Pass navigation helpers to step */}
        <CurrentStepComponent
          nextStep={nextStep}
          prevStep={prevStep}
          isLastStep={isLastStep()}
          isLastStage={isLastStage()}
        />
      </form>
    </FormProvider>
  );
}
