import Map from "./components/Map";
import {withGoogleMap, withScriptjs} from "react-google-maps";



const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {

    let key = "AIzaSyCCuKsLWzG2b05OqvuPwjFB08PgJ6X6GQU";

    return (
        <div style={{width: '100vw', height: '50vh'}}>

            <WrappedMap

                googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+key+"&v=3.exp&libraries=geometry,drawing,places"}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
            />
        </div>

    );
}

export default App
