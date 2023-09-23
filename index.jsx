import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import Host from "./pages/Host"
import Layout from "./components/Layout"

import "./server"

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />  
          <Route path="/vans" element={<Vans server="/api/vans" />} />
          <Route path="/host" element={<Host />} /> 
          </Route>
       </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);