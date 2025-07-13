


function Booknow({priceFrom , tour} ) {
  return (
      <div className="book-now">
          <div className="book-now-header"> Save up to 35% </div>
        <div className="book-now-body">
          <div className="book-now-booked">
            Booked 42 times yesterday
          </div>
          <div className="book-now-price-wrapper">
            <div className="book-now-price">
              <b> ${tour.priceFrom}</b>  <p>per person</p>
            </div>
          </div>
          <button className="book-now-btn ">Book Now</button>
        </div>
    <p className="book-now-more-info">
      <i className="bi bi-calendar-check"></i>
      <span>Reserve now and pay later</span>
      To book your spot and pay nothing today
    </p>
        </div>
  )
}

export default Booknow
