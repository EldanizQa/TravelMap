import React from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";
import "./Baku.css";
import L from "leaflet";
import { Link } from "react-router-dom";

const markerIcon = L.icon({
  iconUrl: require("../../../assets/Icons/icon2.png"),
  iconSize: [35, 40],
});
const center = [40.40508337134207, 49.86391827210291];
let zoom = 10;
const Baku = () => {
  return (
    <div className="map-div">
      <MapContainer
        zoomControl={true}
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100vh",
          margin: "0 auto",
        }}
        className="map-container"
      >
        <TileLayer
          url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=dZOt5h8VzjgQ9hrjLbT7"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {/* <ZoomControl
        zoomControl={false}
        >
        </ZoomControl> */}
        <Marker
          position={[40.36622198038845, 49.83723127005067]}
          icon={markerIcon}
        >
          <Popup>
            <a>Maiden Tower</a>
          </Popup>
        </Marker>
        <Marker
          position={[40.366227056183405, 49.83368716820791]}
          icon={markerIcon}
        >
          <Popup>
            <a>Palace of the Shirvanshahs </a>
          </Popup>
        </Marker>
        <Marker
          position={[40.35951202132146, 49.82644461118334]}
          icon={markerIcon}
        >
          <Popup>
            <a>Flame towers </a>
          </Popup>
        </Marker>
        <Marker
          position={[40.396314795075426, 49.86784942251023]}
          icon={markerIcon}
        >
          <Popup>
            <a>Heydar Aliyev Center </a>
          </Popup>
        </Marker>

        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <Polygon
              pathOptions={{
                fillColor: "#8bac55",
                fillOpacity: 0.7,
                weight: 1,
                opacity: 1,
                dashArray: 3,
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: "#808000",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: "white",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 1,
                    dashArray: "3",
                    color: "white",
                    fillColor: "#8bac55",
                  });
                },
                click: (e) => {},
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};
export default Baku;
