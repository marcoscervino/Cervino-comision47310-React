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
import './components/routes/cart.css'
import './components/Footer/footer.css'
import Footer from './components/footer/Footer.jsx'
import CartOrders from './components/CartOrders/CartOrders.jsx'
import Nosotros from './components/Nosotros/Nosotros.jsx'


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
            <Footer/>
          </>
          }
          />
          <Route path="/item/:id" element={<>
            <NavBar />
            <ItemDetailContainer />
            <Footer/>
          </>} />

          <Route path="/cart" element={<>
          <NavBar />
          <Cart/>
          <Footer/>
          </>}
          />

          <Route path="/checkout" element={<>
          <NavBar />
          <CartOrders/>
          <Footer/>
          </>}
          />

          <Route path="/nosotros" element={<>
          <NavBar />
          <Nosotros/>
          <Footer/>
          </>}
          />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
