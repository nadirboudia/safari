import {BrowserRouter , Routes , Route} from 'react-router-dom'
import "./App.css";
import Header from "./components/Header";
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Tourz from "./Pages/Tour/Tourz"
import Register from './Pages/Forms/Register'
import Login from './Pages/Forms/Login'


function App() {

  
  return(
      <BrowserRouter>
        <Header/> 
<Routes>

   <Route path='/' element={<Home />} />
         <Route path='/tourz/:id' element={<Tourz />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />


</Routes>
   <Footer/>
      </BrowserRouter>
      
  )
   
}

export default App;
