import {useMemo, useState} from "react";
import type {ProgramEntry} from "../../../data/EventData.ts";
import type {GeocodedMapLocation, MapLocation} from "../../../data/MapData.ts";

const eventDateFilters = [
    {date: "2026-09-18", label: "Fr, 18.09."},
    {date: "2026-09-19", label: "Sa, 19.09."},
    {date: "2026-09-20", label: "So, 20.09."},
];

type PopupTab = "artists" | "events";

interface LocationPopupProps {
    location: GeocodedMapLocation;
    locationEvents: ProgramEntry[];
    selectedArtist: string | null;
    selectedEventId: string | null;
    selectedEvent: string | null;
    onArtistClick: (location: MapLocation, artist: string) => void;
    onEventClick: (location: MapLocation, event: ProgramEntry) => void;
}

interface PopupTabsProps {
    selectedTab: PopupTab;
    artistCount: number;
    eventCount: number;
    onSelect: (tab: PopupTab) => void;
}

function PopupTabs({selectedTab, artistCount, eventCount, onSelect}: PopupTabsProps) {
    const tabClassName = (tab: PopupTab) => `py-1 px-1 rounded ${
        selectedTab === tab ? "text-[12px]" : "text-[10px]"
    } font-bold text-center transition-all cursor-pointer ${
        selectedTab === tab
            ? "bg-orange-400/20 text-orange-950 border border-orange-400 shadow-xs"
            : "text-zinc-600 hover:text-blue-900 bg-white/70 border border-transparent"
    }`;

    return (
        <div className="relative flex items-center justify-between my-2 border-b py-2 w-50 h-auto">
            <button
                type="button"
                onClick={event => {
                    event.stopPropagation();
                    onSelect("artists");
                }}
                className={tabClassName("artists")}
            >
                Künstler*innen ({artistCount})
            </button>

            {eventCount > 0 && (
                <button
                    type="button"
                    onClick={event => {
                        event.stopPropagation();
                        onSelect("events");
                    }}
                    className={tabClassName("events")}
                >
                    Events ({eventCount})
                </button>
            )}
        </div>
    );
}

interface ArtistsListProps {
    location: GeocodedMapLocation;
    selectedArtist: string | null;
    onArtistClick: LocationPopupProps["onArtistClick"];
}

function ArtistsList({location, selectedArtist, onArtistClick}: ArtistsListProps) {
    const sortedArtists = useMemo(
        () => [...location.artists].sort((a, b) => a.artist.localeCompare(b.artist)),
        [location.artists],
    );

    if (sortedArtists.length === 0) {
        return <p className="text-[10px] text-zinc-400 italic py-1 text-center">Keine Künstler*innen an diesem Ort</p>;
    }

    return (
        <div className="text-[10px] grid grid-cols-2 gap-x-1 gap-y-1 pt-0.5 max-h-48 overflow-y-auto">
            {sortedArtists.map(artist => {
                const isSelected = selectedArtist === artist.artist;

                return (
                    <button
                        type="button"
                        key={artist.artist}
                        onClick={event => {
                            event.stopPropagation();
                            onArtistClick(location, artist.artist);
                        }}
                        className={`flex items-center gap-x-1 overflow-hidden text-left cursor-pointer transition-all origin-left hover:underline hover:text-blue-900 ${
                            isSelected
                                ? "font-bold underline underline-offset-2 text-blue-900"
                                : "text-zinc-800"
                        }`}
                        aria-current={isSelected ? "true" : undefined}
                    >
                        <span className="truncate">{artist.artist}</span>
                    </button>
                );
            })}
        </div>
    );
}

interface EventsListProps {
    location: GeocodedMapLocation;
    events: ProgramEntry[];
    selectedDate: string;
    selectedEventId: string | null;
    selectedEvent: string | null;
    onDateToggle: (date: string) => void;
    onEventClick: LocationPopupProps["onEventClick"];
}

