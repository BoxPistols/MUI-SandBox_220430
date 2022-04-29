import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// Create Theme Object
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'

// Create Theme Object
const theme = createTheme({
  typography: {
    /* Test origin */
    // origin: {
    //   fontStyle: "italic",
    //   fontWeight: "600"
    // },
    body1: {
      color: 'teal',
    },
  },
})

export default function Types() {
  return (
    // Create Theme Object
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        {/* Test origin */}
        {/* <Typography variant="origin" component="div" gutterBottom>
          italic
        </Typography> */}
        <Typography variant="h1" component="div" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom component="div">
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom component="div">
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
    </ThemeProvider>
  )
}
