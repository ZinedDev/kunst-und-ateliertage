import {useState, useMemo} from "react";
import {allEvents, getCategoryBadgeStyle, type ProgramCategory} from "../../../data/EventData.ts";
import EventCard from "./EventCard.tsx";
import ResetFiltersButton from "../ResetFiltersButton.tsx";

const categoryFilters: { key: ProgramCategory | "ALL"; label: string }[] = [
    {key: "PERFORMANCE_WORKSHOP", label: "Workshops & Performances"},
    {key: "BILDERBUCHKINO", label: "Bilderbuchkino"},
    {key: "CONCERT", label: "Konzerte"},
];

const dateFilters = [
    {date: "2026-09-18", label: "Fr, 18.09."},
    {date: "2026-09-19", label: "Sa, 19.09."},
    {date: "2026-09-20", label: "So, 20.09."},
];

interface EventsSectionProps {
    searchQuery: string;
    onResetSearch?: () => void;
    focusedEvent?: {
        eventId?: string;
        event?: string;
        location?: string;
        neighborhood?: string;
    };
    onFocusedEventDismiss?: () => void;
}

export default function EventsSection({
                                          searchQuery,
                                          onResetSearch,
                                          focusedEvent,
                                          onFocusedEventDismiss,
                                      }: EventsSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<ProgramCategory | "ALL">("ALL");
    const [selectedDate, setSelectedDate] = useState<string>("ALL");

    const filteredEvents = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return allEvents.filter(event => {
            // Category filter
            if (selectedCategory !== "ALL" && event.category !== selectedCategory) {
                return false;
            }

            // Date filter
            if (selectedDate !== "ALL") {
                const hasDate = event.occurrences.some(occ => occ.date === selectedDate);
                if (!hasDate) return false;
            }

            // Search query filter
            if (query) {
                const matchWhat = event.what.toLowerCase().includes(query);
                const matchWho = event.who.toLowerCase().includes(query);
                const matchVenue = event.where.venue.toLowerCase().includes(query);
                const matchRoom = event.where.room?.toLowerCase().includes(query) ?? false;
                const matchAddress = event.where.address.toLowerCase().includes(query);
                const matchNeighborhood = event.where.neighborhood.toLowerCase().includes(query);

                if (!matchWhat && !matchWho && !matchVenue && !matchRoom && !matchAddress && !matchNeighborhood) {
                    return false;
                }
            }

            return true;
        });
    }, [selectedCategory, selectedDate, searchQuery]);

    const handleResetFilters = () => {
        onResetSearch?.();
        setSelectedCategory("ALL");
        setSelectedDate("ALL");
    };

    return (
        <>
            {/* Event Category Filters */}
            <div
                className="flex flex-wrap max-sm:flex-col items-center justify-center gap-1.5 mt-4 max-sm:mt-2 w-full max-w-5xl">
                {categoryFilters.map(filter => (
                    <button
                        key={filter.key}
                        onClick={() => setSelectedCategory(selectedCategory === filter.key ? "ALL" : filter.key)}
                        className={`px-3 py-1.5 rounded-lg border-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                            selectedCategory === filter.key
                                ? `${getCategoryBadgeStyle(filter.key as ProgramCategory)} shadow-md shadow-blue-700/20`
                                : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Event Date Filters */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-2 w-full max-w-5xl">
                {dateFilters.map(filter => (
                    <button
                        key={filter.date}
                        onClick={() => setSelectedDate(selectedDate === filter.date ? "ALL" : filter.date)}
                        className={`px-2.5 py-1 rounded-md border text-[10px] font-semibold transition-all duration-200 cursor-pointer ${
                            selectedDate === filter.date
                                ? "border-2 border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20"
                                : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <ResetFiltersButton onClick={handleResetFilters}/>

            {/* Events Grid */}
            <div className="w-full mt-6 mb-8 max-sm:mb-2 columns-1 md:columns-2 lg:columns-3 gap-4 mx-auto">
                {filteredEvents.map((event, index) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        index={index}
                        isFocused={
                            focusedEvent?.eventId
                                ? event.id === focusedEvent.eventId
                                : Boolean(focusedEvent?.event && event.what === focusedEvent.event)
                        }
                        onFocusDismiss={onFocusedEventDismiss}
                    />
                ))}
            </div>

            {filteredEvents.length === 0 && (
                <div className="text-center py-12 px-4">
                    <p className="text-zinc-500 text-base">Keine Events gefunden.</p>
                </div>
            )}

        </>
    );
}
