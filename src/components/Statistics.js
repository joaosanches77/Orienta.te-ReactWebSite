import React from "react";


function Statistics(props) {


    return (
        <div>
            <h2 className='text-center text-secondary py-3'>COVID-19 DATA</h2>
            <div className="row row-cols-2 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card bg-success">
                        <div className="card-body">
                            <h6 className="card-title">RECOVERED</h6>
                            <h1 className="card-text">
                                <b>{props.recovered}</b>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-warning">
                        <div className="card-body">
                            <h6 className="card-title">CONFIRMED CASES</h6>
                            <h1 className="card-text">
                                <b>{props.confirmed}</b>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-danger">
                        <div className="card-body text-white">
                            <h6 className="card-title">CRITICAL<b>/day</b></h6>
                            <h1 className="card-text">
                                <b>{props.critical}</b>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark">
                        <div className="card-body text-white">
                            <h6 className="card-title">DEATHS</h6>
                            <h1 className="card-text">
                                <b>{props.deaths}</b>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Statistics