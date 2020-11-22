import { Link } from "@material-ui/core";
import React from "react";


class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="Dbtn s14 font1" >Load more</div>
                <div className= "footer">
                    <div className="Inline">

                    <h6 className="fSpan">Papolar Categories</h6>
                    <p> <Link>Mobiles</Link> </p>
                    <p> <Link>Cars</Link> </p>
                    <p> <Link>Houses</Link> </p>
                    <p> <Link>Audio-video-Tv</Link> </p>

                    </div>
                
                   <div className="Inline">
                   <h6 className="fSpan" >Trending Searches</h6>
                    <p>Bikes</p>
                    <p>watches</p>
                    <p>Books</p>
                    <p>Dogs</p>
                   </div>

                   <div className="Inline">
                   <h6 className="fSpan" >About Us</h6>
                    <p>olx group</p>
                    <p>olx blog</p>
                    <p>contact us</p>
                    <p>olx for buisness</p>
                   </div>


                   <div className="Inline">
                   <h6 className="fSpan" >Olx</h6>
                    <p>help</p>
                    <p>site map</p>
                    <p>privacy information</p>
                    <p>site map</p>
                   </div>
                   <div className="fLine">

                   </div>
                    




                    


                </div>



            </div>



        )
    }
}
export default Footer;