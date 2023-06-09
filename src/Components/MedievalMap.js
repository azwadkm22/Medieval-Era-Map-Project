import React, { Component } from "react";
import mapData from "../Data/countries.json";
import landData from "../Data/land.json";
import civData from "../Data/civ.json";
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./MedievalMap.css"

class MedievalMap extends Component {
    state = {}

    componentDidMount() {
        console.log(mapData)
    }

    zoneNormalStyle = {
        // fillColor: "#ffffe4",
        fillColor: "#faebd7",
        fillOpacity: 0.8,
        color: "black",
        weight: 1
    }

    zoneNormalStyle = {
        // fillColor: "#ffffe4",
        fillColor: "#faebd7",
        fillOpacity: 0.8,
        color: "black",
        weight: 1
    }

    zoneFocusStyle = {
        fillColor: "#5671a8",
        fillOpacity: 1,
        color: "black",
        weight: 2
    }

    onCountryClick = (event) => {
        event.target.setStyle({
            fillColor: "green",
        })
    }

    mouseOverZone = (event) => {
        event.target.setStyle(this.zoneFocusStyle)
    }

    mouseOutZone = (event) => {
        event.target.setStyle(this.zoneNormalStyle)
    }

    onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        console.log()
        layer.bindPopup(countryName)
        layer.on({
            // click: this.onCountryClick,
            mouseover: this.mouseOverZone,
            mouseout: this.mouseOutZone
        })
    }

    onEachCiv = (country, layer) => {
        const countryName = country.properties.civName;
        console.log()
        layer.bindPopup(countryName)
        layer.on({
            // click: this.onCountryClick,
            mouseover: this.mouseOverZone,
            mouseout: this.mouseOutZone
        })
    }

    render()
    {
        return(
            <div>
                <h1> My Map </h1>
                <MapContainer style={{height:"800px"}} zoom={2} center={[20, 100]}>
                    <GeoJSON style={this.zoneNormalStyle} data={landData.features} /> 
                    {/* <GeoJSON style={this.zoneNormalStyle} data={mapData.features} onEachFeature={this.onEachCountry} />  */}
                    <GeoJSON style={this.zoneNormalStyle} data={civData.features} onEachFeature={this.onEachCiv} /> 
                </MapContainer>
            </div>
        )
    }
}

export default MedievalMap;