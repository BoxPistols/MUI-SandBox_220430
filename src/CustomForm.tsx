import * as React from 'react'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: 'green',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'green',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'red',
//     },
//     '&:hover fieldset': {
//       borderColor: 'yellow',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'green',
//     },
//   },
// })

const CustomInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2.4),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '8px 10px 6px',
    // position: 'relative',
    // backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      // 'background-color',
      // 'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
    helperText="Please enter your name"
  />
))(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: 'teal',
    position: 'initial',
    fontSize: '1rem',
    transform: 'null',
    '&.Mui-focused': {
      color: 'red',
    },
    '&.MuiInputLabel-animated': {
      color: 'blue',
    },
  },
  '& .MuiInputBase-input, .MuiFilledInput-input': {
    padding: '0.5em',
    height: '1rem',
  },
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    // transition: theme.transitions.create([
    //   'border-color',
    //   'background-color',
    //   'box-shadow',
    // ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      position: 'initial',
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
      transform: 'null',
    },
  },
}))

// const ValidationTextField = styled(TextField)({
//   '& input:valid + fieldset': {
//     borderColor: 'green',
//     borderWidth: 2,
//   },
//   '& input:invalid + fieldset': {
//     borderColor: 'red',
//     borderWidth: 2,
//   },
//   '& input:valid:focus + fieldset': {
//     borderLeftWidth: 6,
//     padding: '4px !important', // override inline-style
//   },
// })

export default function CustomizedInputs() {
  return (
    <Box>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          Custom Form
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {/* Custom Form */}
        <FormControl variant="standard">
          <InputLabel htmlFor="custom-input" shrink>
            <Typography variant="body1">Custom Form</Typography>
          </InputLabel>
          <CustomInput
            id="custom-input"
            placeholder="Placeholder"
            // defaultValue="defaultValue"
          />
        </FormControl>
        {/* Field */}
        <RedditTextField
          label="Reddit"
          // defaultValue="react-reddit"
          placeholder="react-reddit"
          id="reddit-input"
          variant="filled"
          style={{ marginTop: 11 }}
        />
        <TextField
          helperText="Please enter your name"
          id="demo-helper"
          label="Name"
        />
        {/* 

        <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
        <ValidationTextField
          label="CSS validation style"
          required
          variant="outlined"
          defaultValue="Success"
          id="validation-outlined-input"
        /> */}
      </Box>
    </Box>
  )
}
