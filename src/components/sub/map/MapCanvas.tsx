import {useEffect, useRef} from "react";
import L from "leaflet";
import {useIsPresent} from "motion/react";
import {MapContainer, TileLayer, useMap} from "react-leaflet";
import type {ProgramEntry} from "../../../data/EventData.ts";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker.tsx";
import {
    geocodedMapLocations,
    locationEventsMap,
    type MapLocation,
    type MapView,
} from "../../../data/MapData.ts";

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

function MapViewController({view}: {view: MapView}) {
    const map = useMap();
    const isPresent = useIsPresent();
    const latestView = useRef(view);

    useEffect(() => {
        latestView.current = view;
        if (isPresent) applyMapView(map, view);
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

interface MapCanvasProps {
    view: MapView;
    focusedLocation: string | null;
    selectedArtist: string | null;
    selectedEventId: string | null;
    selectedEvent: string | null;
    onLocationClick: (location: MapLocation) => void;
    onArtistClick: (location: MapLocation, artist: string) => void;
    onEventClick: (location: MapLocation, event: ProgramEntry) => void;
}

export default function MapCanvas({
    view,
    focusedLocation,
    selectedArtist,
    selectedEventId,
    selectedEvent,
    onLocationClick,
    onArtistClick,
    onEventClick,
}: MapCanvasProps) {
    return (
        <section className="w-full max-w-5xl mt-2 mx-auto">
            <div className="w-full h-125 max-sm:h-100 border-2 border-blue-700 rounded-lg overflow-hidden shadow-lg z-0 mx-auto">
                <MapContainer
                    center={view.center}
                    zoom={view.zoom}
                    scrollWheelZoom={false}
                    style={{height: "100%", width: "100%"}}
                >
                    <MapViewController view={view}/>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        keepBuffer={1}
                        updateWhenIdle
                        updateWhenZooming={false}
                    />
                    {geocodedMapLocations.map(location => {
                        const isFocused = focusedLocation === location.name;

                        return (
                            <LocationMarker
                                key={`${location.neighborhood}-${location.name}`}
                                location={location}
                                isFocused={isFocused}
                                selectedArtist={isFocused ? selectedArtist : null}
                                selectedEventId={isFocused ? selectedEventId : null}
                                selectedEvent={isFocused ? selectedEvent : null}
                                locationEvents={locationEventsMap[location.name] || []}
                                onClick={onLocationClick}
                                onArtistClick={onArtistClick}
                                onEventClick={onEventClick}
                            />
                        );
                    })}
                </MapContainer>
            </div>
        </section>
    );
}
