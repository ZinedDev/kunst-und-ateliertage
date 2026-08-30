import L from "leaflet";
import {allEvents, type ProgramEntry} from "./EventData.ts";
import {neighborhoodData} from "./ProgramData.ts";
import type {HeaderData, NeighborhoodData} from "./Types.ts";

export const mapHeader: HeaderData = {
    title: "Karte",
    tagline: "Quartiere, Orte, Künstler*innen",
    description: "",
};

export interface MapView {
    bounds: L.LatLngBounds | null;
    center: L.LatLngTuple;
    zoom: number;
}

export type MapLocation = NeighborhoodData["locations"][number] & {
    neighborhood: string;
    markerPosition: L.LatLngTuple | null;
};

export type GeocodedMapLocation = MapLocation & {
    markerPosition: L.LatLngTuple;
};

export interface MapRouteState {
    neighborhood?: string;
    location?: string;
    address?: string;
    artist?: string;
    eventId?: string;
    event?: string;
}

const defaultMapCenter: L.LatLngTuple = [53.505, 10.005];

const neighborhoodCoordinates: Record<string, {lat: number; lon: number; zoom: number}> = {
    Veddel: {lat: 53.522, lon: 10.020, zoom: 15},
    "Kirchdorf / Georgswerder": {lat: 53.501, lon: 10.021, zoom: 15},
    Wilhelmsburg: {lat: 53.510, lon: 9.985, zoom: 15},
};

const mapLocations: MapLocation[] = neighborhoodData.flatMap(neighborhood =>
    neighborhood.locations.map(location => ({
        ...location,
        neighborhood: neighborhood.name,
        markerPosition: location.lat != null && location.lng != null
            ? [location.lat, location.lng]
            : null,
    })),
);

export const geocodedMapLocations = mapLocations.filter(
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

export function resolveMapLocation(state: MapRouteState | null): MapLocation | null {
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

export const locationEventsMap: Record<string, ProgramEntry[]> = (() => {
    const eventsByLocation: Record<string, ProgramEntry[]> = {};

    for (const event of allEvents) {
        const location = resolveMapLocation({
            location: event.where.venue,
            address: event.where.address,
            neighborhood: event.where.neighborhood.replace(/^HH-/, ""),
        });

        if (location) {
            eventsByLocation[location.name] ??= [];
            eventsByLocation[location.name].push(event);
        }
    }

    return eventsByLocation;
})();

export function getMapView(currentNeighborhood: string | null, focusedLocation: string | null): MapView {
    const currentLocations = currentNeighborhood
        ? mapLocations.filter(location => location.neighborhood === currentNeighborhood)
        : mapLocations;
    const geocodedLocations = currentLocations.filter(
        (location): location is GeocodedMapLocation => location.markerPosition !== null,
    );

    if (focusedLocation) {
        const location = geocodedLocations.find(candidate => candidate.name === focusedLocation);
        return location
            ? {bounds: null, center: location.markerPosition, zoom: 17}
            : {bounds: null, center: defaultMapCenter, zoom: 13};
    }

    let center = defaultMapCenter;
    let zoom = 13;

    if (currentNeighborhood) {
        const coordinates = neighborhoodCoordinates[currentNeighborhood];
        if (coordinates) {
            center = [coordinates.lat, coordinates.lon];
            zoom = coordinates.zoom;
        }
    }

    const bounds = geocodedLocations.length > 0
        ? L.latLngBounds(geocodedLocations.map(location => location.markerPosition))
        : null;

    return {bounds, center, zoom};
}
