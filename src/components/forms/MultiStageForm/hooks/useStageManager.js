import { useState } from 'react';

export default function useStageManager(stagesConfig) {
  const [stageIndex, setStageIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const currentStage = stagesConfig[stageIndex];

  const nextStep = () => {
    if (stepIndex < currentStage.steps.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else if (stageIndex < stagesConfig.length - 1) {
      setStageIndex((prev) => prev + 1);
      setStepIndex(0);
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    } else if (stageIndex > 0) {
      setStageIndex((prev) => prev - 1);
      setStepIndex(stagesConfig[stageIndex - 1].steps.length - 1);
    }
  };

  const isLastStep = () => stepIndex === currentStage.steps.length - 1;
  const isLastStage = () => stageIndex === stagesConfig.length - 1;

  return {
    currentStage,
    stageIndex,
    stepIndex,
    nextStep,
    prevStep,
    isLastStep,
    isLastStage,
  };
}
