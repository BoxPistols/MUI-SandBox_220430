import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'

import StyleWrap from './components/Style'
import Top from 'layout/top'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="./" element={<Top />} />
        </Routes>
        <StyledEngineProvider injectFirst>
          {/* Nav */}
          <Link to="./">Top</Link>
          <StyleWrap>
            <Top />
          </StyleWrap>
        </StyledEngineProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
