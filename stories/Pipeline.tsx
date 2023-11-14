import React, { useMemo } from 'react';
import Image from 'next/image';
import './pipeline.css';
import Graphic from './assets/graphic.svg';
import Setting from './assets/setting.svg';
import SettingDark from './assets/setting-dark.svg';

interface PipelineProps {
  /**
   * Name of pipeline
   */
  name: string;

  /**
   * Which UI theme to use?
   */
  theme?: 'light' | 'dark';

  /**
   * The total time in which process can take up (seconds)
   */
  processTime: number;

  /**
   * The total time in which the process is already completed (seconds)
   */
  completedTime: number;

  /**
   * The optional description which is shown below the build process line
   */
  description?: string;
}

const getProcessTimeAsString = (seconds: number = 0) => {
  if (!seconds || seconds < 0) {
    return `0 hour`;
  }

  if (seconds < 60) {
    return `${seconds} seconds`;
  }

  if (seconds < 60 * 60) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
  }

  const hours = Math.floor(seconds / (60 * 60));
  return `${hours} ${hours > 1 ? 'hours' : 'hour'}`;
};

const getCompletedPercentage = (processTime: number = 0, completedTime: number = 0) => {
  if (!processTime || !completedTime) {
    return 0;
  }

  if (completedTime > processTime) {
    return 100;
  }

  return Math.round((completedTime / processTime) * 100);
};

const getPipelineStatus = (processTime: number = 0, completedTime: number = 0) => {
  if (!processTime || !completedTime) {
    return 'Not Started';
  }

  if (completedTime < processTime) {
    return 'Building';
  }

  return 'Completed';
}

/**
 * Pipeline Component with responsive & dark mode feature
 */
export const Pipeline = ({
  name,
  theme = 'light',
  processTime,
  completedTime,
  description,
}: PipelineProps) => {
  const modeClass = (theme === 'dark') ? 'pipeline-wrapper--dark' : 'pipeline-wrapper--light';
  const processTimeAsString = useMemo(() => getProcessTimeAsString(processTime), [processTime]);
  const remainingTimeAsString = useMemo(() => getProcessTimeAsString(processTime - completedTime), [processTime, completedTime]);
  const completedPercentage = useMemo(() => getCompletedPercentage(processTime, completedTime), [processTime, completedTime]);
  const pipelineStatus = useMemo(() => getPipelineStatus(processTime, completedTime), [processTime, completedTime]);

  return (
    <div className={["pipeline-wrapper", modeClass].join(' ')}>
      <div className="left-side">
        <Image src={Graphic} alt="graphic" className="left-side__img" />
        <div className="left-side__info">
          <span className="left-side__title" title={name}>{name}</span>
          <span className="left-side__subtitle">{ pipelineStatus === 'Completed' ? 'Your pipeline is configured successfully !' : 'Your pipeline is being configured' }</span>
          { (pipelineStatus !== 'Completed') && <span className="left-side__description">The build process can take up to { processTimeAsString }.</span> }
          { !!description && <span className="left-side__description" dangerouslySetInnerHTML={{ __html: description }} /> }
        </div>
      </div>
      <div className="right-side">
        <div className="right-side__header">
          <Image src={theme === 'dark' ? SettingDark : Setting} alt="setting" className="right-side__header-icon" />
          <span className="right-side__progress-label">In progress</span>
        </div>
        <div className="right-side__progress-bar-wrapper">
          <div className="progress-bar" title={`${completedPercentage}%`}>
            <div className="progress-bar__inside" style={{ width: `${completedPercentage}%` }}></div>
          </div>
        </div>
        <div className="right-side__progress-info">
          <div className="progress-info__label">Status:</div>
          <div className="progress-info__value">{ pipelineStatus }</div>
          <div className="progress-info__label">Time remaining:</div>
          <div className="progress-info__value">{ remainingTimeAsString }</div>
        </div>
      </div>
    </div>
  );
};
