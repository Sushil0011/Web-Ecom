import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/style.scss'
import './styles/home.scss';
import './mediaquary.scss'
import { BrowserRouter as Router  ,Routes,Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'
import Footer from './components/Footer';
function App() {

  
return(

  <Router>

  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/about' element={<About/>}/>

    <Route path='/contact' element={<Contact/>}/>
    <Route path='/singlproduct/:id' element={<SingleProduct/>}/>
    <Route path='*' element={<Error/>}/>


  </Routes>
  <Footer/>
  </Router>
)
 
}

export default App
