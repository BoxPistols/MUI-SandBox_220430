import * as React from 'react'
import InputForm from 'components/Form/InputForm'
import { ReactHookForm } from 'components/Form/ReactHookForm'
import { Box, Stack, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { CustomTextField2 } from './Form/CustomTextField2'

// import CustomTypo from './CustomTypo'

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.`

export default function SandBox2() {
  const [name, setName] = React.useState('useState Value')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  console.log(name)

  return (
    <>
      <h1>SandBox-2</h1>

      <Stack spacing={1}>
        <h2>CustomTextField2</h2>

        <CustomTextField2
          id="テスト"
          labelTitle="ラベルテスト"
          onChangeValue={handleChange}
          value={name}
          helperText="案内をサポートしますよ"
          TooltipTitleIconComponent={
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              laboriosam?
            </Typography>
            // size="small"
          }
        />
      </Stack>
    </>
  )
}
