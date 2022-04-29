import * as React from 'react'
import ReactDOM from 'react-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import Demo from './demo'

// before
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>,
  document.querySelector('#root')
)

/**
 * Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
 */
// After
// import { createRoot } from 'react-dom/client'
// const container = document.getElementById('root')
// const root = createRoot(container) // createRoot(container!) if you use TypeScript
// root.render(
//   <StyledEngineProvider injectFirst>
//     <Demo />
//   </StyledEngineProvider>
// )
