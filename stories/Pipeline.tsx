import { ReactNode } from 'react'
import dayjs from './lib/dayjs'
import { HiCog } from 'react-icons/hi'

export type PipelineProps = {
  name: string,
  status: string,
  etaSeconds?: number,
  stepDescription?: string,
  stepHelpTexts?: string[],
  image?: ReactNode,
}

export function Pipeline({
  name,
  image,
  stepHelpTexts,
  stepDescription,
  status,
  etaSeconds,
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
      <div className='pipeline__progress sm:basis-60'>
        <h4 className='flex items-center gap-2 text-sm sm:text-base'>
          <HiCog className='motion-safe:animate-spin' />
          <strong>{isInProgress ? 'In Progress' : 'Done'}</strong>
        </h4>
        <ul className='list-none p-0 mt-4 text-xs md:text-sm lg:text-base'>
          <li className='flex'>
            <strong className='flex-none basis-28 md:basis-32 lg:basis-36'>Status:</strong>
            <strong className='text-slate-500 dark:text-slate-300'>{status}</strong>
          </li>
          {etaSeconds && (
            <li className='flex mt-1'>
              <strong className='flex-none basis-28 md:basis-32 lg:basis-36'>Time Remaining:</strong>
              <strong className='text-slate-500 dark:text-slate-300'>
                {dayjs.duration(etaSeconds, 'seconds').humanize().replace(/\b(?:a|an)\b/, '1')}
              </strong>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
