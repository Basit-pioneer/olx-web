import React from "react";
import Mobiles from "./mobile"

class MobilesProps extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div className="Mobiles ali">

                <Mobiles src1={require("../images/img6.jpg")} src2={require("../images/img7.jpg")} src3={require("../images/img8.jpeg")} src4={require("../images/img9.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


               <Mobiles src1={require("../images/img10.png")} src2={require("../images/img11.jpg")} src3={require("../images/img12.jpg")} src4={require("../images/img13.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque"/>


                <Mobiles src1={require("../images/img14.jpg")} src2={require("../images/img15.jpg")} src3={require("../images/img16.jpg")} src4={require("../images/img17.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <Mobiles src1={require("../images/img18.jpg")} src2={require("../images/img19.jpg")} src3={require("../images/img20.jpg")} src4={require("../images/img21.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />

            </div>
        )
    }
}

export default MobilesProps;
