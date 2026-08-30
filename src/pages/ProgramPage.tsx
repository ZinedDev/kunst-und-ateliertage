import {useState} from "react";
import {Search, X} from "lucide-react";
import {useLocation} from "react-router";
import {programHeader} from "../data/ProgramData.ts";

import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import ArtistsSection from "../components/sub/artists/ArtistsSection.tsx";
import EventsSection from "../components/sub/events/EventsSection.tsx";
import {motion} from "motion/react";

export default function ProgramPage() {
    const location = useLocation();
    const routeState = location.state as {
        artist?: string;
        location?: string;
        neighborhood?: string;
        eventId?: string;
        event?: string;
        viewMode?: "artists" | "events";
    } | null;
    const initialViewMode = routeState?.viewMode || (routeState?.eventId || routeState?.event ? "events" : "artists");
    const [viewMode, setViewMode] = useState<"artists" | "events">(initialViewMode);
    const [searchQuery, setSearchQuery] = useState("");
    const [focusedArtist, setFocusedArtist] = useState(
        routeState?.artist
            ? {
                  artist: routeState.artist,
                  location: routeState.location,
                  neighborhood: routeState.neighborhood,
              }
            : null,
    );
    const [focusedEvent, setFocusedEvent] = useState(
        routeState?.eventId || routeState?.event
            ? {
                  eventId: routeState.eventId,
                  event: routeState.event,
                  location: routeState.location,
                  neighborhood: routeState.neighborhood,
              }
            : null,
    );

    return (
        <PageTransition>

            {/* Header */}
            <Header
                tagline={programHeader.tagline}
                title={programHeader.title}
                description={programHeader.description}
            />

            {/* View Switcher Button */}
            <div className="flex justify-center items-center gap-2 mt-8 max-sm:mt-4 px-4">
                <button
                    type="button"
                    onClick={() => {
                        setViewMode("artists");
                    }}
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                        viewMode === "artists"
                            ? "border-2 border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20"
                            : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                    }`}
                >
                    Künstler*innen
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setViewMode("events");
                    }}
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                        viewMode === "events"
                            ? "border-2 border-orange-400 bg-orange-400/10  shadow-md shadow-blue-700/20"
                            : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                    }`}
                >
                    Events
                </button>
            </div>

            {/* Search Input */}
            <div className="w-full max-w-md mx-auto mt-6 max-sm:mt-4 px-4">
                <div className="relative flex items-center">
                    <Search className="absolute left-3 w-5 h-5 text-zinc-400 pointer-events-none"/>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={viewMode === "artists" ? "Künstler*in suchen..." : "Event, Künstler*in oder Ort suchen..."}
                        className="w-full pl-10 pr-10 py-2.5 bg-white border-2 border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-700 transition-colors shadow-xs"
                    />
                    <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 text-zinc-400 hover:text-zinc-600 focus:outline-none cursor-pointer"
                        aria-label="Suchfeld leeren"
                    >
                        <X className="w-4 h-4"/>
                    </button>
                </div>
            </div>

            <section className="grid w-full max-w-5xl mb-8 mx-auto px-4 lg:px-0">
                {/* Both panels stay mounted so their local state is preserved. */}
                <motion.div
                    className={`col-start-1 row-start-1 w-full ${viewMode === "artists" ? "" : "hidden"}`}
                    initial={false}
                    animate={{opacity: viewMode === "artists" ? 1 : 0}}
                    transition={{duration: 0.2}}
                    style={{
                        pointerEvents: viewMode === "artists" ? "auto" : "none",
                        visibility: viewMode === "artists" ? "visible" : "hidden",
                    }}
                    aria-hidden={viewMode !== "artists"}
                >
                    <ArtistsSection
                        searchQuery={searchQuery}
                        onResetSearch={() => setSearchQuery("")}
                        focusedArtist={focusedArtist?.artist ? focusedArtist : undefined}
                        onFocusedArtistDismiss={() => setFocusedArtist(null)}
                    />
                </motion.div>

                <motion.div
                    className={`col-start-1 row-start-1 w-full ${viewMode === "events" ? "" : "hidden"}`}
                    initial={false}
                    animate={{opacity: viewMode === "events" ? 1 : 0}}
                    transition={{duration: 0.2}}
                    style={{
                        pointerEvents: viewMode === "events" ? "auto" : "none",
                        visibility: viewMode === "events" ? "visible" : "hidden",
                    }}
                    aria-hidden={viewMode !== "events"}
                >
                    <EventsSection
                        searchQuery={searchQuery}
                        onResetSearch={() => setSearchQuery("")}
                        focusedEvent={focusedEvent?.eventId || focusedEvent?.event ? focusedEvent : undefined}
                        onFocusedEventDismiss={() => setFocusedEvent(null)}
                    />
                </motion.div>
            </section>
        </PageTransition>
    );
}
