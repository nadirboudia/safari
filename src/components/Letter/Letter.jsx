import letterpic from "../../images/newsletterimage.jpg";
import './Letter.css'
function Letter() {
  return (
    <div className="containerr">

     <div className="imgg">
        <img src={letterpic} alt="" />
      </div>



      <div className="contenue">
        <h1 className="h">Your Dubai itinerary is waiting. </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, eos
          quis!
        </p>

        <input className="inp" type="text" placeholder="Your Email :" />

        <button className="Button">Sign Up</button>
      </div>

     
    </div>
  );
}

export default Letter;
