
import React from "react"
import Houses from "./cars"
class HousesProps extends React.Component {
    render() {
        return (

            <div>
                <Houses src1={require("../images/img41.jpg")} src2={require("../images/img42.jpg")} src3={require("../images/img43.jpg")} src4={require("../images/img44.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <Houses src1={require("../images/img45.jpg")} src2={require("../images/img46.jpg")} src3={require("../images/img47.jpg")} src4={require("../images/img48.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque"
                />


                <Houses src1={require("../images/img49.jpg")} src2={require("../images/img50.jpg")} src3={require("../images/img51.jpg")} src4={require("../images/img52.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />


                <Houses src1={require("../images/img53.jpg")} src2={require("../images/img54.jpg")} src3={require("../images/img55.jpg")} src4={require("../images/img56.jpg")}
                    title="Lorem ipsum" description="dolor sit amet consectetur adipisicing elit. Eveniet iusto officia rem libero, perferendis at iste itaque" />

            </div>

        )
    }

}
export default HousesProps;
