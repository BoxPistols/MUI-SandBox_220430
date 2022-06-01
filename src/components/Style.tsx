import React from 'react'
import { Grid, Box, Paper, styled, Container } from '@mui/material'

const Wrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  margin: 'auto',
}))

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function StyleWrap({
  children,
}: {
  children: React.ReactNode
  // rightSide: React.ReactNode
}) {
  return (
    <>
      <Container maxWidth="lg">
        <Wrap>
          <Box sx={{ margin: 'auto' }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Item>{children}</Item>
              </Grid>
              {/*
              <Grid item xs={4}>
                <Item>{rightSide}</Item>
              </Grid>
              */}
            </Grid>
          </Box>
        </Wrap>
      </Container>
    </>
  )
}
