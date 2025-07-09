
import "./App.css";
import Header from "./components/Header";
import Services from "./components/services/Services";
import Hero from "./components/heroheader/Hero";
import Tour from "./components/tours/Tour";
import {toursList} from "./data";
import Pagination from "./components/Pagination/Pagination";
import { useState } from "react";


function App() {

    const[currentPage, setCurrentPage] = useState(1);
   const toursPerPage = 6;

   const pages = Math.ceil(toursList.length / toursPerPage);
    const debut = currentPage * toursPerPage;
    const fin = (currentPage - 1) * toursPerPage;
  
  const newtours = toursList.slice(debut, fin);






   
   <div>
      <Header/>
       <Hero/>
       <Services/>
       <Tour ToursList = {newtours}/>
       <Pagination/>
   </div>
  )
}

export default App;
