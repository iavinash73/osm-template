import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import { useEffect, useState } from "react";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38]
});


const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};
const insitialmarkers = [
  {
    geocode: [19.0760, 72.8777],
    popUp: "Mumbai"
  },
  {
    geocode: [34.0836, 74.7973],
    popUp: "Srinagar"
  },
  {
    geocode: [25.3176, 82.9739],
    popUp: "Varanasi"
  },
  {
    geocode: [28.6139, 77.2090],
    popUp: "Delhi"
  },
  {
    geocode: [12.9716, 77.5946],
    popUp: "Bangalore"
  },
  {
    geocode: [13.0827, 80.2707],
    popUp: "Chennai"
  },
  {
    geocode: [22.5726, 88.3639],
    popUp: "Kolkata"
  },
  {
    geocode: [17.3850, 78.4867],
    popUp: "Hyderabad"
  },
  {
    geocode: [23.0225, 72.5714],
    popUp: "Ahmedabad"
  },
  {
    geocode: [18.5204, 73.8567],
    popUp: "Pune"
  },
  {
    geocode: [26.9124, 75.7873],
    popUp: "Jaipur"
  },
  {
    geocode: [26.8467, 80.9462],
    popUp: "Lucknow"
  },
  {
    geocode: [26.4499, 80.3319],
    popUp: "Kanpur"
  },
  {
    geocode: [21.1458, 79.0882],
    popUp: "Nagpur"
  },
  {
    geocode: [22.7196, 75.8577],
    popUp: "Indore"
  },
  {
    geocode: [19.2183, 72.9781],
    popUp: "Thane"
  },
  {
    geocode: [23.2599, 77.4126],
    popUp: "Bhopal"
  },
  {
    geocode: [17.6868, 83.2185],
    popUp: "Visakhapatnam"
  },
  {
    geocode: [18.6275, 73.8131],
    popUp: "Pimpri-Chinchwad"
  },
  {
    geocode: [25.5941, 85.1376],
    popUp: "Patna"
  },
  {
    geocode: [22.3072, 73.1812],
    popUp: "Vadodara"
  },
  {
    geocode: [28.6692, 77.4538],
    popUp: "Ghaziabad"
  },
  {
    geocode: [30.9010, 75.8573],
    popUp: "Ludhiana"
  },
  {
    geocode: [27.1767, 78.0081],
    popUp: "Agra"
  },
  {
    geocode: [20.5937, 78.9629],
    popUp: "Nashik"
  },
  {
    geocode: [28.4089, 77.3178],
    popUp: "Faridabad"
  },
  {
    geocode: [28.6139, 77.2090],
    popUp: "Meerut"
  },
  {
    geocode: [22.3039, 70.8022],
    popUp: "Rajkot"
  },
  {
    geocode: [19.2350, 73.1306],
    popUp: "Kalyan-Dombivli"
  },
  {
    geocode: [19.3919, 72.8397],
    popUp: "Vasai-Virar"
  },
  {
    geocode: [28.6139, 77.2090],
    popUp: "Meerut"
  }
];

function App () {
  const [markers, setmarkers] = useState(insitialmarkers);
  useEffect (()=>{
  })
  const search = (e) =>{
    e.preventDefault();
    console.log("clicked");
  }
  return (
    <div className="">
      <MapContainer center={[19.0760, 72.8777]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      <button onClick={search}>search</button>
    </div>
  );
}

export default App;
