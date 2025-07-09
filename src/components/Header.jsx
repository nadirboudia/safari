import { useState } from 'react';
import './Header.css';
import Logo from './Logo';
import Navbar from './Navbar'
function Header() {
    const [toggle, setToggle] = useState(false);
  return (
     <div className="header">
       <Logo />
   
    <Navbar toggle={toggle} setToggle={setToggle} />

    <div  className="menu"  onClick={() =>{
         setToggle((prev)=>{
    return !prev;
    })
    }}>
      {toggle  ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i> }  
     
    </div> 

     </div>
  )
}

export default Header