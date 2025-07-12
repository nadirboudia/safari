import Ratinglist from "./Ratinglist"
import {Link} from "react-router-dom"

function TourItem({tour }) {
  return (
        <div className="tour-item" key={tour.id}>
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <div className="itembody">
            <div className="title">
                <h2>
                    {tour.title}
                </h2>

            </div>
            <div className="duration-rating">
                <p className="duration">
                    {tour.duration}
                </p>
                <p> Pickup available </p>
            </div>
            
            <div className="rating-reviews">
                <span className="stars">
                   <Ratinglist  rating={tour.rating}  />
                    
                </span>
                <span className="rating">
                    {tour.rating}
                   
                </span>
                <span className="reviews">
                    ({tour.reviews} reviews)
                </span>  
            </div>

                        <div className="price">
                        <h2> From {tour.priceFrom} $ </h2>
                        <h5>per person</h5>
                        </div>


                        <div className="seemore">
                            <Link to={`/tourz/${tour.id}`} className="bt">
                            See More
                            </Link>
                        </div>

            </div>

        </div>
  )
}
export default TourItem
