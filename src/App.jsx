
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './containers/Header'
import ProducListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      
      <Routes>


        <Route exact path= "" element={<ProducListing/>} />
        <Route exact path="/product/:productId" element={<ProductDetail/>} />


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
