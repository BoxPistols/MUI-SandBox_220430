import * as React from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
// import { OutlinedInputProps } from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {/* Custom Form */}
        <FormControl variant="standard" sx={{ margin: '24px 0 12px 0' }}>
          <InputLabel
            htmlFor="custom-input"
            shrink
            sx={{ margin: '-24px 0 0 0' }}
          >
            <Typography variant="body1">Custom Form</Typography>
          </InputLabel>
          {/* <CustomInput
            id="custom-input"
            placeholder="Placeholder"
            // defaultValue="defaultValue"
          /> */}
          {/* xxx */}
          <TextField
            id="custom-input"
            label="Name"
            value={name}
            onChange={handleChange}
          />
        </FormControl>
        {name}
        {/* Field */}
      </Box>
    </Box>
  )
}
