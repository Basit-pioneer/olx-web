
import React from "react"
import Home from "./home"
class HomeProps extends React.Component {
    render() {
        return (

            <div>
                <Home src1={require("../images/img1.jpg")} src2={require("../images/img2.jpg")} src3={require("../images/img3.jpg")} src4={require("../images/img4.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <Home src1={require("../images/img81.jpg")} src2={require("../images/img28.jpg")} src3={require("../images/img39.jpg")} src4={require("../images/img64.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque"
                />


                <Home src1={require("../images/img19.jpg")} src2={require("../images/img88.jpg")} src3={require("../images/img3.jpg")} src4={require("../images/img44.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <Home src1={require("../images/img71.jpg")} src2={require("../images/img59.jpg")} src3={require("../images/img91.jpg")} src4={require("../images/img54.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />

            </div>

        )
    }

}
export default HomeProps;
