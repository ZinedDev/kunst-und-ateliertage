import {useState, useMemo} from "react";
import {motion} from "motion/react";
import {neighborhoodData} from "../../data/ProgramData.ts";
import ArtistCard, {type ArtistCardEntry} from "./ArtistCard.tsx";
import ResetFiltersButton from "./ResetFiltersButton.tsx";

interface ArtistsSectionProps {
    searchQuery: string;
    onResetSearch?: () => void;
    focusedArtist?: {
        artist: string;
        location?: string;
        neighborhood?: string;
    };
    onFocusedArtistDismiss?: () => void;
}

export default function ArtistsSection({
    searchQuery,
    onResetSearch,
    focusedArtist,
    onFocusedArtistDismiss,
}: ArtistsSectionProps) {
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

    const neighborhoods = useMemo(() => neighborhoodData.map(n => n.name), []);

    const locations = useMemo(() => {
        if (!selectedNeighborhood) return [];
        return neighborhoodData.find(n => n.name === selectedNeighborhood)?.locations.map(l => l.name) || [];
    }, [selectedNeighborhood]);

    const filteredArtists = useMemo(() => {
        const artists: Array<ArtistCardEntry> = [];
        const query = searchQuery.trim().toLowerCase();

        neighborhoodData.forEach(n => {
            if (selectedNeighborhood && n.name !== selectedNeighborhood) return;

            n.locations.forEach(l => {
                if (selectedLocation && l.name !== selectedLocation) return;

                l.artists.forEach(a => {
                    if (query && !a.artist.toLowerCase().includes(query)) return;

                    artists.push({
                        ...a,
                        location: l.name,
                        neighborhood: n.name
                    });
                });
            });
        });

        return artists.sort((a, b) => {
            const nameA = a.artist || a.name || "";
            const nameB = b.artist || b.name || "";
            return nameA.localeCompare(nameB);
        });
    }, [selectedNeighborhood, selectedLocation, searchQuery]);

    const handleResetFilters = () => {
        onResetSearch?.();
        setSelectedNeighborhood(null);
        setSelectedLocation(null);
    };

    return (
        <>
            {/* Neighborhood Filter */}
            <div className="flex flex-row justify-center gap-1 mt-4 max-sm:mt-2 w-full max-w-5xl">
                {neighborhoods.map(name => (
                    <button
                        key={name}
                        onClick={() => {
                            if (selectedNeighborhood === name) {
                                setSelectedNeighborhood(null);
                            } else {
                                setSelectedNeighborhood(name);
                            }
                            setSelectedLocation(null);
                        }}
                        className={`px-3 py-1.5 rounded-lg border-2 text-base max-sm:text-xs font-bold transition-all duration-300 cursor-pointer ${
                            selectedNeighborhood === name
                                ? "border-2 border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20"
                                : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                        }`}
                    >
                        {name}
                    </button>
                ))}
            </div>

                <motion.div
                    key="neighborhood"
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: 'auto'}}
                    exit={{opacity: 0, height: 0}}
                    className="flex flex-wrap justify-center gap-1 mt-2 w-full max-w-5xl overflow-hidden mx-auto"
                >
                    {locations.map(name => (
                        <button
                            key={name}
                            onClick={() => {
                                if (selectedLocation === name) {
                                    setSelectedLocation(null);
                                } else {
                                    setSelectedLocation(name);
                                }
                            }}
                            className={`px-2 py-1.5 rounded-md border-2 text-[10px] font-bold transition-all cursor-pointer ${
                                selectedLocation === name
                                    ? "border-2 border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20"
                                    : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </motion.div>

            <ResetFiltersButton onClick={handleResetFilters} />

            {/* Artists Grid */}
            <div className="w-full max-w-5xl mt-6 mb-8 max-sm:mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
                {filteredArtists.map((artist, index) => (
                    <ArtistCard
                        key={`${artist.artist}-${artist.location}`}
                        artist={artist}
                        index={index}
                        isFocused={
                            artist.artist === focusedArtist?.artist &&
                            artist.location === focusedArtist?.location &&
                            artist.neighborhood === focusedArtist?.neighborhood
                        }
                        onFocusDismiss={onFocusedArtistDismiss}
                    />
                ))}
            </div>
        </>
    );
}
