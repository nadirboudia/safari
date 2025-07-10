
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

    const totalPages = Math.ceil(toursList.length / toursPerPage);
  const start = (currentPage - 1) * toursPerPage;
  const end = currentPage * toursPerPage;
  
    const Newtours = toursList.slice(start, end); 


   
  return(
      <div>
      <Header/>
       <Hero/>
       <Services/>
       <Tour ToursList = {Newtours}/>
       <Pagination pages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
  )
   
}

export default App;
