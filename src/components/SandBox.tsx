import * as React from 'react'
import InputForm from 'components/Form/InputForm'
import Box from '@mui/material/Box'
// import DraftsIcon from '@mui/icons-material/Drafts'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

// import CustomTypo from './CustomTypo'

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`

export default function SandBox() {
  const [name, setName] = React.useState('useState Value')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  // console.log(name);

  return (
    <div>
      {/* <Tooltip title={longText} placement="right-start"> */}
      <Tooltip title={longText} arrow placement="right-start">
        <p>Default Width [300px]</p>
      </Tooltip>
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
          id="sf1"
          labelTitle="コンパクト"
          size="small"
          icon={<InfoOutlinedIcon />}
          tooltip
          tooltipTitle={longText}
          placeholder="プレースです"
          // helperText="補足ヘルパーです"
          onChangeValue={handleChange}
          value={name}
        />
        <InputForm
          labelTitle="テストラベル日本語"
          inLabelName="動くラベル"
          id="sf0"
          // icon={<DraftsIcon />}
          tooltip
          tooltipTitle={longText}
          helperText="補足ヘルパーです"
          // placement="top-end"
        />
        <InputForm
          id="sf2"
          labelTitle="medium"
          size="medium"
          // helperText="ヘルパー"
        />
        <InputForm id="sf3" labelTitle="サイズ無指定" helperText="ヘルパー" />
      </Box>
    </div>
  )
}
