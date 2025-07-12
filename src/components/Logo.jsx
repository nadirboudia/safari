
import logo from '../images/logo.png';
import {Link} from "react-router-dom" ;

function Logo() {
  return (
    <Link className="logo" to='/'>
            <img src={logo} alt="" />
            <div className="logo-text">
            <b>DUBAI</b>
            <b>Desert</b>
            <b>SAFARI</b>
            </div>
        </Link>
  )
}

export default Logo
