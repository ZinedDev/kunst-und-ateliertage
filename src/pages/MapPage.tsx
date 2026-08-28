import {memo, useCallback, useEffect, useMemo, useReducer, useRef} from "react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {neighborhoodData} from "../data/ProgramData.ts";
import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import L from "leaflet";
import {useIsPresent} from "motion/react";
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

const defaultIcon = new L.Icon.Default();

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

interface MapView {
    bounds: L.LatLngBounds | null;
    center: L.LatLngTuple;
    zoom: number;
}

const defaultMapCenter: L.LatLngTuple = [53.505, 10.005];

function applyMapView(map: L.Map, view: MapView) {
    const container = map.getContainer();
    const size = map.getSize();

    if (!container.isConnected || size.x <= 0 || size.y <= 0) return;

    if (view.bounds) {
        const padding = [size.x * 0.1, size.y * 0.1] as L.PointTuple;
        map.fitBounds(view.bounds, {padding, animate: false});
    } else {
        map.setView(view.center, view.zoom, {animate: false});
    }
}

function ChangeView({view}: {view: MapView}) {
    const map = useMap();
    const isPresent = useIsPresent();
    const latestView = useRef(view);

    useEffect(() => {
        latestView.current = view;
        if (!isPresent) return;

        applyMapView(map, view);
    }, [isPresent, map, view]);

    useEffect(() => {
        if (!isPresent) return;

        const container = map.getContainer();
        const initialRect = container.getBoundingClientRect();
        let previousWidth = initialRect.width;
        let previousHeight = initialRect.height;
        let resizeTimer: number | undefined;

        const resizeObserver = new ResizeObserver(([entry]) => {
            if (!entry || !container.isConnected) return;

            const {width, height} = entry.contentRect;
            if (width <= 0 || height <= 0) return;
            if (width === previousWidth && height === previousHeight) return;

            previousWidth = width;
            previousHeight = height;
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                if (!container.isConnected || container.clientWidth <= 0 || container.clientHeight <= 0) return;

                map.invalidateSize({animate: false, pan: false, debounceMoveend: true});
                applyMapView(map, latestView.current);
            }, 100);
        });

        resizeObserver.observe(container);

        return () => {
            window.clearTimeout(resizeTimer);
            resizeObserver.disconnect();
        };
    }, [isPresent, map]);

    return null;
}

type MapLocation = NeighborhoodData["locations"][number] & {
    neighborhood: string;
    markerPosition: L.LatLngTuple | null;
};

type GeocodedMapLocation = MapLocation & {markerPosition: L.LatLngTuple};

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
        markerPosition: mapLocation.lat != null && mapLocation.lng != null
            ? [mapLocation.lat, mapLocation.lng]
            : null,
    })),
);

