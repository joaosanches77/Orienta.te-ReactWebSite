import React, {useEffect, useState} from "react";
import Statistics2 from "./Statistics2";


function Weather (props) {

    const [capital, setCapital] = useState("")
    const [tempo, setTempo] = useState([])


    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {

    }, [tempo]);

    const getData = async () => {

        let apikey = "47cf67e4c75b41b6942175012222901"

        let str = "https://api.weatherapi.com/v1/current.json?key="+apikey+"&q="+props.capital+"&aqi=no"

        const response = fetch(str).then((r) =>
            r.json()

        ).then((r1) => {
            setTempo(r1);
        }).catch(err => console.log(err));

    }

    if(capital!=props.capital)
    {
        getData()
        setCapital(props.capital)
    }

    const tempo1 = Object.values(tempo);


    if (tempo1.length > 0) {

        return (

            <div>

                <Statistics2

                time={tempo1}

                />

            </div>

        )}
    else {
        return (
            <div>
            <h1 style={{textAlign: "center"}}>Pais</h1>

        </div>

     )}

}

export default Weather