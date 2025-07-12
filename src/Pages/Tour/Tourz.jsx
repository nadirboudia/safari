import React from "react";
import { useParams } from "react-router-dom";
import { toursList } from "../../data";
import Ratinglist from "../../components/tours/Ratinglist";
import './Tourz.css'
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
          <span className="stars">
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
         
      </div>
    </section>
  );
}

export default Tourz;
