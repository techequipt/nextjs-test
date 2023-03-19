import React from "react";
import "./cardInfo.css";
import Graphic from '../graphic.svg';
import IconSetting from '../setting.svg';

import Image from 'next/image';

interface CardInfoProps {
    /**
     * This is the title for card.
     */
    title: string;

    /**
     * This is the short description for card.
     */
    shortDescription?: string;

    /**
     * This is the description for card.
     */
    description?: string;

    /**
     * This is the percentage for the progress bar. Min value for progress is 0 and the max is 100.
     */
    progress: number;

    /**
     * Time for complete and value use second. It will use for calculating the time remaining.
     */
    timeComplete: number;

    /**
     * Theme for the card, default theme will be light.
     */
    theme: "light" | "dark";
}

export const CardInfo = ({
    title,
    shortDescription,
    description,
    progress = 0,
    timeComplete = 0,
    theme = "light",
    ...props
}: CardInfoProps) => {
    const roundedNumber = (number: number) => Math.round(Math.ceil(number));

    const getStatus = (progress: number) => {
        if (progress <= 0) {
            return "Pending";
        }
        if (progress > 0 && progress < 100) {
            return "Building";
        }
        return "Complete";
    };

    const getTimeRemaining = (second: number) => {
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
        <div className={`storybook-card-info ${theme}`}>
            <div className="graphic">
                <Image src={Graphic} alt={'graphic'} />
            </div>
            <div className='info'>
                    <h3>{title}</h3>
                    <p className="short-description text-bold">{shortDescription}</p>
                    <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            <div className="progress">
                <div className="header">
                    <Image src={IconSetting} alt={'icon setting'} />
                    <span>In Progress</span>
                </div>
                <div className="progress-bar">
                    <div className="current-value" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-info text-bold">
                    <div className="lable">
                        <div>Status:</div>
                        <div>Time remaining:</div>
                    </div>
                    <div className="text-gray">
                        <div>{getStatus(progress)}</div>
                        <div>{getTimeRemaining(timeComplete)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
