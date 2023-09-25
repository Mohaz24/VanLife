import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VansDetail from "./pages/Vans/VansDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import Layout from "./components/Layout"

import "./server"

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />  
          <Route path="vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />
          <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} /> 
          <Route path="Income" element={<Income />} /> 
          <Route path="Reviews" element={<Reviews />} /> 
          </Route>
          </Route>
       </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);