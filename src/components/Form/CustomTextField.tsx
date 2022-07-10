import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import React, { FC, ReactNode } from 'react'

import {
  alpha,
  Button,
  Container,
  FormControl,
  InputLabel,
  Stack,
  styled,
  TextField,
  Tooltip,
} from '@mui/material'

//  Custom Label
const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '14px',
  position: 'initial',
  textAlign: 'left',
  transform: 'none',
}))

//  Custom Input Form
const CustomInput = styled(TextField)(({ theme }) => ({
  '.MuiInputBase-input.MuiOutlinedInput-input': {
    padding: '0.8em',
  },
  '.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall': {
    padding: '0.4em 0.6em',
    fontSize: '14px',
    height: '1.8em',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: `${alpha(theme.palette.primary.main, 0.5)}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${alpha(theme.palette.primary.main, 1)}`,
    },
    // エラー表示
    '&.Mui-error fieldset': {
      borderColor: theme.palette.error.main,
    },
    '&.Mui-error:hover fieldset': {
      borderColor: `${alpha(theme.palette.error.main, 0.5)}`,
    },
    '&.Mui-focused.Mui-error:hover fieldset': {
      borderColor: `${alpha(theme.palette.error.main, 1)}`,
    },
  },
}))

// Types
type Props = Partial<{
  // children: ReactNode
  id: string
  htmlFor: string
  formType: string
  TooltipTitleIconComponent?: ReactNode
  labelTitle: string
  required: boolean
  placeholder: string
  size: 'small' | 'medium' | undefined
  // helperText: string

  value: string
  icon: any
  tooltipTitle: any
  onChangeValue: any
}>

export const CustomTextField: FC<Props> = ({
  id,
  // children,
  TooltipTitleIconComponent,
  labelTitle,
  required,
  formType,
  placeholder,
  size,
}) => (
  <>
    <Container maxWidth="sm" sx={{ margin: 'auto', pt: 5 }}>
      <CustomTextField />

      <Stack spacing={3}>
        <FormControl>
          <CustomLabel shrink htmlFor={id}>
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
          </CustomLabel>
          <CustomInput
            required={required}
            id={id}
            type={formType}
            // {...register('email')}
            // error={'email' in errors}
            // helperText={errors.email?.message}
            placeholder={placeholder}
            size={size}
          />
        </FormControl>
      </Stack>
    </Container>
  </>
)
