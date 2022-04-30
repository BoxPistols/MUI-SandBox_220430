import React from 'react'
import InputForm from './components/InputForm'
import Box from '@mui/material/Box'

export default function SandBox() {
  return (
    <div>
      <p>SandBox</p>
      <Box
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        <InputForm
          labelTitle="全部入り"
          inLabelName="動くラベル"
          helperText="補足ヘルパーです"
          id="sf0"
        />
        <InputForm
          id="sf1"
          labelTitle="small"
          size="small"
          helperText="ヘルパー"
        />
        <InputForm
          id="sf2"
          labelTitle="medium"
          size="medium"
          helperText="ヘルパー"
        />
        <InputForm id="sf3" labelTitle="サイズ無指定" helperText="ヘルパー" />

      </Box>
    </div>
  )
}
