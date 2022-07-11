import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import React, { FC, ReactNode } from 'react'

import { Button, InputLabel, styled, Tooltip } from '@mui/material'

// Types
type Props = Partial<{
  id: string
  htmlFor: string
  TooltipTitleIconComponent?: ReactNode
  labelTitle: string
}>

const Label = styled(InputLabel)(({ theme }) => ({
  fontSize: '14px',
  position: 'initial',
  textAlign: 'left',
  transform: 'none',
}))

export const CustomLabel: FC<Props> = ({
  id,
  labelTitle,
  TooltipTitleIconComponent,
}) => {
  return (
    <>
      <Label shrink htmlFor={id}>
        {labelTitle}
        {TooltipTitleIconComponent && (
          <Tooltip
            title={TooltipTitleIconComponent}
            arrow
            placement="top-start"
          >
            <Button
              sx={{
                margin: '0 0 .2em 0',
                '&.MuiButton-root': {
                  padding: '6px',
                  minWidth: 'fit-content',
                },
              }}
            >
              <HelpOutlineIcon fontSize="small" />
            </Button>
          </Tooltip>
        )}
      </Label>
    </>
  )
}
