import {useCallback, useMemo, useReducer} from "react";
import {useNavigate} from "react-router";
import type {ProgramEntry} from "./EventData.ts";
import {
    getMapView,
    resolveMapLocation,
    type MapLocation,
    type MapRouteState,
} from "./MapData.ts";

interface MapSelection {
    currentNeighborhood: string | null;
    focusedLocation: string | null;
    selectedArtist: string | null;
    selectedEventId: string | null;
    selectedEvent: string | null;
}

type MapSelectionAction =
    | {type: "toggle-neighborhood"; neighborhood: string}
    | {type: "toggle-location"; location: MapLocation};

function createInitialSelection(state: MapRouteState | null): MapSelection {
    const initialLocation = resolveMapLocation(state);

    return {
        currentNeighborhood: initialLocation?.neighborhood || state?.neighborhood || null,
        focusedLocation: initialLocation?.name || null,
        selectedArtist: state?.artist || null,
        selectedEventId: state?.eventId || null,
        selectedEvent: state?.event || null,
    };
}

function selectionReducer(selection: MapSelection, action: MapSelectionAction): MapSelection {
    if (action.type === "toggle-neighborhood") {
        if (selection.currentNeighborhood === action.neighborhood) {
            return {
                currentNeighborhood: null,
                focusedLocation: null,
                selectedArtist: null,
                selectedEventId: null,
                selectedEvent: null,
            };
        }

        return {
            currentNeighborhood: action.neighborhood,
            focusedLocation: null,
            selectedArtist: null,
            selectedEventId: null,
            selectedEvent: null,
        };
    }

    if (selection.focusedLocation === action.location.name) {
        return {
            ...selection,
            focusedLocation: null,
            selectedArtist: null,
            selectedEventId: null,
            selectedEvent: null,
        };
    }

    return {
        currentNeighborhood: action.location.neighborhood,
        focusedLocation: action.location.name,
        selectedArtist: null,
        selectedEventId: null,
        selectedEvent: null,
    };
}

export function useMapSelection(routeState: MapRouteState | null) {
    const navigate = useNavigate();
    const [selection, dispatch] = useReducer(selectionReducer, routeState, createInitialSelection);
    const initialView = useMemo(() => getMapView(null, null), []);
    const view = useMemo(
        () => selection.currentNeighborhood === null && selection.focusedLocation === null
            ? initialView
            : getMapView(selection.currentNeighborhood, selection.focusedLocation),
        [initialView, selection.currentNeighborhood, selection.focusedLocation],
    );

    const toggleNeighborhood = useCallback((neighborhood: string) => {
        dispatch({type: "toggle-neighborhood", neighborhood});
    }, []);

    const toggleLocation = useCallback((location: MapLocation) => {
        dispatch({type: "toggle-location", location});
    }, []);

    const toggleLocationByName = useCallback((locationName: string) => {
        const location = resolveMapLocation({
            neighborhood: selection.currentNeighborhood || undefined,
            location: locationName,
        });

        if (location) dispatch({type: "toggle-location", location});
    }, [selection.currentNeighborhood]);

    const openArtist = useCallback((location: MapLocation, artist: string) => {
        navigate("/programm", {
            state: {
                artist,
                location: location.name,
                neighborhood: location.neighborhood,
                viewMode: "artists",
            },
        });
    }, [navigate]);

    const openEvent = useCallback((location: MapLocation, event: ProgramEntry) => {
        navigate("/programm", {
            state: {
                eventId: event.id,
                event: event.what,
                location: location.name,
                neighborhood: location.neighborhood,
                viewMode: "events",
            },
        });
    }, [navigate]);

    return {
        selection,
        view,
        toggleNeighborhood,
        toggleLocation,
        toggleLocationByName,
        openArtist,
        openEvent,
    };
}
