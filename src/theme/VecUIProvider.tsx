import { CssBaseline } from './CssBaseline'

import type { ReactNode } from 'react'
import React from 'react'

interface VecUIProviderProps {
  children?: ReactNode
}

export const VecUIProvider = (props: VecUIProviderProps) => {
  const { children } = props

  return (
    <>
      <CssBaseline />
      {children}
    </>
  )
}
