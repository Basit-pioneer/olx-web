import React from "react";
import TvVideo from "./tvVideo"

class TvVideoProps extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div className="Mobiles ali">

                <TvVideo src1={require("../images/img57.jpg")} src2={require("../images/img58.jpg")} src3={require("../images/img59.jpg")} src4={require("../images/img60.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


               <TvVideo src1={require("../images/img61.jpg")} src2={require("../images/img62.jpg")} src3={require("../images/img63.jpg")} src4={require("../images/img64.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque"/>


                <TvVideo src1={require("../images/img65.jpg")} src2={require("../images/img66.jpg")} src3={require("../images/img67.jpg")} src4={require("../images/img68.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <TvVideo src1={require("../images/img69.jpg")} src2={require("../images/img70.jpg")} src3={require("../images/img71.jpg")} src4={require("../images/img72.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />

            </div>
        )
    }
}

export default TvVideoProps;
