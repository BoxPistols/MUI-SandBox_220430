import React, { ElementType, FC, ReactNode, useState } from 'react'

import { CustomTextField2 } from 'components/Form/CustomTextField2'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormControl, Button, Container, Box, Stack } from '@mui/material'

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

  // const [name, setName] = useState('useState Value')
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value)
  // }
  // console.log(name)

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
          <FormControl>
            <CustomTextField2
              id="テスト"
              labelTitle="メール入力"
              // onChangeValue={handleChange}
              // value={name}
              placeholder="入力してください"
              TooltipTitleIconComponent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam?"
              // size="small"
              // RHF
              // required
              formType="email"
              // RHF
              error={'email' in errors}
              helperText={errors.email?.message}
              {...register('email')}
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
        {/* </Box> */}
      </Container>
    </>
  )
}
