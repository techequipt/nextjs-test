import { ReactNode } from 'react'

export type PipelineProps = {
  name: string,
  status: string,
  etaSeconds: number,
  stepName: string,
  stepDescription?: string,
  stepHelpTexts?: string[],
  image?: ReactNode,
}

export function Pipeline({
  name,
  image,
  stepHelpTexts,
  stepDescription,
}: PipelineProps) {
  return (
    <section
      className='pipeline rounded-lg px-8 py-4 
        border border-gray-300 bg-white
       dark:bg-cyan-900 dark:text-slate-50
        flex gap-4'
    >
      {image && (<div className='pipeline__image flex-none dark:saturate-50'>{image}</div>)}
      <div className='pipeline__info flex-1'>
        <h3 className='text-lg font-bold mb-4'>{name}</h3>
        {stepDescription && (<p className='font-bold mb-3'>{stepDescription}</p>)}
        {stepHelpTexts?.map(helpText => (
          <p key={helpText} className='text-sm text-slate-600 dark:text-slate-200'>
            {helpText}<br />
          </p>
        ))}
      </div>
    </section>
  )
}
