
import React from "react"
import Cars from "./cars"
class CarsProps extends React.Component {
    render() {
        return (

            <div>
                <Cars src1={require("../images/img24.jpg")} src2={require("../images/img25.jpg")} src3={require("../images/img26.jpg")} src4={require("../images/img28.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <Cars src1={require("../images/img29.jpg")} src2={require("../images/img30.jpg")} src3={require("../images/img31.jpg")} src4={require("../images/img32.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque"
                />


                <Cars src1={require("../images/img33.jpg")} src2={require("../images/img34.jpg")} src3={require("../images/img35.jpg")} src4={require("../images/img36.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <Cars src1={require("../images/img37.jpg")} src2={require("../images/img38.jpg")} src3={require("../images/img39.jpg")} src4={require("../images/img40.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />

            </div>

        )
    }

}
export default CarsProps;
