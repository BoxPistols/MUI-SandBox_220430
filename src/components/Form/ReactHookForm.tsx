import React from 'react'
import {
  alpha,
  Button,
  Container,
  FormControl,
  InputLabel,
  InputBase,
  Stack,
  styled,
  TextField,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Props = {
  // formStyle: string
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
    .required('必須だよ')
    .email('正しいメールアドレス入力してね'),
  name: yup.string().required('必須だよ'),
  password: yup
    .string()
    .required('必須だよ')
    .min(6, '少ないよ')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      'パスワード弱いよ'
    ),
})

//  Re Design
const OriginLabel = styled(InputLabel)(({ theme }) => ({
  // MuiFormLabel-root-MuiInputLabel-root
  // '& .MuiFormLabel-root.MuiInputLabel-root': {},
  fontSize: '14px',
  position: 'initial',
  // display: 'flex',
  // width: 'calc(133% - 24px)', // MUIデフォルトのwidthの合わせる
  textAlign: 'left',
  // backgroundColor: 'tomato',
  transform: 'none',
  // color: alpha(theme.palette.text.primary, 0.8),
  // },
}))

// const BootstrapInput = styled(TextField)(({ theme }) => ({
const BootstrapInput = styled(TextField)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
  },
  // '& .MuiFormControl-root': {
  //   margin: 0,
  //   padding: 0,
  // },
  // '& .MuiInputBase-input': {
  //   fontSize: 16,
  // },
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
            <OriginLabel shrink htmlFor="exp">
              メールアドレス Label / ? / 任意
            </OriginLabel>

            <BootstrapInput
              id="exp"
              required
              type="email"
              {...register('email')}
              error={'email' in errors}
              helperText={errors.email?.message}
            />

            {/* <TextField
              id="exp"
              required
              type="email"
              {...register('email')}
              error={'email' in errors}
              helperText={errors.email?.message}
            /> */}
          </FormControl>

          <FormControl>
            <label>お名前</label>
            <TextField
              required
              {...register('name')}
              error={'name' in errors}
              helperText={errors.name?.message}
            />
          </FormControl>

          <FormControl>
            <label>パスワード</label>
            <TextField
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
