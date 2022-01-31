import {GoogleMap, Marker} from "react-google-maps";
import Capitaisj from "../data/Capitaisj";
import React, {useState} from "react";
import Covid from "./Covid";
import Weather from "./Weather";

function Map() {

    const [place, setPlace] = useState("Lisbon");
    const [country, setCountry] = useState("Portugal");
    const [key, setKey] = useState("Portugal")


    return (
        <div>
            <h3 className= "text-center text-secondary">{key}</h3>
            <GoogleMap style={{width: '100vw', height: '50vh'}}
                defaultZoom={5}
                defaultCenter={{lat: 40.6412, lng: -8.65362}}


            >
                {Capitaisj.map(city => (
                    <Marker className= 'markers'
                        key={city.properties.country}
                        position={{
                            lat: city.geometry.coordinates[1],
                            lng: city.geometry.coordinates[0]
                        }}
                        onClick={() => {
                            setPlace(city.properties.capital);
                            setCountry(city.properties.country);
                        }}
                        icon={{
                            url: './pins/pin_orange.png',
                            scaledSize: new window.google.maps.Size(70,70)
                    }}
                            onMouseOver={() => {
                                setKey(city.properties.country);
                            }}

                     />
                ))}


            </GoogleMap>
            <Weather capital={place} />
            <Covid stats={country} capital={place} />


        </div>

        );}


export default Map
