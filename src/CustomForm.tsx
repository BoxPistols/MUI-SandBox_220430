import * as React from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
// import { OutlinedInputProps } from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function CustomizedInputs() {
  const [name, setName] = React.useState('Cat in the Hat')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <Box>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          Custom Form
        </Typography>
      </Box>
      <Box
        component="form"
        // noValidate
        // sx={{
        //   display: 'grid',
        //   gridTemplateColumns: { sm: '1fr 1fr' },
        //   gap: 2,
        // }}
      >
        {/* Custom Form */}
        <FormControl variant="standard" sx={{ margin: '24px 0 12px 0' }}>
          {/* ラベル */}
          <InputLabel
            htmlFor="custom-input"
            shrink
            sx={{ margin: '-20px 0 0 0', userSelect: 'none' }}
          >
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              ラベル名
            </Typography>
          </InputLabel>
          {/* xxx */}
          <TextField
            id="custom-input"
            // label="Name"
            value={name}
            onChange={handleChange}
            placeholder="プレースホルダー"
            helperText="案内をサポートしますよ"
            size="small"
            sx={{ fontSize: '14px' }}
          />
        </FormControl>
        {/* カスタム２ */}
        <FormControl variant="standard" sx={{ margin: '8px 0 12px 12px' }}>
          <InputLabel
            htmlFor="custom2"
            shrink
            sx={{ userSelect: 'none' }}
          >
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              ラベル名
            </Typography>
          </InputLabel>
          <CustomInput
            placeholder="プレースホルダー"
            defaultValue="Success"
            id="custom2"
            />
            <Typography variant="body2" sx={{ fontSize: '14px' }}>
              Typographyサポート
            </Typography>
        </FormControl>

        {/* {name} */}
      </Box>
    </Box>
  )
}

// Design
const CustomInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2.4),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    border: '1px solid #ced4da',
    fontSize: 14,
    width: 'auto',
    padding: '8px 10px 6px',
    // backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      // 'background-color',
      // 'box-shadow',
    ]),
    '&:focus': {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))