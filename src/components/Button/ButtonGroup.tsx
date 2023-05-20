import { Stack, Grid } from '@mui/material'
import React, { FC, ReactNode } from 'react'

// Types
type Props = Partial<{
  ButtonTitle: string
  children: ReactNode
}>

export const ButtonGroup: FC<Props> = ({
  children,
}) => {
  return (
    <>
      <Stack
        sx={{
          mt: 3,
          display: 'grid',
          justifyContent: 'flex-end',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(240px, 320px), 320px))',
          gap: '1rem',
        }}
      >
        {children}
      </Stack>
    </>
  )
}
