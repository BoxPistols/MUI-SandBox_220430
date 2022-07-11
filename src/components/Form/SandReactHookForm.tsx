import React, { ElementType, FC, ReactNode } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  FormControl,
  Button,
  Container,
  Box,
  Stack,
  TextField,
} from '@mui/material'
import { CustomLabel } from './CustomLabel'
import { FormSubmit } from './FormSubmit'

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
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      'パスワードが弱いです。英数字、記号@$!%*#のいずれかを含めてください'
    ),
})

// フォームの型
interface SampleFormInput {
  email: string
  name: string
  password: string
}

export const SandReactHookForm: FC = ({}) => {
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
      <h2>SandReactHookForm</h2>
      <Container sx={{ margin: 'auto', pt: 5, maxWidth: 500 }}>
        {/* <Box sx={{ width: '100%', display: 'flex' }}> */}
        <Stack spacing={3}>
          <FormControl required>
            <CustomLabel
              labelTitle="メールアドレス"
              id="test"
              TooltipTitleIconComponent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam?"
            />

            <TextField
              id="test"
              placeholder="入力してください"
              type="email"
              // RHF
              error={'email' in errors}
              helperText={errors.email?.message}
              {...register('email')}
              defaultValue="aaa@aaa.com"
            />
          </FormControl>

          <FormControl required>
            <CustomLabel
              id="name"
              labelTitle="おなまえ"
              TooltipTitleIconComponent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam?"
            />
            <TextField
              id="name"
              placeholder="入力してください"
              type="text"
              // RHF
              error={'name' in errors}
              helperText={errors.name?.message}
              {...register('name')}
              defaultValue="佐藤太郎"
            />
          </FormControl>

          <FormControl required>
            <CustomLabel
              id="password"
              labelTitle="パスワード"
              TooltipTitleIconComponent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam?"
            />

            <TextField
              id="password"
              placeholder="入力してください"
              type="password"
              // RHF
              error={'password' in errors}
              helperText={errors.password?.message}
              {...register('password')}
              defaultValue="ABCDEFG!000"
            />
          </FormControl>

          <FormControl>
            <FormSubmit
              onClick={handleSubmit(onSubmit)}
              ButtonTitle="登録"
              // has cancel button
              // cancel
              // CancelSubmit={() => console.log('cancel test')}
            />
          </FormControl>
        </Stack>
        {/* </Box> */}
      </Container>
    </>
  )
}
