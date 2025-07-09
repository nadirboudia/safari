
 import TourItem from "./TourItem";
import "./Tour.css";

function Tour({ToursList}) {
  return (
    <div className="tour-list">
      {ToursList.map((tour)  => 
    <TourItem key={tour.id} tour={tour} />
    
    )}
    </div>
  )
}

export default Tour
