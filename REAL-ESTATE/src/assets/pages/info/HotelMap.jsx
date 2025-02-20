import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const HotelMap = () => {
    // Replace with your hotel's latitude and longitude
    const hotelLocation = { lat: 6.896785517218852, lng: 79.85648165028368 };
    return (
        <div className="w-full h-[300px] md:h-[669px] mx-auto mb-[67px] px-4">
            {/* Adjust height for mobile screens */}
            <MapContainer
                center={[hotelLocation.lat, hotelLocation.lng]}
                zoom={14}
                className="w-full h-full shadow-lg"
                style={{ height: "100%", width: "100%" }}
            >
                {/* OpenStreetMap Tile Layer */}
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* Hotel Marker */}
                <Marker position={[hotelLocation.lat, hotelLocation.lng]}>
                    <Popup>
                        <strong>Your Hotel</strong> <br />
                        Location: {hotelLocation.lat}, {hotelLocation.lng}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};
export default HotelMap;