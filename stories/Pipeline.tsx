import { ReactNode } from 'react'
import dayjs from './lib/dayjs'
import { HiCog, HiBadgeCheck } from 'react-icons/hi'
import { ProgressBar } from './ProgressBar'

export type PipelineProps = {
  name: string,
  status: string,
  etaSeconds?: number,
  stepDescription?: string,
  stepHelpTexts?: string[],
  image?: ReactNode,
  progressPercent?: number,
}

export function Pipeline({
  name,
  image,
  stepHelpTexts,
  stepDescription,
  status,
  etaSeconds,
  progressPercent,
}: PipelineProps) {
  const isInProgress = status !== 'done'

  return (
    <div
      className='pipeline rounded-lg px-8 py-8 sm:py-4 
        border border-gray-300 bg-white
       dark:bg-cyan-900 dark:text-slate-50
        flex gap-4 flex-col sm:flex-row md:gap-8'
    >
      {image && (
        <div className='pipeline__image flex-initial dark:saturate-50 max-w-[20%] object-contain'>
          {image}
        </div>
      )}
      <div className='pipeline__info flex-auto'>
        <h3 className='text-lg font-bold mb-2 sm:mb-4 md:mb-5'>{name}</h3>
        {stepDescription && (<p className='font-bold mb-3 text-sm md:text-base'>{stepDescription}</p>)}
        <ul className='list-none p-0'>
          {stepHelpTexts?.map(helpText => (
            <li key={helpText} className='m-0 text-xs md:text-sm text-slate-500 dark:text-slate-300'>
              {helpText}
            </li>
          ))}
        </ul>
      </div>
      <div className='pipeline__progress sm:basis-64'>
        <h4 className='flex items-center gap-2 text-sm sm:text-base mb-3'>
          {isInProgress
            ? (<><HiCog className='motion-safe:animate-spin' /><strong>In Progress</strong></>)
            : (<><HiBadgeCheck className='text-green-600' /><strong>Completed</strong></>)
          }
        </h4>
        {progressPercent && (<div className='w-60'><ProgressBar progressPercent={progressPercent} /></div>)}
        <ul className='list-none p-0 mt-4 text-xs md:text-sm lg:text-base'>
          <li className='flex'>
            <strong className='flex-none basis-28 md:basis-32 lg:basis-36'>Status:</strong>
            <strong className='text-slate-500 dark:text-slate-300 capitalize'>{status}</strong>
          </li>
          {etaSeconds && (
            <li className='flex mt-1'>
              <strong className='flex-none basis-28 md:basis-32 lg:basis-36'>Time Remaining:</strong>
              <strong className='text-slate-500 dark:text-slate-300'>
                {dayjs.duration(etaSeconds, 'seconds').humanize().replace(/(?:a|an) (s|m|h)/, '1 $1')}
              </strong>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
