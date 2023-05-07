
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './containers/Topbar'
import ProducListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'


function App() {

  return (
    <>
    <BrowserRouter>
    
      < Topbar />
      
      <Routes>

        <Route></Route>
        <Route exact path= "" element={<ProducListing/>} />
        <Route exact path="/product/:productId" element={<ProductDetail/>} />


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
