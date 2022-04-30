import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// 追加
declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties
    'h2-sub': React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties
    'h2-sub'?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true
    'h2-sub': true
    // h3: false
  }
}

const theme = createTheme({
  typography: {
    poster: {
      color: 'red',
      // fontSize: 18,
      fontSize: 'calc(1rem/16 * 16)',
    },
    'h2-sub': {
      color: 'teal',
      // fontSize: 14,
      fontSize: '1.25rem',
    },
    // Disable h3 variant
    // h3: undefined,
    h3: {
      fontSize: 20,
    },
  },
})
/**
 * @see: https://mui.com/material-ui/customization/typography/
 */

/*
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}
*/

export default function CustomTypo() {
  return (
    <div className="CustomTypo">
      <h1>CustomTypo</h1>
      <ThemeProvider theme={theme}>
        <Typography variant="h2-sub">h2-sub</Typography>
        <Typography variant="poster">poster</Typography>
        <Typography variant="h3">Responsive h3</Typography>
      </ThemeProvider>
    </div>
  )
}
