import React from "react";
import InnerHTML from "dangerously-set-html-content";

export const Map = () => {
  var html =
    '<div id="map" style=" position: absolute;height: 60%;' +
    'border:1.5px solid black;width: 100%; "></div>' +
    "<script>" +
    "mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2h2ZXJtYTAwNyIsImEiOiJja280NnczMDIwejVlMnBseW45c2d4Njk2In0.9qUIMr8ts9-UB87Vi1iskg';" +
    "var map = new mapboxgl.Map({" +
    "container: 'map', style: 'mapbox://styles/mapbox/streets-v11', center: [75.8, 30.8],  zoom: 8 " +
    "});" +
    "map.addControl(new mapboxgl.NavigationControl());" +
    "var marker1 = new mapboxgl.Marker()" +
    ".setLngLat([75.8, 30.92])" +
    ".addTo(map);" +
    "var marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })" +
    ".setLngLat([76.8,30.75])" +
    ".addTo(map);" +
    "</script>";
  return (
    <div>
      <InnerHTML html={html} />
    </div>
  );
};
