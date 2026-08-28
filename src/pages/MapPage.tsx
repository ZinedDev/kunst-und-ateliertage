import {useState, useEffect, useRef} from "react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {neighborhoodData} from "../data/ProgramData.ts";
import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {mapHeader} from "../data/MapData.ts";
import {useLocation, useNavigate} from "react-router";
import type {NeighborhoodData} from "../data/Types.ts";


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

function ChangeView({bounds, center, zoom}: {
    bounds: L.LatLngBoundsExpression | null;
    center: [number, number];
    zoom: number;
}) {
    console.log("[ChangeView] Rendering", {bounds, center, zoom});
    const map = useMap();

    useEffect(() => {
        console.log("[ChangeView] useEffect triggered", {bounds, center, zoom});
        const handleResize = () => {
            console.log("[ChangeView] handleResize called");
            map.invalidateSize();
            if (bounds) {
                console.log("[ChangeView] fitting bounds", bounds);
                const size = map.getSize();
                const padding = [size.x * 0.1, size.y * 0.1] as [number, number];
                map.fitBounds(bounds, {padding});
            } else {
                console.log("[ChangeView] setting view", {center, zoom});
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

type MapLocation = NeighborhoodData["locations"][number] & {neighborhood: string};

type MapRouteState = {
    neighborhood?: string;
    location?: string;
    address?: string;
    artist?: string;
};

const mapLocations: MapLocation[] = neighborhoodData.flatMap(neighborhood =>
    neighborhood.locations.map(mapLocation => ({
        ...mapLocation,
        neighborhood: neighborhood.name,
    })),
);

function normalizeLocationValue(value: string): string {
    return value
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .toLocaleLowerCase("de-DE")
        .replace(/ß/g, "ss")
        .replace(/\bstr(?:asse)?\b/g, "strasse")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function resolveMapLocation(state: MapRouteState | null): MapLocation | null {
    if (!state?.location) return null;

    const requestedName = normalizeLocationValue(state.location);
    const requestedAddress = state.address ? normalizeLocationValue(state.address) : "";
    const requestedNeighborhood = state.neighborhood
        ? normalizeLocationValue(state.neighborhood)
        : "";

    const rankedLocations = mapLocations
        .map(mapLocation => {
            const locationName = normalizeLocationValue(mapLocation.name);
            const locationAddress = mapLocation.adresse
                ? normalizeLocationValue(mapLocation.adresse)
                : "";
            const neighborhood = normalizeLocationValue(mapLocation.neighborhood);

            let score = 0;
            if (locationName === requestedName) {
                score += 100;
            } else if (
                Math.min(locationName.length, requestedName.length) >= 5 &&
                (locationName.includes(requestedName) || requestedName.includes(locationName))
            ) {
                score += 75;
            }

            if (
                requestedAddress &&
                locationAddress &&
                (locationAddress.includes(requestedAddress) || requestedAddress.includes(locationAddress))
            ) {
                score += 50;
            }

            if (requestedNeighborhood && neighborhood === requestedNeighborhood) {
                score += 10;
            }

            return {mapLocation, score};
        })
        .sort((a, b) => b.score - a.score);

    return rankedLocations[0]?.score >= 50 ? rankedLocations[0].mapLocation : null;
}

function LocationMarker({loc, isFocused, selectedArtist, onClick, onArtistClick}: {
    loc: MapLocation;
    isFocused: boolean;
    selectedArtist: string | null;
    onClick: () => void;
    onArtistClick: (artist: string) => void;
}) {
    console.log(`[LocationMarker] Rendering: ${loc.name}`, {isFocused});
    const markerRef = useRef<L.Marker>(null);

    useEffect(() => {
        console.log(`[LocationMarker] useEffect (isFocused): ${loc.name}`, {isFocused});
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
                            className="text-sm underline hover:text-blue-900 block mb-2"
                        >
                            {loc.adresse}
                        </a>
                    )}
                    {loc.artists && loc.artists.length > 0 && (
                        <div className="text-[10px] grid grid-cols-2 gap-x-1 gap-y-0.5 border-t border-blue-200 pt-1">
                            {[...loc.artists].sort((a, b) => a.artist.localeCompare(b.artist)).map((artist, index: number) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        onArtistClick(artist.artist);
                                    }}
                                    className={`flex items-center gap-x-1 overflow-hidden text-left cursor-pointer transition-all origin-left hover:underline hover:text-blue-900 ${
                                        selectedArtist === artist.artist
                                            ? "font-bold underline underline-offset-2 text-blue-900"
                                            : ""
                                    }`}
                                    aria-current={selectedArtist === artist.artist ? "true" : undefined}
                                >
                                    <span className="truncate">{artist.artist}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </Popup>
        </Marker>
    );
}

export default function MapPage() {
    console.log("[MapPage] Rendering");
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as MapRouteState | null;
    const initialRouteLocation = resolveMapLocation(state);

    const [currentNeighborhood, setCurrentNeighborhood] = useState<string | null>(
        initialRouteLocation?.neighborhood || state?.neighborhood || null,
    );
    const [focusedLocation, setFocusedLocation] = useState<string | null>(
        initialRouteLocation?.name || null,
    );
    const [selectedArtist, setSelectedArtist] = useState<string | null>(state?.artist || null);

    const currentLocations = !currentNeighborhood
        ? neighborhoodData.flatMap(n => n.locations)
        : neighborhoodData.find(n => n.name === currentNeighborhood)?.locations || [];

    const geoLocations = currentLocations.filter(loc => loc.lat !== null && loc.lng !== null && loc.lat !== undefined && loc.lng !== undefined);

    let activeBounds: L.LatLngBoundsExpression | null = null;
    let activeCenter: [number, number] = [53.505, 10.005];
    let activeZoom = 13;

    if (focusedLocation) {
        const loc = currentLocations.find(l => l.name === focusedLocation);
        if (loc && loc.lat != null && loc.lng != null) {
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
            <Header
                tagline={mapHeader.tagline}
                title={mapHeader.title}
                description={mapHeader.description}
            />
            <section className="flex flex-row justify-center gap-x-1 mt-8 max-sm:mt-4 px-4 lg:px-0 w-full max-w-5xl mx-auto">
                {neighborhoodData.map((neighborhood) => {
                    const isActive = currentNeighborhood === neighborhood.name;
                    return (
                        <button
                            key={neighborhood.name}
                            onClick={() => {
                                console.log("[MapPage] Neighborhood button clicked", {
                                    name: neighborhood.name,
                                    isActive
                                });
                                if (isActive) {
                                    setCurrentNeighborhood(null);
                                } else {
                                    setCurrentNeighborhood(neighborhood.name);
                                }
                                setFocusedLocation(null);
                                setSelectedArtist(null);
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
            </section>
            <section className="w-full max-w-5xl mt-2 mx-auto">
                <div
                    className="w-full h-125 max-sm:h-100 border-2 border-blue-700 rounded-lg overflow-hidden shadow-lg z-0 mx-auto">
                    <MapContainer
                        center={activeCenter}
                        zoom={activeZoom}
                        scrollWheelZoom={false}
                        style={{height: "100%", width: "100%"}}
                    >
                        <ChangeView bounds={activeBounds} center={activeCenter} zoom={activeZoom}/>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {mapLocations
                            .filter(loc => loc.lat !== null && loc.lng !== null && loc.lat !== undefined && loc.lng !== undefined)
                            .map((loc, idx) => (
                                <LocationMarker
                                    key={`${loc.name}-${idx}`}
                                    loc={loc}
                                    isFocused={focusedLocation === loc.name}
                                    selectedArtist={focusedLocation === loc.name ? selectedArtist : null}
                                    onClick={() => {
                                        console.log("[MapPage] Marker clicked", {
                                            name: loc.name,
                                            neighborhood: loc.neighborhood
                                        });
                                        if (focusedLocation === loc.name) {
                                            setFocusedLocation(null);
                                            setSelectedArtist(null);
                                        } else {
                                            if (currentNeighborhood !== loc.neighborhood) {
                                                console.log("[MapPage] Switching neighborhood from marker click", loc.neighborhood);
                                                setCurrentNeighborhood(loc.neighborhood);
                                            }
                                            setFocusedLocation(loc.name);
                                            setSelectedArtist(null);
                                        }
                                    }}
                                    onArtistClick={(artist) => {
                                        navigate("/programm", {
                                            state: {
                                                artist,
                                                location: loc.name,
                                                neighborhood: loc.neighborhood,
                                            },
                                        });
                                    }}
                                />
                            ))}
                    </MapContainer>
                </div>
            </section>
        </PageTransition>
    );
}
