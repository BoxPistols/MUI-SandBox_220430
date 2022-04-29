import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const theme = createTheme()
/**
 * @see: https://mui.com/material-ui/customization/typography/
 */

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}

export default function CustomTypo() {
  return (
    <div className="CustomTypo">
      <h1>CustomTypo</h1>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Responsive h3</Typography>
      </ThemeProvider>
    </div>
  )
}
