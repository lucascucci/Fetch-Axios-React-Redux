
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './containers/Topbar'
import ProducListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'
import NavBar from './containers/NavBar';

import Equipo from './containers/Equipo';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      < Topbar />
      
      <Routes>

        <Route exact path= "/Equipo" element={<Equipo/>}/>
        <Route exact path= "/ProducListing" element={<ProducListing/>} />
        <Route exact path= "/Producto" element={<ProducListing/>} />
        <Route exact path="/product/:productId" element={<ProductDetail/>} />


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