function EventsList({
    location,
    events,
    selectedDate,
    selectedEventId,
    selectedEvent,
    onDateToggle,
    onEventClick,
}: EventsListProps) {
    const filteredEvents = useMemo(() => {
        const sortedEvents = [...events].sort((a, b) => a.what.localeCompare(b.what, "de-DE"));
        return selectedDate === "ALL"
            ? sortedEvents
            : sortedEvents.filter(event => event.occurrences.some(occurrence => occurrence.date === selectedDate));
    }, [events, selectedDate]);

    if (events.length === 0) {
        return <p className="text-[10px] text-zinc-400 italic py-1 text-center">Keine Events an diesem Ort</p>;
    }

    return (
        <>
            <div className="flex flex-wrap items-center justify-center gap-1 mb-2">
                {eventDateFilters.map(filter => (
                    <button
                        type="button"
                        key={filter.date}
                        onClick={event => {
                            event.stopPropagation();
                            onDateToggle(filter.date);
                        }}
                        className={`px-1.5 py-0.5 rounded border text-[9px] font-semibold transition-colors cursor-pointer ${
                            selectedDate === filter.date
                                ? "border-orange-400 bg-orange-400/10 text-orange-950"
                                : "border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                        }`}
                        aria-pressed={selectedDate === filter.date}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {filteredEvents.length > 0 ? (
                <div className="text-[10px] flex flex-col gap-x-1 gap-y-1 pt-0.5 max-h-48 overflow-y-auto">
                    {filteredEvents.map(event => {
                        const isSelected = selectedEventId === event.id || selectedEvent === event.what;

                        return (
                            <button
                                type="button"
                                key={event.id}
                                onClick={clickEvent => {
                                    clickEvent.stopPropagation();
                                    onEventClick(location, event);
                                }}
                                className={`flex flex-col items-start text-left cursor-pointer transition-all ${
                                    isSelected
                                        ? "bg-orange-400/10 border rounded-lg p-1 border-orange-300 text-blue-950"
                                        : "text-zinc-800"
                                }`}
                                aria-current={isSelected ? "true" : undefined}
                            >
                                <span className="font-semibold leading-tight">{event.what}</span>
                                <span className="text-[9px] text-zinc-500">{event.who}</span>
                            </button>
                        );
                    })}
                </div>
            ) : (
                <p className="text-[10px] text-zinc-400 italic py-1 text-center">Keine Events an diesem Datum</p>
            )}
        </>
    );
}

export default function LocationPopup({
    location,
    locationEvents,
    selectedArtist,
    selectedEventId,
    selectedEvent,
    onArtistClick,
    onEventClick,
}: LocationPopupProps) {
    const defaultTab: PopupTab = selectedEventId || selectedEvent
        ? "events"
        : selectedArtist || location.artists.length > 0 || locationEvents.length === 0
            ? "artists"
            : "events";
    const [selectedTab, setSelectedTab] = useState<PopupTab | null>(null);
    const [selectedDate, setSelectedDate] = useState("ALL");
    const activeTab = selectedTab ?? defaultTab;

    return (
        <div className="text-blue-700 w-50 h-auto overflow-y-scroll">
            <h3 className="font-bold text-base leading-snug">{location.name}</h3>
            {location.adresse && (
                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.adresse)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-500 hover:text-blue-900 block mb-1.5 underline"
                >
                    {location.adresse}
                </a>
            )}

            <PopupTabs
                selectedTab={activeTab}
                artistCount={location.artists.length}
                eventCount={locationEvents.length}
                onSelect={setSelectedTab}
            />

            {activeTab === "artists" ? (
                <ArtistsList
                    location={location}
                    selectedArtist={selectedArtist}
                    onArtistClick={onArtistClick}
                />
            ) : (
                <EventsList
                    location={location}
                    events={locationEvents}
                    selectedDate={selectedDate}
                    selectedEventId={selectedEventId}
                    selectedEvent={selectedEvent}
                    onDateToggle={date => setSelectedDate(selectedDate === date ? "ALL" : date)}
                    onEventClick={onEventClick}
                />
            )}
        </div>
    );
}
