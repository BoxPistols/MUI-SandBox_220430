import React from 'react'
import { Grid, Box, Paper, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function StyleWrap({
  children,
  // rightSide,
}: {
  children: React.ReactNode
  // rightSide: React.ReactNode
}) {
  return (
    <Box sx={{}}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Item>{children}</Item>
        </Grid>
        {/* <Grid item xs={4}>
          <Item>{rightSide}</Item>
        </Grid> */}
      </Grid>
    </Box>
  )
}
