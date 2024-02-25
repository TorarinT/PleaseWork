import React, {MutableRefObject, useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {useGeographic} from "ol/proj";
const root = ReactDOM.createRoot(document.getElementById("root")!);
import "ol/ol.css";

useGeographic()
const map = new Map( {
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [10, 50], zoom: 8
    })
});
function MapApplication() {
    const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(()=> {
        map.setTarget(mapRef.current)
    })
    return <>
        <header><h1>Map application</h1></header>
        <nav>Actions</nav>
        <main ref={mapRef}>susssy</main>
    </>
}

root.render(<MapApplication/>);