
import "./App.css";
import Header from "./components/Header";
import Services from "./components/services/Services";
import Hero from "./components/heroheader/Hero";
import Tour from "./components/tours/Tour";
import {toursList} from "./data";


function App() {
  return (
  
   
   <div>
      <Header/>
       <Hero/>
       <Services/>
       <Tour ToursList = {toursList}/>
   </div>
  )
}

export default App;
