import * as React from 'react'
import { createTheme, ThemeProvider, alpha, styled } from '@mui/material/styles'

import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
// import InputBase from '@mui/material/InputBase'
// import { OutlinedInputProps } from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
  // formStyle: string
  id?: string
  htmlFor?: string
  inLabelName?: string
  labelTitle?: string
  placeholder?: string
  helperText?: string
  icon?: any
  size?: 'small' | 'medium' | undefined
}

// テーマ
const theme = createTheme({
  palette: {
    neutral: {
      main: 'rgba(0, 10, 30, 0.8',
      contrastText: '#fff',
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
  }
}

const OriginLabel = styled(InputLabel)(({ theme }) => ({
  // '& .MuiInputLabel-root': {
  fontSize: '16px',
  color: alpha(theme.palette.text.primary, 0.8),
  // },
}))

const OriginTextField = styled(TextField)(({ theme }) => ({
  label: {
    fontSize: '14px',
    top: '3px',
    // userSelect: 'none'
  },
  'label + &': {
    marginTop: '20px',
    fontSize: '14px',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    fontSize: '14px',
    // Custom Color
    color: alpha(theme.palette.neutral.main, 0.85),
  },
  // ラベル調整
  '& label.Mui-focused': {
    color: 'green',
    fontSize: '14px',
  },
  '& .Mui-focused': {
    // color: theme.palette.secondary.main,
    // borderWidth: '1px',
    // '&.MuiFormHelperText-root': {
    //   color: `${alpha(theme.palette.primary.main, 1)}`,
    //   fontSize: '13px',
    // },
  },
  // フォーム状態調整
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'teal',
  // },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: `${alpha(theme.palette.primary.main, 0.5)}`,
    },
    // '&.Mui-focused fieldset': {
    //   borderColor: `${alpha(theme.palette.primary.main, 1)}`,
    // },
  },
  // '& .MuiOutlinedInput-input': {
  '& label[data-shrink=false]+.MuiInputBase-formControl ': {
    backgroundColor: `${alpha(theme.palette.primary.main, 0.5)}`,
    padding: '0 0 0.2em 0',
    maegin: '0 0 -0.2em 0',
  },
}))

export default function InputForm(props: Props) {
  const [name, setName] = React.useState('useState Value')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      {/* Custom Form */}
      <FormControl variant="standard" sx={{ margin: '24px 0 12px 0' }}>
        {/* ラベル */}
        {/* <InputLabel htmlFor={props.htmlFor} shrink sx={{}}> */}

        {/* <InputLabel htmlFor={props.id} shrink sx={{}}> */}
        <OriginLabel htmlFor={props.id} shrink sx={{}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <Box sx={{ margin: '0 4px 8px 0' }}>{props.labelTitle}</Box>
            <Box sx={{ margin: '-4px 0 0px 0' }}>{props.icon}</Box>
          </Box>
        </OriginLabel>
        {/* xxx */}
        <OriginTextField
          onChange={handleChange}
          value={name}
          defaultValue={name}
          id={props.id}
          label={props.inLabelName}
          placeholder={
            props.placeholder ? props.placeholder : '入力してください'
          }
          helperText={props.helperText}
          size={props.size ? props.size : 'small'}
        />
      </FormControl>
    </ThemeProvider>
  )
}

// Example @see: https://zenn.dev/ogakuzuko/articles/react-typescript-for-beginner
/*

// ③ props に直接型注釈を指定するパターン
const SampleComponent3 = (props: Props) => {
  return <div>Hello {props.formStyle}!</div>
}

// ④ React.VFC<P>のジェネリック型<P>として型を指定するパターン
const SampleComponent4: React.VFC<Props> = (props) => {
  return <div>Hello {props.formStyle}!</div>
}
*/

/* ---------- 呼び出す側 ---------- */
/*
export const Parent: React.VFC = () => {
  return (
    <div>
      <SampleComponent3 formStyle="TypeScript3" />
      <SampleComponent4 formStyle="TypeScript4" />
    </div>
  )
}
*/
