import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemDetailContanier } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { Categoria } from './components/routes/Categoria.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path="/productos/:id" element={<ItemDetailContanier/>} />
      <Route exact path="/categoria/:categoria" element={<Categoria/>} />
    </Routes>
    </BrowserRouter>


  </React.StrictMode>,
)
