import {useCallback, useState} from "react";
import {Search, X} from "lucide-react";
import {useLocation, useSearchParams} from "react-router";
import {programHeader} from "../data/ProgramData.ts";
import type {ProgramCategory} from "../data/EventData.ts";

import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import ArtistsSection from "../components/sub/artists/ArtistsSection.tsx";
import EventsSection from "../components/sub/events/EventsSection.tsx";
import {motion} from "motion/react";

export default function ProgramPage() {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const routeState = location.state as {
        artist?: string;
        location?: string;
        neighborhood?: string;
        eventId?: string;
        event?: string;
        viewMode?: "artists" | "events";
    } | null;
    const viewParam = searchParams.get("view");
    const viewMode = viewParam === "artists" || viewParam === "events"
        ? viewParam
        : routeState?.viewMode || (routeState?.eventId || routeState?.event ? "events" : "artists");
    const searchQuery = searchParams.get("search") || "";
    const selectedNeighborhood = searchParams.get("neighborhood");
    const selectedLocation = searchParams.get("location");
    const categoryParam = searchParams.get("category");
    const selectedCategory: ProgramCategory | "ALL" =
        categoryParam === "PERFORMANCE_WORKSHOP" || categoryParam === "BILDERBUCHKINO" || categoryParam === "CONCERT"
            ? categoryParam
            : "ALL";
    const dateParam = searchParams.get("date");
    const selectedDate = dateParam === "2026-09-18" || dateParam === "2026-09-19" || dateParam === "2026-09-20"
        ? dateParam
        : "ALL";
    const [focusedArtist, setFocusedArtist] = useState(
        routeState?.artist
            ? {
                artist: routeState.artist,
                location: routeState.location,
                neighborhood: routeState.neighborhood,
            }
            : null,
    );

    const updateSearchParams = useCallback((updates: Record<string, string | null>) => {
        setSearchParams(current => {
            const next = new URLSearchParams(current);
            Object.entries(updates).forEach(([key, value]) => {
                if (value) {
                    next.set(key, value);
                } else {
                    next.delete(key);
                }
            });
            if (!next.has("view")) next.set("view", viewMode);
            return next;
        }, {replace: true, state: location.state});
    }, [location.state, setSearchParams, viewMode]);
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
                    onClick={() => updateSearchParams({view: "artists"})}
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
                    onClick={() => updateSearchParams({view: "events"})}
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
                        onChange={(e) => updateSearchParams({search: e.target.value})}
                        placeholder={viewMode === "artists" ? "Künstler*in suchen..." : "Event, Künstler*in oder Ort suchen..."}
                        className="w-full pl-10 pr-10 py-2.5 bg-white border-2 border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-700 transition-colors shadow-xs"
                    />
                    <button
                        type="button"
                        onClick={() => updateSearchParams({search: null})}
                        className="absolute right-3 text-zinc-400 hover:text-zinc-600 focus:outline-none cursor-pointer"
                        aria-label="Suchfeld leeren"
                    >
                        <X className="w-4 h-4"/>
                    </button>
                </div>
            </div>

            <section className="grid grid-cols-1 w-full max-w-5xl mb-8 mx-auto px-4 lg:px-0">
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
                        selectedNeighborhood={selectedNeighborhood}
                        selectedLocation={selectedLocation}
                        onNeighborhoodToggle={name => updateSearchParams({
                            neighborhood: selectedNeighborhood === name ? null : name,
                            location: null,
                        })}
                        onLocationToggle={name => updateSearchParams({
                            location: selectedLocation === name ? null : name,
                        })}
                        onResetFilters={() => updateSearchParams({
                            search: null,
                            neighborhood: null,
                            location: null,
                        })}
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
                        selectedCategory={selectedCategory}
                        selectedDate={selectedDate}
                        onCategoryToggle={category => updateSearchParams({
                            category: selectedCategory === category ? null : category,
                        })}
                        onDateToggle={date => updateSearchParams({
                            date: selectedDate === date ? null : date,
                        })}
                        onResetFilters={() => updateSearchParams({
                            search: null,
                            category: null,
                            date: null,
                        })}
                        focusedEvent={focusedEvent?.eventId || focusedEvent?.event ? focusedEvent : undefined}
                        onFocusedEventDismiss={() => setFocusedEvent(null)}
                    />
                </motion.div>
            </section>
        </PageTransition>
    );
}
