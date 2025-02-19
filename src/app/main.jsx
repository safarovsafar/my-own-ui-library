import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../app/styles/index.css'
import Layout from '../pages/layout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/home/home.jsx'
import Docs from '../pages/docs/docs.jsx'
import Comunity from '../pages/comunity/comunity.jsx'
import Galery from '../pages/galery/galery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home/>} />
         <Route path='galery' element={<Galery/>} />
         <Route path='docs' element={<Docs/>} />
         <Route path='comunity' element={<Comunity/>} />
       </Route>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
