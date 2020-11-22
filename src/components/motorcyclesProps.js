import React from "react";
import Motorcycles  from "./motorcycles"

class MotorcyclesProps extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div className="Mobiles ali">

                <Motorcycles src1={require("../images/img77.jpg")} src2={require("../images/img78.jpg")} src3={require("../images/img79.jpg")} src4={require("../images/img80.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


               <Motorcycles src1={require("../images/img81.jpg")} src2={require("../images/img82.jpg")} src3={require("../images/img83.jpg")} src4={require("../images/img84.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque"/>


                <Motorcycles src1={require("../images/img85.jpg")} src2={require("../images/img86.jpg")} src3={require("../images/img87.jpg")} src4={require("../images/img88.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <Motorcycles src1={require("../images/img89.jpg")} src2={require("../images/img90.jpg")} src3={require("../images/img91.jpg")} src4={require("../images/img92.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />

            </div>
        )
    }
}

export default MotorcyclesProps;
