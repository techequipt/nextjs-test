import Image from 'next/image';
import HumanizeDuration from "react-humanize-duration";

import './pipeline.css';
import Graphic from './assets/graphic.svg';
import SettingIcon from './assets/icons8-settings.svg';
import SettingDarkIcon from './assets/icons8-settings_dark.svg';

interface PipelineProps {
  /**
   * Pipeline name on top
   */
  name: string;

  /**
   * Progress of message of pipline
   */
  completedMessage?: string;

  /**
   * Progress of message of pipline
   */
  inProgressMessage?: string;

  /**
   * The total time need to finished
   */
  totalTimeInSecond: number;

  /**
   * The total time has been progress
   */
  progressTimeInSecond: number;

  /**
   * Select theme
   */
  theme?: 'light-theme' | 'dark-theme';

}

/**
 * Pipeline Component with responsive & dark theme feature
 */
export const Pipeline = ({
  name,
  theme = 'light-theme',
  totalTimeInSecond = 0,
  progressTimeInSecond = 0,
  completedMessage = '<b>Your pipeline is being configured</b><br/><br/>The build process can take up to two hours.<br/>We will send you an email when setup is complete',
  inProgressMessage = '<b>Your pipeline is being configured</b><br/><br/>The build process can take up to two hours.<br/>Your pipeline is configured successfully !',
}: PipelineProps) => {

  // variable for
  const pipelineStatus = totalTimeInSecond - progressTimeInSecond > 0 ? 'Not started' : 'Completed'
  const progressMessage = pipelineStatus === 'Completed' ? completedMessage : inProgressMessage;

  return (
    <div className={["pipeline-container", theme].join(' ')}>
      <div className="left-side">
        <Image src={Graphic} alt="graphic" className="left-section__image" />
        <div className="left-section__info">
          <span className="left-section__title" title={name}>{name}</span>
          <span className="left-section__message" dangerouslySetInnerHTML={{ __html: progressMessage }}/>
        </div>
      </div>
      <div className="right-side">
        <div className="right-section__header">
          <Image src={theme === 'dark-theme' ? SettingDarkIcon : SettingIcon} alt="setting" className="right-section__header-icon" />
          <span className="right-section__progress-label">In progress</span>
        </div>
        <div className="right-section__progress-bar-wrapper">
          <div className="progress-bar" title={`${progressTimeInSecond / totalTimeInSecond * 100}%`}>
            <div className="progress-bar__inside" style={{ width: `${progressTimeInSecond / totalTimeInSecond * 100}%` }}></div>
          </div>
        </div>
        <div className="right-section__progress-info">
          <div className="progress-info__label">Status:</div>
          <div className="progress-info__value">{ pipelineStatus }</div>
          <div className="progress-info__label">Time remaining:</div>
          <div className="progress-info__value"><HumanizeDuration  duration={(totalTimeInSecond - progressTimeInSecond <= 0 ? 0 : totalTimeInSecond - progressTimeInSecond) * 1000} /></div>
        </div>
      </div>
    </div>
  );
};