import React from "react";
import { useParams } from "react-router-dom";
import { toursList } from "../../data";
import Ratinglist from "../../components/tours/Ratinglist";
import "./Tourz.css";
import Booknow from "./Booknow";
function Tourz() {
  const { id } = useParams();
  console.log(id);

  const tour = toursList.find((t) => t.id === parseInt(id));
  return (
    <section className="tour">
      <div className="tour-step">
        United Arab Emirates <i className="bi bi-chevron-right"></i>
        Things to do in dubai <i className="bi bi-chevron-right"></i> Safari
      </div>
      <div className="tour-category">ADVENTURE</div>
      <h1 className="tour-title">Dubai : {tour.title}</h1>
      <div className="tour-info">
        <div className="rating-reeviews">
          <span className="starss">
            <Ratinglist rating={tour.rating} />
          </span>
          <span className="rating">{tour.rating}</span>
          <span className="reviews">({tour.reviews} reviews)</span>
        </div>

        <div className="tour-provider">
          Activity Provider : <span> Nadir Boudia </span>
        </div>
      </div>

      <div className="tour-img-wrapper">
        <img src={tour.image} alt={tour.title} className="tour-img" />
        <Booknow tour={tour} priceFrom={tour.priceFrom} className='book' />
      </div>
      <p className="tour-descreption">
        Discover a different side of Dubai on a fun-filled safari across the
         desert. Try sandboarding, dune bashing and a camel ride, with the option
        to add an electrifying quad bike ride or immersive Al Khayma Camp dinner
        experience to your adventure.
      </p>
      <div className="tour-more-information">
        <h2 className="info-title">About this Activity</h2>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color:'#27ae60'}}  className="bi bi-calendar3"> </i>
            Free Cancellation
          </div>
          <p className="tour-info-item-desc">
            Cancel up to 24 hours in advance to receive a full refund
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i  style={{color:'#2980b9'}} className="bi bi-calendar-plus-fill" > </i>
            Reserve Now & Pay later
          </div>
          <p className="tour-info-item-desc">
            Keep your travel plan flexible –– book your spot and pay nothing
            today.
          </p>
        </div>

        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i  style={{color:'#e74c3c'}} className="bi bi-virus" > </i>
            COVID-19 precautions
          </div>
          <p className="tour-info-item-desc">
            Special health and safety measures are in place. Check your activity
            voucher once you book for full details.
          </p>
        </div>

        <div className="tour-info-item">  
          <div className="tour-info-item-title">
            <i  style={{color:'#8e44ad'}} className="bi bi-clock-history"> </i>
            Duration: 4 – 7 hours
          </div>
          <p className="tour-info-item-desc">
            Check availability to see starting times.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i  style={{color:'#34495e'}} className="bi bi-person-check"> </i>
            Live tour guide
          </div>
          <p className="tour-info-item-desc">English</p>
        </div>
      </div>
    </section>
  );
}

export default Tourz;
