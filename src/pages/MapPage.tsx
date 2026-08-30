import {useLocation} from "react-router";
import Header from "../components/layout/Header.tsx";
import PageTransition from "../components/layout/PageTransitions.tsx";
import MapCanvas from "../components/sub/map/MapCanvas.tsx";
import NeighborhoodLocationFilters from "../components/sub/NeighborhoodLocationFilters.tsx";
import {useMapSelection} from "../data/useMapSelection.ts";
import {mapHeader, type MapRouteState} from "../data/MapData.ts";

export default function MapPage() {
    const routeState = useLocation().state as MapRouteState | null;
    const {
        selection,
        view,
        toggleNeighborhood,
        toggleLocation,
        toggleLocationByName,
        openArtist,
        openEvent,
    } = useMapSelection(routeState);

    return (
        <PageTransition>
            <Header
                tagline={mapHeader.tagline}
                title={mapHeader.title}
                description={mapHeader.description}
            />
            <NeighborhoodLocationFilters
                selectedNeighborhood={selection.currentNeighborhood}
                selectedLocation={selection.focusedLocation}
                onNeighborhoodToggle={toggleNeighborhood}
                onLocationToggle={toggleLocationByName}
            />
            <MapCanvas
                view={view}
                focusedLocation={selection.focusedLocation}
                selectedArtist={selection.selectedArtist}
                selectedEventId={selection.selectedEventId}
                selectedEvent={selection.selectedEvent}
                onLocationClick={toggleLocation}
                onArtistClick={openArtist}
                onEventClick={openEvent}
            />
        </PageTransition>
    );
}
