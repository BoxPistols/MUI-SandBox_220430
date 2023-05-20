// export const FormButton = () => {
import { Stack, Button, Grid } from '@mui/material'
import React, { FC } from 'react'
import { ButtonGroup } from './ButtonGroup'
// Types
type Props = Partial<{
  ButtonTitle: string
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  size: 'small' | 'medium' | 'large'
  variant: 'contained' | 'outlined' | 'text'
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  onClick: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
  // cancel
  CancelButtonTitle: string
  cancel: boolean
  CancelSubmit: () => void
}>

export const FormButton: FC<Props> = ({
  ButtonTitle,
  event,
  color,
  variant,
  size,
  // onClick,
  cancel,
  CancelButtonTitle,
  CancelSubmit,
  ...props
}) => {
  return (
    <>
      <ButtonGroup>
        {cancel && (
          <Button onClick={CancelSubmit} variant="outlined">
            {CancelButtonTitle ? CancelButtonTitle : 'キャンセル'}
          </Button>
        )}
        <Button
          color={color ? color : 'primary'}
          variant={variant ? variant : 'contained'}
          size={size}
          onClick={() => event}
          {...props}
        >
          {ButtonTitle ? ButtonTitle : '保存'}
        </Button>
      </ButtonGroup>
    </>
  )
}