const geocodedMapLocations = mapLocations.filter(
    (location): location is GeocodedMapLocation => location.markerPosition !== null,
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

interface MapSelection {
    currentNeighborhood: string | null;
    focusedLocation: string | null;
    selectedArtist: string | null;
}

type MapSelectionAction =
    | {type: "toggle-neighborhood"; neighborhood: string}
    | {type: "toggle-location"; location: MapLocation};

function createInitialMapSelection(state: MapRouteState | null): MapSelection {
    const initialLocation = resolveMapLocation(state);

    return {
        currentNeighborhood: initialLocation?.neighborhood || state?.neighborhood || null,
        focusedLocation: initialLocation?.name || null,
        selectedArtist: state?.artist || null,
    };
}

function mapSelectionReducer(selection: MapSelection, action: MapSelectionAction): MapSelection {
    if (action.type === "toggle-neighborhood") {
        return {
            currentNeighborhood: selection.currentNeighborhood === action.neighborhood
                ? null
                : action.neighborhood,
            focusedLocation: null,
            selectedArtist: null,
        };
    }

    if (selection.focusedLocation === action.location.name) {
        return {
            ...selection,
            focusedLocation: null,
            selectedArtist: null,
        };
    }

    return {
        currentNeighborhood: action.location.neighborhood,
        focusedLocation: action.location.name,
        selectedArtist: null,
    };
}

interface LocationMarkerProps {
    loc: GeocodedMapLocation;
    isFocused: boolean;
    selectedArtist: string | null;
    onClick: (location: MapLocation) => void;
    onArtistClick: (location: MapLocation, artist: string) => void;
}

const LocationMarker = memo(function LocationMarker({
    loc,
    isFocused,
    selectedArtist,
    onClick,
    onArtistClick,
}: LocationMarkerProps) {
    const markerRef = useRef<L.Marker>(null);
    const sortedArtists = useMemo(
        () => [...loc.artists].sort((a, b) => a.artist.localeCompare(b.artist)),
        [loc.artists],
    );
    const eventHandlers = useMemo<L.LeafletEventHandlerFnMap>(() => ({
        click: (event) => {
            L.DomEvent.stopPropagation(event);
            onClick(loc);
        },
    }), [loc, onClick]);

    useEffect(() => {
        if (isFocused && markerRef.current) {
            markerRef.current.openPopup();
        } else if (markerRef.current?.isPopupOpen()) {
            markerRef.current.closePopup();
        }
    }, [isFocused, loc.name]);

    return (
        <Marker
            ref={markerRef}
            position={loc.markerPosition}
            icon={isFocused ? highlightedIcon : defaultIcon}
            eventHandlers={eventHandlers}
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
                            {sortedArtists.map((artist) => (
                                <button
                                    type="button"
                                    key={artist.artist}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        onArtistClick(loc, artist.artist);
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
});

export default function MapPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as MapRouteState | null;
    const [selection, dispatch] = useReducer(mapSelectionReducer, state, createInitialMapSelection);
    const {currentNeighborhood, focusedLocation, selectedArtist} = selection;

    const activeView = useMemo<MapView>(() => {
        const currentLocations = !currentNeighborhood
            ? neighborhoodData.flatMap(neighborhood => neighborhood.locations)
            : neighborhoodData.find(neighborhood => neighborhood.name === currentNeighborhood)?.locations || [];
        const geoLocations = currentLocations.filter(location => location.lat != null && location.lng != null);

        let bounds: L.LatLngBounds | null = null;
        let center = defaultMapCenter;
        let zoom = 13;

        if (focusedLocation) {
            const focusedMapLocation = currentLocations.find(mapLocation => mapLocation.name === focusedLocation);
            if (focusedMapLocation?.lat != null && focusedMapLocation.lng != null) {
                center = [focusedMapLocation.lat, focusedMapLocation.lng];
                zoom = 17;
            }
        } else {
            if (currentNeighborhood) {
                const coordinates = neighborhoodCoordinates[currentNeighborhood];
                if (coordinates) {
                    center = [coordinates.lat, coordinates.lon];
                    zoom = coordinates.zoom;
                }
            }

            if (geoLocations.length > 0) {
                bounds = L.latLngBounds(
                    geoLocations.map(mapLocation => [mapLocation.lat!, mapLocation.lng!] as L.LatLngTuple),
                );
            }
        }

        return {bounds, center, zoom};
    }, [currentNeighborhood, focusedLocation]);

    const handleNeighborhoodToggle = useCallback((neighborhood: string) => {
        dispatch({type: "toggle-neighborhood", neighborhood});
    }, []);

    const handleLocationToggle = useCallback((mapLocation: MapLocation) => {
        dispatch({type: "toggle-location", location: mapLocation});
    }, []);

    const handleArtistClick = useCallback((mapLocation: MapLocation, artist: string) => {
        navigate("/programm", {
            state: {
                artist,
                location: mapLocation.name,
                neighborhood: mapLocation.neighborhood,
            },
        });
    }, [navigate]);

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
                            onClick={() => handleNeighborhoodToggle(neighborhood.name)}
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
                        center={activeView.center}
                        zoom={activeView.zoom}
                        scrollWheelZoom={false}
                        style={{height: "100%", width: "100%"}}
                    >
                        <ChangeView view={activeView}/>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {geocodedMapLocations.map((loc) => (
                            <LocationMarker
                                key={`${loc.neighborhood}-${loc.name}`}
                                loc={loc}
                                isFocused={focusedLocation === loc.name}
                                selectedArtist={focusedLocation === loc.name ? selectedArtist : null}
                                onClick={handleLocationToggle}
                                onArtistClick={handleArtistClick}
                            />
                        ))}
                    </MapContainer>
                </div>
            </section>
        </PageTransition>
    );
}
