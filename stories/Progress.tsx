import React from 'react';
import Image from 'next/image';

import './progress.css';

import graphicIcon from '../public/graphic.svg';
import settingIcon from '../public/setting.svg';

interface ProgressProps {
  title: string;
  subTitle: string;
  description: string;
  /**
   * Min value for progress is 0 and max is 100. This is the percentage for the progress bar
   */
  progress: number;
  /**
   * Second will pass here to calculate the time remaining
   */
  timeToComplete: number;
  color: 'light' | 'dark';
}

/**
 * Primary UI component for user interaction
 */
export const Progress = ({
  title,
  subTitle,
  description,
  progress = 0,
  timeToComplete,
  color = 'light'
}: ProgressProps) => {

  const roundedNumber = (number: number) => Math.round(Math.ceil(number));

  const statusText = (progress: number) => {
    if (progress <= 0) {
      return 'Pending';
    }
    if (progress > 0 && progress < 100) {
      return 'Building';
    }
    return 'Complete';
  }

  const timeRemaining = (second: number | undefined) => {
    if (!second) return 'Unknow';
    if (second >= 3600) {
      return `${roundedNumber(second / 3600)} hours`;
    }
    if (second < 3600 && second >= 60) {
      return `${roundedNumber(second / 60)} minutes`;
    }
    return `${second} seconds`;
  }

  return (
    <div className={`container d-flex ${color}`}>
      <div className="graphic">
        <Image src={graphicIcon} alt={''} />
      </div>
      <div className='info'>
        <h3>{title}</h3>
        <span>
          <strong>{subTitle}</strong>
        </span>
        <span className="description text-grey" dangerouslySetInnerHTML={{__html: description}} />
      </div>
      <div className="progress-container">
        <div className="progress d-flex">
          <div className="w-100">
            <div className="header">
              <Image src={settingIcon} alt={''} />
              <span>In Progress</span>
            </div>
            <div className="progress-bar">
              <div className="current-progress" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-info d-flex justify-content-between">
              <div className="font-bold">
                <div>Status:</div>
                <div>Time remaining:</div>
              </div>
              <div className="font-bold text-grey">
                <div>{statusText(progress)}</div>
                <div>{timeRemaining(timeToComplete)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
