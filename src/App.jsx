import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer"
import HomeProps from "./components/homeProps";
import MobilesProps from "./components/mobileProps";
import CarsProps from "./components/carsProps";
import HousesProps from './components/housesProps';
import TvVideoProps from './components/tvVideoProps';
import MotorcyclesProps from './components/motorcyclesProps';
// import Firebase from "./config/firebase"
// import Categories from "./components/categories"
import firebase from "firebase/app"
import "firebase/database"


class App extends React.Component {
 

  render() {

    

    return (
      <div>
        <Router>
          <Route path="/" component={Header} />
          <Route path="/home" component={HomeProps} />
          <Route  path="/mobiles" component={MobilesProps} />
          <Route path="/cars"  component={CarsProps}/>
          <Route path="/houses"  component={HousesProps}/>
          <Route path="/tvVideo"  component={TvVideoProps}/>
          <Route path="/motorcycles"  component={MotorcyclesProps}/>
          {/* <Route path="" component={Firebase}/> */}

          
          {/* <Route path="/categories"  component={Categories}/> */}




        </Router> 

       
      <Footer />
      </div>

      
      
    )
  }
}
export default App;

