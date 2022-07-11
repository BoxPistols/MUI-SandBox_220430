import { Stack, Button, Grid } from '@mui/material'
import React, { FC } from 'react'

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

export const FormSubmit: FC<Props> = ({
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
        {/* <Grid container spacing={3}> */}
        {cancel && (
          // <Grid item md={6}>
          <Button onClick={CancelSubmit} variant="outlined">
            {CancelButtonTitle ? CancelButtonTitle : 'キャンセル'}
          </Button>
          // </Grid>
        )}
        {/* <Grid item md={6}> */}
        <Button
          color={color ? color : 'primary'}
          variant={variant ? variant : 'contained'}
          size={size}
          onClick={() => event}
          {...props}
        >
          {ButtonTitle ? ButtonTitle : '保存'}
        </Button>
        {/* </Grid> */}
        {/* </Grid> */}
      </Stack>
    </>
  )
}
