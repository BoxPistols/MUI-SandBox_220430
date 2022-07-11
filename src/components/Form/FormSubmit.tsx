import { Button } from '@mui/material'
import React, { BaseSyntheticEvent, FC, ReactNode } from 'react'

// Types
type Props = Partial<{
  ButtonTitle: string
  /** Add Type */
  color: 'primary' | 'secondary' | 'success'
  size: 'small' | 'medium' | 'large'
  variant: any
  onClick: any
  // onClick: BaseSyntheticEvent<object, any, any> | undefined
  // onClick: (event: React.FormEvent<HTMLFormElement>) => void
}>

export const FormSubmit: FC<Props> = ({
  ButtonTitle,
  onClick,
  color,
  variant,
  size,
}) => {
  return (
    <>
      <Button
        color={color ? color : 'primary'}
        variant={variant ? variant : 'contained'}
        size={size}
        onClick={onClick}
      >
        {ButtonTitle ? ButtonTitle : '保存'}
      </Button>
    </>
  )
}
