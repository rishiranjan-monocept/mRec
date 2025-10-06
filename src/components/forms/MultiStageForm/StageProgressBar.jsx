import React from 'react';

export default function StageProgressBar({ stagesConfig, stageIndex, stepIndex }) {
  const totalSteps = stagesConfig.reduce((sum, stage) => sum + stage.steps.length, 0);

  const currentStepNumber =
    stagesConfig.slice(0, stageIndex).reduce((sum, stage) => sum + stage.steps.length, 0) +
    (stepIndex + 1);

  const progressPercent = (currentStepNumber / totalSteps) * 100;

  return (
    <div style={{ marginBottom: '20px' }}>
      {/* Progress Bar */}
      <div
        style={{
          height: '8px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: '#3b82f6',
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </div>

      {/* Stage / Step Info */}
      <div style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}>
        Stage: <strong>{stagesConfig[stageIndex].label}</strong> — Step:{' '}
        <strong>{stagesConfig[stageIndex].steps[stepIndex].label}</strong>
      </div>
    </div>
  );
}
