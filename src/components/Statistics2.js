import React from "react";

function Statistics2(props) {

if(props.time[1].is_day === 0){

    return (

        <div className='border-top border-3 border-dark bg-dark rounded-3 pb-5'>

            <img className='text-center mx-3 mt-4 rounded-circle bg-white border border-5 border-warning'
                 src={props.time[1].condition.icon}/><b className='text-white'>{props.time[1].condition.text}</b><b className='text-info'> - Night</b>
            <h1 className='text-center text-uppercase mb-0 text-white'><b>{props.time[0].country}</b></h1>
            <h4 className='text-center text-white'>{props.time[0].name}</h4>


            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div className="col">
                    <div className="card bg-success text-dark">
                        <div className="card-body">
                            <h1 className="card-title"><b>Local Time</b></h1>
                            <h3 className="card-text">
                                {props.time[0].localtime}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-danger text-dark">
                        <div className="card-body">
                            <h1 className="card-title"><b>Temperature</b></h1>
                            <h3 className="card-text">
                                {props.time[1].temp_c}ºC (feels like {props.time[1].feelslike_c}ªC)
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-warning text-dark">
                        <div className="card-body">
                            <h1 className="card-title"><b>Wind</b></h1>
                            <h3 className="card-text">
                                {props.time[1].wind_kph} Km/h
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-info text-dark">
                        <div className="card-body">
                            <h1 className="card-title"><b>Humidity</b></h1>
                            <h3 className="card-text">
                                {props.time[1].humidity} %
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-danger text-dark">
                        <div className="card-body">
                            <h1 className="card-title"><b>UV Intensity</b></h1>
                            <h3 className="card-text">
                                {props.time[1].uv}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-warning text-dark">
                        <div className="card-body">
                            <h1 className="card-title"><b>Wind Direction</b></h1>
                            <h3 className="card-text">
                                {props.time[1].wind_dir}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
else {


    return (

        <div className='border-top border-bottom border-3 border-dark bg-warning rounded-3 pb-5'>

            <img className='text-center mx-3 mt-4 rounded-circle bg-white border border-5 border-dark'
                 src={props.time[1].condition.icon}/><b className='text-dark'>{props.time[1].condition.text}</b><b className='text-success'> - Day</b>
            <h1 className='text-center text-uppercase mb-0 text-dark'><b>{props.time[0].country}</b></h1>
            <h4 className='text-center text-dark'>{props.time[0].name}</h4>


            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                <div className="col">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <h1 className="card-title"><b>Local Time</b></h1>
                            <h3 className="card-text">
                                {props.time[0].localtime}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-danger text-white">
                        <div className="card-body">
                            <h1 className="card-title"><b>Temperature</b></h1>
                            <h3 className="card-text">
                                {props.time[1].temp_c}ºC (feels like {props.time[1].feelslike_c}ªC)
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h1 className="card-title"><b>Wind</b></h1>
                            <h3 className="card-text">
                                {props.time[1].wind_kph} Km/h
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h1 className="card-title"><b>Humidity</b></h1>
                            <h3 className="card-text">
                                {props.time[1].humidity} %
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-danger text-white">
                        <div className="card-body">
                            <h1 className="card-title"><b>UV Intensity</b></h1>
                            <h3 className="card-text">
                                {props.time[1].uv}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h1 className="card-title"><b>Wind Direction</b></h1>
                            <h3 className="card-text">
                                {props.time[1].wind_dir}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}



export default Statistics2