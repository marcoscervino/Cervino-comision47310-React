import './App.css'
import './components/navbar.css'
import './components/ItemListContainer.css'
import './components/CartWidget.jsx'
import './components/navbar.jsx'
import './components/ItemListContainer.jsx'

import { NavBar } from './components/navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer.jsx'
function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos!!! a la mejor tienda de bebidas"/>
    </>
  )
}

export default App
