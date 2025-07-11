
import "./App.css";
import Header from "./components/Header";
import Services from "./components/services/Services";
import Hero from "./components/heroheader/Hero";
import Tour from "./components/tours/Tour";
import {toursList} from "./data";
import Sort from "./components/Sort/Sort";
import Pagination from "./components/Pagination/Pagination";
import { useState } from "react";
import { paginate } from "./utils/Tartib";
import Banner from "./components/Banner/Banner";
import Footer from './components/Footer/Footer'
import Letter from './components/Letter/Letter'
function App() {

    const[currentPage, setCurrentPage] = useState(1);
    const[sort, setSort] = useState("recomended");
   

    // sort //
const sortedTourList = 
  sort === 'low'
    ? [...toursList].sort((a, b) => a.priceFrom - b.priceFrom)
    : sort === 'high'
    ? [...toursList].sort((a, b) => b.priceFrom - a.priceFrom)
    : [...toursList].sort((a, b) => b.rating - a.rating);

const { pages, OrderedTourList } = paginate(toursList.length, sortedTourList, currentPage);

   
  return(
      <div>
      <Header/>
       <Hero/>
       <Services/>
       <Sort sort={sort} setSort={setSort} toursLength={toursList.length}/>
       <Tour  ToursList = {OrderedTourList}/>
       <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
       <Banner />
       <Letter />
       <Footer/>
      </div>
  )
   
}

export default App;
