import {Link} from "react-router-dom"

function Navbar({toggle , setToggle}) {
  return (
    <nav  style={{
  clipPath: toggle && 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)' 
       
}} className="navbar">
        <ul  className="navbar-links">
            
            <Link to='/' onClick={()=>{setToggle(false)}} className="navbar-item"> <i class="bi bi-house-fill"></i>     Home</Link>
          
            <Link  to='/about' onClick={()=>{setToggle(false)}}  className="navbar-item">    <i class="bi bi-bank2"></i> About</Link>
          
            <Link to='/register' onClick={()=>{setToggle(false)}} className="navbar-item">    <i class="bi bi-person-plus-fill"></i> Register</Link>
             
            <Link  to= '/login' onClick={()=>{setToggle(false)}} className="navbar-item"> <i class="bi bi-arrow-right-square-fill"></i> Login</Link>
          </ul>
          
    </nav>
  )
}

export default Navbar
