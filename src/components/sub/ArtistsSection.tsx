import {useState, useMemo} from "react";
import {motion} from "motion/react";
import {neighborhoodData} from "../../data/ProgramData.ts";
import ArtistCard, {type ArtistEntry} from "./ArtistCard.tsx";

interface ArtistsSectionProps {
    searchQuery: string;
    onResetSearch?: () => void;
}

export default function ArtistsSection({searchQuery, onResetSearch}: ArtistsSectionProps) {
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

    const neighborhoods = useMemo(() => neighborhoodData.map(n => n.name), []);

    const locations = useMemo(() => {
        if (!selectedNeighborhood) return [];
        return neighborhoodData.find(n => n.name === selectedNeighborhood)?.locations.map(l => l.name) || [];
    }, [selectedNeighborhood]);

    const filteredArtists = useMemo(() => {
        const artists: Array<ArtistEntry> = [];
        const query = searchQuery.trim().toLowerCase();

        neighborhoodData.forEach(n => {
            if (selectedNeighborhood && n.name !== selectedNeighborhood) return;

            n.locations.forEach(l => {
                if (selectedLocation && l.name !== selectedLocation) return;

                l.artists.forEach(a => {
                    if (query && !a.name.toLowerCase().includes(query)) return;

                    artists.push({
                        name: a.name,
                        location: l.name,
                        neighborhood: n.name
                    });
                });
            });
        });

        return artists.sort((a, b) => a.name.localeCompare(b.name));
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

            {selectedNeighborhood && (
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
                            className={`px-2 py-1.5 rounded-md border-2 text-xs font-bold transition-all cursor-pointer ${
                                selectedLocation === name
                                    ? "border-2 border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20"
                                    : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </motion.div>
            )}

            {/* Artists Grid */}
            <div className="w-full max-w-5xl mt-6 mb-8 max-sm:mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
                {filteredArtists.map((artist, index) => (
                    <ArtistCard
                        key={`${artist.name}-${artist.location}`}
                        artist={artist}
                        index={index}
                    />
                ))}

                {filteredArtists.length === 0 && (
                    <div className="col-span-full text-center py-12 px-4">
                        <p className="text-zinc-500 text-base">Keine Künstler*innen gefunden.</p>
                        <button
                            type="button"
                            onClick={handleResetFilters}
                            className="mt-3 text-sm font-semibold text-blue-700 hover:underline cursor-pointer"
                        >
                            Filter zurücksetzen
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
