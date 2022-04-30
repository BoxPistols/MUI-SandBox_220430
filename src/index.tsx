import * as React from 'react'
// import ReactDOM from 'react-dom'
import StyleWrap from './Style'
import { StyledEngineProvider } from '@mui/material/styles'
import Form from './Form'
import CustomForm from './CustomForm'
import Demo from './Typography'
import CustomTypo from './CustomTypo'

// After
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')

if ( container ) {
  const root = createRoot(container);
  root.render(  <StyledEngineProvider injectFirst>
    <StyleWrap rightSide="">
      <CustomForm />
      <hr />
      <Form />
      <hr />
      <CustomTypo />
      <hr />
      <Demo />
    </StyleWrap>
  </StyledEngineProvider>);
}
// before
// ReactDOM.render(
//   <StyledEngineProvider injectFirst>
//     <StyleWrap>
//       <CustomForm />
//       <hr />
//       <Form />
//       <hr />
//       <CustomTypo />
//       <hr />
//       <Demo />
//     </StyleWrap>
//   </StyledEngineProvider>,
//   document.querySelector('#root')
// )
