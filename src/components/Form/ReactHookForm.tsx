import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

import React, { ElementType, FC, ReactNode } from 'react'
import {
  alpha,
  Button,
  Container,
  FormControl,
  InputLabel,
  // InputBase,
  Stack,
  styled,
  TextField,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// バリデーションルール
const schema = yup.object({
  email: yup
    .string()
    .required('必須です')
    .email('正しいメールアドレス入力してね'),
  // name: yup.string().required('必須です'),
  // password: yup
  //   .string()
  //   .required('必須です')
  //   .min(6, '6文字以上で入力してください')
  //   .matches(
  //     // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).*$/,
  //     'パスワードが弱いです。英数字、記号@$!%*#のいずれかを含めてください'
  //   ),
})

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

// ToolTip

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
  helperText: string

  size: 'small' | 'medium' | undefined
  // tooltip: boolean
  value: string
  // placement: TooltipProps['placement']
  // TODO: 型付け
  icon: any
  tooltipTitle: any
  onChangeValue: any
}>

// フォームの型
interface SampleFormInput {
  email: string
  name: string
  password: string
}

export const ReactHookForm: FC<Props> = ({
  id,
  // children,
  TooltipTitleIconComponent,
  labelTitle,
  required,
  formType,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInput>({
    resolver: yupResolver(schema),
  })
  /**
  const schema: OptionalObjectSchema<{
    email: RequiredStringSchema<string | undefined, AnyObject>;
    }, AnyObject, TypeOfShape<{
    email: RequiredStringSchema<string | undefined, AnyObject>;
  }>>
  */

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log(data)
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ margin: 'auto', pt: 5 }}>
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
              {...register('email')}
              error={'email' in errors}
              helperText={errors.email?.message}
            />
          </FormControl>

          {/* <FormControl>
            <CustomLabel shrink htmlFor="addName">
              お名前
            </CustomLabel>
            <CustomInput
              id="addName"
              required
              type="name"
              {...register('name')}
              error={'name' in errors}
              helperText={errors.name?.message}
            />
          </FormControl> */}

          {/* <FormControl>
            <CustomLabel shrink htmlFor="addPass">
              パスワード
            </CustomLabel>
            <CustomInput
              id="addPass"
              required
              type="password"
              {...register('password')}
              error={'password' in errors}
              helperText={errors.password?.message}
            />
          </FormControl> */}

          <FormControl>
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={handleSubmit(onSubmit)}
            >
              作成
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </>
  )
}
