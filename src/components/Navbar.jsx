

function Navbar({toggle , setToggle}) {
  return (
    <nav  style={{
  clipPath: toggle && 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)' 
       
}} className="navbar">
        <ul  className="navbar-links">
            
            <li onClick={()=>{setToggle(false)}} className="navbar-item"> <i class="bi bi-house-fill"></i>     Home</li>
          
            <li onClick={()=>{setToggle(false)}}  className="navbar-item">    <i class="bi bi-bank2"></i> About</li>
          
            <li onClick={()=>{setToggle(false)}} className="navbar-item">    <i class="bi bi-person-plus-fill"></i> Register</li>
             
            <li onClick={()=>{setToggle(false)}} className="navbar-item"> <i class="bi bi-arrow-right-square-fill"></i> Login</li>
          </ul>
          
    </nav>
  )
}

export default Navbar
