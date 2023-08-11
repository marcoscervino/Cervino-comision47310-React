import './App.css'
import './components/NavBar/NavBar.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/CartWidget/CartWidget.css'
import './components/CartWidget/CartWidget.jsx'
import './components/NavBar/Navbar.jsx'
import './components/ItemListContainer/ItemListContainer.jsx'
import './components/PromosMsj/PromosMsj.jsx'

import { NavBar } from './components/NavBar/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { PromosMsj } from './components/PromosMsj/PromosMsj.jsx'
import { ItemDetailContanier } from './components/ItemDetailContainer/ItemDetailContainer'
function App() {

  return (
    <>
      <NavBar/>
      <main>
      <PromosMsj/>
      <ItemListContainer/>
      </main>
    </>
  )
}

export default App
