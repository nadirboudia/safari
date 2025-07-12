import { paginate } from "../../utils/Tartib";
import {toursList} from "../../data";
import { useState } from "react";
import Services from "../../components/services/Services";
import Hero from "../../components/heroheader/Hero";
import Tour from "../../components/tours/Tour";
import Sort from "../../components/Sort/Sort";
import Pagination from "../../components/Pagination/Pagination";
import Banner from "../../components/Banner/Banner";
import Letter from '../../components/Letter/Letter';

function Home() {
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

   
  return (
    <div>
       <Hero/>
       <Services/>
       <Sort sort={sort} setSort={setSort} toursLength={toursList.length}/>
       <Tour  ToursList = {OrderedTourList}/>
       <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
       <Banner />
       <Letter />
    </div>
  )
}

export default Home
