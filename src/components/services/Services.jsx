
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className='services'>
      <div className="services-item">
        <i  style={{color:'gray'}} className="bi bi-card-image service-icon1"></i>
        Adventures
      </div>

    <div className="services-item">
        <i style={{color:'purple'}} className="bi bi-people-fill service-icon"></i>
        Family tours
      </div>
      <div   className="services-item">
        <i style={{color:'orange'} }className="bi bi-building service-icon"></i>
        City Cards
      </div>
      <div className="services-item">
        <i className="bi bi-globe service-icon"></i>
        multy-day trips
      </div>
    </div>
  )
}

export default Services
