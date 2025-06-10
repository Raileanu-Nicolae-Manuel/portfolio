import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import RootLayout from './pages/root.layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<div>Dashboard</div>}/>
          <Route path='about' element={<div>About</div>}/>
          <Route path='projects'>
            <Route index element={<div>Projects</div>}/>
            <Route path=':project' element={<div>Project</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
