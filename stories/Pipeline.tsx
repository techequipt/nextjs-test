import React from 'react';
import './pipeline.css';
import ImageGraphic from './assets/graphic.svg';
import Image from 'next/image';

interface PipelineProps {
	/**
	 * Name pipeline
	 */
	name: string;
	/**
	 * To set the completion percentage
	 */
	percent: number;

	/**
	 * seconds left to complete the progress
	 */
	timeRemaining: number;

	/**
	 * dark mode or light mode
	 */
	themeColor?: 'light' | 'dark';
}

export const Pipeline = ({
	name,
	percent,
	themeColor = 'light',
	timeRemaining,
	...props
}: PipelineProps) => {
	const getStatusProcess = (progress: number) => {
		if (progress <= 0) {
			return 'Pending';
		}
		if (progress > 0 && progress < 100) {
			return 'Building';
		}
		return 'Complete';
	};

	const convertTimeRemaining = (second: number) => {
		if (!second) return '';
		if (second >= 3600) {
			const hour = Math.round(Math.ceil(second / 3600));
			if (hour > 1) {
				return `${hour} hours`;
			}
			return `${hour} hour`;
		}
		if (second < 3600 && second >= 60) {
			const hour = Math.round(Math.ceil(second / 60));
			if (hour > 1) {
				return `${hour} minutes`;
			}
			return `${hour} minute`;
		}
		return `${second} seconds`;
	};
	return (
		<div className={`wrapper-pipeline wrapper-pipeline--${themeColor}`}>
			<div className="content-left">
				<Image className="image" src={ImageGraphic} alt="graphic" />
				<div className="info-pipeline">
					<div className="title">{name}</div>
					<strong className="sub-title">
						Your pipeline is being configured
					</strong>
					<div className="description desktop">
						<span>The build process can take up to two hours.</span>
						<br />
						<span>We will send you an email when setup is complete.</span>
					</div>
				</div>
			</div>
			<div className="description mobile">
				<span>The build process can take up to two hours.</span>
				<br />
				<span>We will send you an email when setup is complete.</span>
			</div>
			<div className="progress">
				<div className="setting">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 16 16"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
							fill="currentColor"
							stroke="currentColor"
						></path>
					</svg>
					<div>In Progress</div>
				</div>
				<div className="process">
					<div
						style={{ width: `${percent}%` }}
						className="percent-process"
					></div>
				</div>
				<div className="status">
					<div>Status:</div>
					<div className="text-status">{getStatusProcess(percent)}</div>
				</div>
				<div className="time-remain">
					<div>Time remaining:</div>
					<div className="text-time">{convertTimeRemaining(timeRemaining)}</div>
				</div>
			</div>
		</div>
	);
};
