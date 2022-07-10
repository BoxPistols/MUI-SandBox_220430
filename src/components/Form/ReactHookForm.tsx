import React from 'react'
import {
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
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Props = {
  id?: string
  htmlFor?: string
  inLabelName?: string
  labelTitle?: string
  placeholder?: string
  helperText?: string
  size?: 'small' | 'medium' | undefined
  tooltip?: boolean
  // placement?: TooltipProps['placement']
  value?: string
  // TODO: 型付け
  icon?: any
  tooltipTitle?: any
  onChangeValue?: any
}

// フォームの型
interface SampleFormInput {
  email: string
  name: string
  password: string
}

// バリデーションルール
const schema = yup.object({
  email: yup
    .string()
    .required('必須です')
    .email('正しいメールアドレス入力してね'),
  name: yup.string().required('必須です'),
  password: yup
    .string()
    .required('必須です')
    .min(6, '6文字以上で入力してください')
    .matches(
      // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).*$/,
      'パスワードが弱いです。英数字、記号@$!%*#のいずれかを含めてください'
    ),
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
    padding: '0.85em',
  },
}))

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInput>({
    resolver: yupResolver(schema),
  })

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
            <CustomLabel shrink htmlFor="mailAddress">
              メールアドレス Label / ? / 任意
            </CustomLabel>
            <CustomInput
              id="mailAddress"
              required
              type="email"
              {...register('email')}
              error={'email' in errors}
              helperText={errors.email?.message}
            />
          </FormControl>

          <FormControl>
            <CustomLabel htmlFor="addName">お名前</CustomLabel>
            <CustomInput
              id="addName"
              required
              type="name"
              {...register('name')}
              error={'name' in errors}
              helperText={errors.name?.message}
            />
          </FormControl>

          <FormControl>
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
          </FormControl>

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
