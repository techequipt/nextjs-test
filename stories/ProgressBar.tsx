export type ProgressBarProps = {
  progressPercent: number,
  trackColorHex?: string,
  trackFullColorHex?: string,
}

export function ProgressBar({
  progressPercent,
  trackColorHex = '#ffb96a',
  trackFullColorHex = '#14A24D',
}: ProgressBarProps) {
  return (
    <div className='progress h-2 md:h-3 rounded-full bg-gray-300 dark:bg-gray-800'>
      <div
        className='progress__track h-full rounded-full dark:opacity-70'
        role='progressbar'
        aria-valuenow={progressPercent}
        style={{
          width: `${progressPercent}%`,
          backgroundColor: progressPercent === 100
            ? trackFullColorHex
            : trackColorHex,
        }} />
    </div>
  )
}
