import { useState, useEffect } from "react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import { neighborhoodLocations } from "../data/ProgramData.ts";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapHeader } from "../data/MapData.ts";

// Fix for default marker icon in Leaflet with React
// @ts-expect-error - Leaflet icon property deletion for React-Leaflet compatibility
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const neighborhoodCoordinates: Record<string, { lat: number; lon: number; zoom: number }> = {
    "Veddel": { lat: 53.522, lon: 10.020, zoom: 15 },
    "Kirchdorf/Georgswerder": { lat: 53.490, lon: 10.025, zoom: 14 },
    "Wilhelmsburg": { lat: 53.498, lon: 9.993, zoom: 14 },
};

function ChangeView({ bounds, center, zoom }: { bounds: L.LatLngBoundsExpression | null; center: [number, number]; zoom: number }) {
    const map = useMap();

    useEffect(() => {
        const handleResize = () => {
            map.invalidateSize();
            if (bounds) {
                const size = map.getSize();
                const padding = [size.x * 0.1, size.y * 0.1] as [number, number];
                map.fitBounds(bounds, { padding });
            } else {
                map.setView(center, zoom);
            }
        };

        handleResize(); // Initial fit

        const container = map.getContainer();
        const resizeObserver = new ResizeObserver(() => {
            handleResize();
        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    }, [bounds, center, zoom, map]);

    return null;
}

export default function Map() {
    const [currentNeighborhood, setCurrentNeighborhood] = useState("Wilhelmsburg");

    const currentLocations = neighborhoodLocations.find(n => n.name === currentNeighborhood)?.locations || [];
    const geoLocations = currentLocations.filter(loc => loc.lat !== null && loc.lng !== null && loc.lat !== undefined && loc.lng !== undefined);

    const neighborhoodData = neighborhoodCoordinates[currentNeighborhood] || neighborhoodCoordinates["Wilhelmsburg"];
    const { lat, lon, zoom } = neighborhoodData;

    const bounds = geoLocations.length > 0 
        ? L.latLngBounds(geoLocations.map(loc => [loc.lat!, loc.lng!])) 
        : null;

    return (
        <PageTransition>
            <div className="mt-8">
                <Header 
                    title={mapHeader.title}
                    tagline={mapHeader.tagline}
                    description={mapHeader.description}
                />

                <div className="flex flex-row justify-center gap-1 mt-8">
                    {neighborhoodLocations.map((neighborhood) => (
                        <button
                            key={neighborhood.name}
                            onClick={() => setCurrentNeighborhood(neighborhood.name)}
                            className={`p-2 text-sm rounded-full border-2 transition-all duration-300 ${
                                currentNeighborhood === neighborhood.name
                                    ? "bg-blue-700 text-white border-blue-700 shadow-md"
                                    : "bg-white text-blue-700 border-blue-700 hover:bg-blue-50"
                            }`}
                        >
                            {neighborhood.name}
                        </button>
                    ))}
                </div>
                
                <div className="w-full max-w-5xl h-150 max-sm:h-100 mt-2 border-2 border-blue-700 rounded-lg overflow-hidden shadow-lg z-0">
                    <MapContainer 
                        center={[lat, lon]} 
                        zoom={zoom} 
                        scrollWheelZoom={false}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <ChangeView bounds={bounds} center={[lat, lon]} zoom={zoom} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {geoLocations.map((loc, idx) => (
                            <Marker key={`${loc.name}-${idx}`} position={[loc.lat!, loc.lng!]}>
                                <Popup>
                                    <div className="text-blue-700">
                                        <h3 className="font-bold">{loc.name}</h3>
                                        {loc.adresse && <p className="text-sm">{loc.adresse}</p>}
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
                <div className="mt-2 text-blue-700 text-center">
                    <small>
                        <a 
                            href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Größere Karte anzeigen
                        </a>
                    </small>
                </div>
            </div>
        </PageTransition>
    );
}
