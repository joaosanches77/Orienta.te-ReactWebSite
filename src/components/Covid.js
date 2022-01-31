import React, {useEffect, useState} from "react"
import Statistics from "./Statistics";

function Covid (props) {

    const [country, setCountry] = useState("")
    const [dados, setDados] = useState([])


    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {

    }, [dados]);

    const getData = async () => {

        let key = "2f6561380b4f46ef8fb859233411ef97";

        let str= "https://covid19-api.com/country?name="+props.stats+"&format=json?apiKey="+key

        const response = fetch(str).then((r) =>
                r.json()

        ).then((r1) => {
            setDados(r1);
        }).catch(err => console.log(err));


        //const criticalrate = {critic}*100000/"{population}"


    }

    if(country!=props.stats)
    {
        getData()
        setCountry(props.stats)
    }


    if (dados.length > 0) {

    return (

        <div>

            <Statistics

                confirmed={dados[0].confirmed}
                deaths= {dados[0].deaths}
                critical= {dados[0].critical}
                recovered= {dados[0].recovered}

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

export default Covid