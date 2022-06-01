import * as React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import StyleWrap from './components/Style'
import Top from 'layout/top'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          {/* Nav */}
          <StyleWrap>
            <Top />
          </StyleWrap>
        </StyledEngineProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
