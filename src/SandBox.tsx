import React from 'react'
import InputForm from './components/InputForm'
import Box from '@mui/material/Box'
import DraftsIcon from '@mui/icons-material/Drafts'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

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
          labelTitle="テスト"
          inLabelName="動くラベル"
          // helperText="補足ヘルパーです"
          id="sf0"
          icon={<DraftsIcon />}
        />

        <InputForm
          id="sf1"
          labelTitle="コンパクト"
          size="small"
          // helperText="ヘルパー"
          icon={<InfoOutlinedIcon />}
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
