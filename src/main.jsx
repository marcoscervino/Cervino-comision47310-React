import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { NavBar } from './components/NavBar/Navbar.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartProvider, { CartContext } from './context/cartContext.jsx'
import Cart from './components/routes/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* <CartContext.Provider value={[]}> */}
      <CartProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<App />} />
          <Route path="/category/:category" element={<>
            <NavBar />
            <ItemListContainer />
          </>
          }
          />
          <Route path="/item/:id" element={<>
            <NavBar />
            <ItemDetailContainer />
          </>} />

          <Route path="/cart" element={<>
          <NavBar />
          <Cart/>
          </>}
          />
        </Routes>

      </BrowserRouter>
    {/* </CartContext.Provider> */}
    </CartProvider>
  </React.StrictMode>,
  //1:31:52 zoom clase 11
)
