import React from 'react'
import { Decorator } from '@storybook/react'

export const DarkModeDecorator: Decorator = (story, context) => {
  return (
    <div className={context.globals.themeMode === 'dark' ? 'dark' : ''}>
      {story()}
    </div>
  )
}
