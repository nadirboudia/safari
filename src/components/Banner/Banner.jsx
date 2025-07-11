import sky from '../../images/skyscrepper.jpg';
import './Banner.css';

function Banner() {
  return (
    <div className="banner"> 
      <div className='banner-wrapper'>
        <div className='banner-layout'>
          <h1>DUBAI IS WAITING FOR YOU</h1>
        </div>
         <img src={sky} alt="Dubai Skyline" className='banner-img' />
      </div>
    </div>
  );
}

export default Banner;
