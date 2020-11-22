import React from "react";

class Houses extends React.Component {
    constructor(){
        super()
        this.state={

        }
    }


    render() {
        return (
            <div className="Mobiles ali">
                

                <div className="row row-cols-1 row-cols-md-4 Cart">
                    <div className="col mb-4" >
                        <div className="card">
                            <img src={this.props.src1} className="card-img-top cImage" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={this.props.src2} className="card-img-top cImage" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={this.props.src3} className="card-img-top cImage" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={this.props.src4} className="card-img-top cImage" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Houses;
