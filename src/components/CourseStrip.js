import React from "react";

export default class CourseStrip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return(
        <div className="row pt-2 pb-1 border border-dark">
            <div className="col-md-3">
                <i className="btn fa fa-file"></i>
                Course Name
            </div>
            <div className="col-md-3">
                me
            </div>
            <div className="col-md-2">
                9/27/2018 5:00pm
            </div>
            <div className="col-md-2">

            </div>
            <div className="col-md-2">
                <i className="btn fa fa-times"></i>
            </div>
            <div>

            </div>
        </div>
    )
    }
}
