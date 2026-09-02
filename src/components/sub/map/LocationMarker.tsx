import {memo, useEffect, useMemo, useRef} from "react";
import L from "leaflet";
import {Marker, Popup} from "react-leaflet";
import type {ProgramEntry} from "../../../data/EventData.ts";
import LocationPopup from "./LocationPopup.tsx";
import type {GeocodedMapLocation, MapLocation} from "../../../data/MapData.ts";

function markerSvg(fill: string): string {
    return `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
            <path fill="${fill}" stroke="#fff" stroke-width="1.5"
                d="M12.5 1C6.15 1 1 6.15 1 12.5c0 8.2 11.5 26.2 11.5 26.2S24 20.7 24 12.5C24 6.15 18.85 1 12.5 1Z"/>
            <circle cx="12.5" cy="12.5" r="4" fill="#fff"/>
        </svg>
    `)}`;
}

const markerShadow = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
        <ellipse cx="20.5" cy="37" rx="12" ry="3" fill="#000" opacity=".25"/>
    </svg>
`)}`;

function createMarkerIcon(fill: string): L.Icon {
    return new L.Icon({
        iconRetinaUrl: markerSvg(fill),
        iconUrl: markerSvg(fill),
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
}

const defaultIcon = createMarkerIcon("#2a6fbb");
const highlightedIcon = createMarkerIcon("#dc2626");

interface LocationMarkerProps {
    location: GeocodedMapLocation;
    isFocused: boolean;
    selectedArtist: string | null;
    selectedEventId: string | null;
    selectedEvent: string | null;
    locationEvents: ProgramEntry[];
    onClick: (location: MapLocation) => void;
    onArtistClick: (location: MapLocation, artist: string) => void;
    onEventClick: (location: MapLocation, event: ProgramEntry) => void;
}

const LocationMarker = memo(function LocationMarker({
    location,
    isFocused,
    selectedArtist,
    selectedEventId,
    selectedEvent,
    locationEvents,
    onClick,
    onArtistClick,
    onEventClick,
}: LocationMarkerProps) {
    const markerRef = useRef<L.Marker>(null);
    const eventHandlers = useMemo<L.LeafletEventHandlerFnMap>(() => ({
        click: event => {
            L.DomEvent.stopPropagation(event);
            onClick(location);
        },
    }), [location, onClick]);

    useEffect(() => {
        if (isFocused) {
            markerRef.current?.openPopup();
        } else if (markerRef.current?.isPopupOpen()) {
            markerRef.current.closePopup();
        }
    }, [isFocused]);

    return (
        <Marker
            ref={markerRef}
            position={location.markerPosition}
            icon={isFocused ? highlightedIcon : defaultIcon}
            eventHandlers={eventHandlers}
        >
            <Popup
                autoPanPadding={[16, 16]}
            >
                <LocationPopup
                    location={location}
                    locationEvents={locationEvents}
                    selectedArtist={selectedArtist}
                    selectedEventId={selectedEventId}
                    selectedEvent={selectedEvent}
                    onArtistClick={onArtistClick}
                    onEventClick={onEventClick}
                />
            </Popup>
        </Marker>
    );
});

export default LocationMarker;
