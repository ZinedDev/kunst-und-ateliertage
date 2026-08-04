import {useState, useEffect, useRef} from "react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {neighborhoodData} from "../data/ProgramData.ts";
import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {visitorHeader} from "../data/VisitorData.ts";
import {useLocation} from "react-router";
import ProgramSection from "../components/sub/ProgramSection.tsx";

// Fix for default marker icon in Leaflet with React
// @ts-expect-error - Leaflet icon property deletion for React-Leaflet compatibility
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Highlighted icon for selected marker
const highlightedIcon = L.icon({
    iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const neighborhoodCoordinates: Record<string, { lat: number; lon: number; zoom: number }> = {
    "Veddel": {lat: 53.522, lon: 10.020, zoom: 15},
    "Kirchdorf / Georgswerder": {lat: 53.501, lon: 10.021, zoom: 15},
    "Wilhelmsburg": {lat: 53.510, lon: 9.985, zoom: 15},
};

function ChangeView({bounds, center, zoom, forceUpdate}: {
    bounds: L.LatLngBoundsExpression | null;
    center: [number, number];
    zoom: number;
    forceUpdate?: number
}) {
    console.log("[ChangeView] Rendering", { bounds, center, zoom, forceUpdate });
    const map = useMap();

    useEffect(() => {
        console.log("[ChangeView] useEffect triggered", { bounds, center, zoom, forceUpdate });
        const handleResize = () => {
            console.log("[ChangeView] handleResize called");
            map.invalidateSize();
            if (bounds) {
                console.log("[ChangeView] fitting bounds", bounds);
                const size = map.getSize();
                const padding = [size.x * 0.1, size.y * 0.1] as [number, number];
                map.fitBounds(bounds, {padding});
            } else {
                console.log("[ChangeView] setting view", { center, zoom });
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
    }, [bounds, center, zoom, map, forceUpdate]);

    return null;
}

function LocationMarker({ loc, isFocused, onClick }: { loc: any, isFocused: boolean, onClick: () => void }) {
    console.log(`[LocationMarker] Rendering: ${loc.name}`, { isFocused });
    const markerRef = useRef<L.Marker>(null);

    useEffect(() => {
        console.log(`[LocationMarker] useEffect (isFocused): ${loc.name}`, { isFocused });
        if (isFocused && markerRef.current) {
            console.log(`[LocationMarker] Opening popup: ${loc.name}`);
            markerRef.current.openPopup();
        } else if (!isFocused && markerRef.current) {
            console.log(`[LocationMarker] Closing popup: ${loc.name}`);
            markerRef.current.closePopup();
        }
    }, [isFocused, loc.name]);

    return (
        <Marker 
            ref={markerRef}
            position={[loc.lat!, loc.lng!]}
            icon={isFocused ? highlightedIcon : new L.Icon.Default()}
            eventHandlers={{
                click: (e) => {
                    L.DomEvent.stopPropagation(e);
                    onClick();
                },
            }}
        >
            <Popup>
                <div className="text-blue-700">
                    <h3 className="font-bold">{loc.name}</h3>
                    {loc.adresse && (
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.adresse)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm underline hover:text-blue-900"
                        >
                            {loc.adresse}
                        </a>
                    )}
                </div>
            </Popup>
        </Marker>
    );
}

export default function ProgramPage() {
    console.log("[ProgramPage] Rendering");
    const location = useLocation();
    const state = location.state as { neighborhood?: string; location?: string } | null;

    const [currentNeighborhood, setCurrentNeighborhood] = useState<string | null>(state?.neighborhood || null);
    const [focusedLocation, setFocusedLocation] = useState<string | null>(state?.location || null);
    const [forceUpdate, setForceUpdate] = useState(0);

    useEffect(() => {
        console.log("[ProgramPage] useEffect (router state)", state);
        if (state?.neighborhood) {
            setCurrentNeighborhood(state.neighborhood);
        }
        if (state?.location) {
            setFocusedLocation(state.location);
        }
        setForceUpdate(prev => prev + 1);
    }, [state]);

    const currentLocations = !currentNeighborhood
        ? neighborhoodData.flatMap(n => n.locations)
        : neighborhoodData.find(n => n.name === currentNeighborhood)?.locations || [];

    const geoLocations = currentLocations.filter(loc => loc.lat !== null && loc.lng !== null && loc.lat !== undefined && loc.lng !== undefined);

    let activeBounds: L.LatLngBoundsExpression | null = null;
    let activeCenter: [number, number] = [53.505, 10.005];
    let activeZoom = 13;

    if (focusedLocation) {
        const loc = currentLocations.find(l => l.name === focusedLocation);
        if (loc && loc.lat && loc.lng) {
            activeCenter = [loc.lat, loc.lng];
            activeZoom = 17;
        }
    } else if (currentNeighborhood) {
        const coords = neighborhoodCoordinates[currentNeighborhood];
        if (coords) {
            activeCenter = [coords.lat, coords.lon];
            activeZoom = coords.zoom;
        }
        if (geoLocations.length > 0) {
            activeBounds = L.latLngBounds(geoLocations.map(loc => [loc.lat!, loc.lng!]));
        }
    } else if (geoLocations.length > 0) {
        activeBounds = L.latLngBounds(geoLocations.map(loc => [loc.lat!, loc.lng!]));
    }

    return (
        <PageTransition>
            <div className="w-full px-4 lg:px-0">
                <Header
                    tagline={visitorHeader.tagline}
                    title={visitorHeader.title}
                    description={visitorHeader.description}
                />
            </div>
            <nav className="flex flex-row justify-center gap-x-1 mt-8 w-full max-w-5xl px-4 lg:px-0">
                {neighborhoodData.map((neighborhood) => {
                    const isActive = currentNeighborhood === neighborhood.name;
                    return (
                        <button
                            key={neighborhood.name}
                            onClick={() => {
                                console.log("[ProgramPage] Neighborhood button clicked", { name: neighborhood.name, isActive });
                                if (isActive) {
                                    setCurrentNeighborhood(null);
                                } else {
                                    setCurrentNeighborhood(neighborhood.name);
                                }
                                setFocusedLocation(null);
                            }}
                            className={`px-2 rounded-md border-2 uppercase tracking-widest text-base max-sm:text-xs font-bold transition-all duration-300 ${
                                isActive 
                                    ? 'bg-blue-700 border-blue-700 text-white shadow-md' 
                                    : 'bg-transparent border-zinc-300 text-zinc-600 hover:border-blue-700 hover:text-blue-700'
                            }`}
                        >
                            {neighborhood.name}
                        </button>
                    );
                })}
            </nav>
            <section className="w-full max-w-5xl px-4 lg:px-0 mt-2">
                <div className="w-full h-125 max-sm:h-100 border-2 border-blue-700 rounded-lg overflow-hidden shadow-lg z-0 mx-auto">
                    <MapContainer
                        center={activeCenter}
                        zoom={activeZoom}
                        scrollWheelZoom={false}
                        style={{height: "100%", width: "100%"}}
                    >
                        <ChangeView bounds={activeBounds} center={activeCenter} zoom={activeZoom}
                                    forceUpdate={forceUpdate}/>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {neighborhoodData.flatMap(n => n.locations.map(loc => ({...loc, neighborhood: n.name})))
                            .filter(loc => loc.lat !== null && loc.lng !== null && loc.lat !== undefined && loc.lng !== undefined)
                            .map((loc, idx) => (
                            <LocationMarker 
                                key={`${loc.name}-${idx}`} 
                                loc={loc} 
                                isFocused={focusedLocation === loc.name} 
                                onClick={() => {
                                    console.log("[ProgramPage] Marker clicked", { name: loc.name, neighborhood: loc.neighborhood });
                                    if (focusedLocation === loc.name) {
                                        setFocusedLocation(null);
                                    } else {
                                        if (currentNeighborhood !== loc.neighborhood) {
                                            console.log("[ProgramPage] Switching neighborhood from marker click", loc.neighborhood);
                                            setCurrentNeighborhood(loc.neighborhood);
                                        }
                                        setFocusedLocation(loc.name);
                                    }
                                }}
                            />
                        ))}
                    </MapContainer>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center mt-2 w-full max-w-5xl px-4 lg:px-0">
                <ProgramSection
                    selectedNeighborhood={currentNeighborhood}
                    selectedLocation={focusedLocation}
                    showNeighborhoodButtons={false}
                    onNeighborhoodToggle={(name) => {
                        console.log("[ProgramPage] onNeighborhoodToggle from ProgramSection", name);
                        setCurrentNeighborhood(name);
                        setFocusedLocation(null);
                    }}
                    onLocationToggle={(_, locationName) => {
                        console.log("[ProgramPage] onLocationToggle from ProgramSection", locationName);
                        setFocusedLocation(locationName);
                    }}
                />
            </div>
        </PageTransition>
    );
}
