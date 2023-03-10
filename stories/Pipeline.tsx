import React from 'react';
import Logo from '../graphic.svg';
import Image from 'next/image';

import './Pipeline.css';

type PipelineModel = {
    name: string;
    rate: number;
    status: string;
    timeRemaine: string;
};

export const Pipeline: React.FC<PipelineModel> = (props) => {
    const { name = '', rate = 10, status = 'n/a', timeRemaine = 'unknown' } = props;
    
    const getProgress = () => {
        if (rate < 0) return 0;
        if (rate > 100) return 100;
        return rate;
    }

    return (
        <div className='pipeline'>
            <div className='left_panel'>
                <Image src={Logo} alt={'logo'} />

                <div className='content'>
                    <div className='title'>{name}</div>
                    <div className='subTitle'>Your {name} is being configured</div>
                    <p className='description'>The build process can take up to two hours.</p>
                    <p className='description'>We will send you an email when setup is complete.</p>
                </div>
            </div>
            <div className='right_panel'>
                <div className='title'>In Progress</div>
                <div className='progress'>
                    <div className='active' style={{ width: getProgress() + '%' }}></div>
                </div>

                <div className='status'>
                    <div className='label'>Status:</div>
                    <div className='value'>{status}</div>
                </div>
                <div className='status'>
                    <div className='label'>Time remaining:</div>
                    <div className='value'>{timeRemaine}</div>
                </div>
            </div>
        </div>

    );
};
