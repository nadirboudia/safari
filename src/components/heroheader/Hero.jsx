
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <div className="searchbox">
        <div className="inputwrapper">
            <i className='bi bi-search'></i>
            <input type="search"  placeholder='What Are you looking for ' className='searchboxinput'/>
            
        </div>
        <button className='btn'>
            Search
        </button>
      </div>

    <div className="herotitle">
        <h3>Dubai</h3>
        <h1>Desert Safaries</h1>
    </div>

    </div>
  )
}

export default Hero
