import React from "react";
import { Link } from "react-router-dom";
// import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "../App.css"
import "../props.css"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
          
        }
    }

    handleChange=()=>{
        return(
            <div>
                <div className="auth">

                </div>


            </div>
        )        
    }
    render() {
        
        return (
            <div>

                <div className="Fixed">
                    <div className="header fixed flex ali">
                        <div className="logo">

                            <img src={require("../images/olxIcon.png")} />
                        </div>

                        <div className="location rel flex ali">
                            <div className="iconSearch"><SearchIcon /></div>
                            <input className="label s15 font" placeholder="Your location" value="pakistan" />
                            <button className="iconDown"><ExpandMoreIcon /></button>
                        </div>

                        <div className="searchItems flex ali">
                            <input className="querry" placeholder="Find Car Mobiles Phones And More..." />
                            <div className="iconGo go color"><SearchIcon /></div>

                        </div>
                        <Link className="fontb s15 Tcolor" to="account/singn in">Log In</Link>

                        <div className="action flex ali">
                            <div className="addTo">
                                <span className="iconPlus"><AddIcon /></span>
                                <span className="s15 font">Sell</span>

                            </div>
                        </div>

                    </div>
                    <div className="Nav">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="navbar-brand">Categories</Link><ExpandMoreIcon />



                          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-link active" to="mobiles">Mobile</Link>
                                    <Link className="nav-link" to="cars">Cars</Link>
                                    <Link className="nav-link" to="houses">Houses</Link>
                                    <Link className="nav-link" to="tvVideo" >Tv-Video-Audio</Link>
                                    <Link className="nav-link" to="motorcycles">motorcycles</Link>


                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                
                <div className="noFix">
                    <img className="headImage" src={require("../images/headImage.jpg")} />
                    <div className="cat">
                    <Link className="catLink" to="cars">Cars</Link>
                    <Link className="catLink" to="mobiles">Mobiles</Link>
                    <Link className="catLink" to="cars">Cars</Link>
                    <Link className="catLink" to="houses">Houses</Link>
                    <Link className="catLink" to="tvVideo">Tv-Video-Audio</Link>
                    <Link className="catLink" to="motorcycles">Motorcycles</Link>
                    </div>
                </div>
                
                <h4 className="font1 s24 Tcolor frH">Fresh recomendation</h4>



            </div>








        )
    }

}

export default Header;
