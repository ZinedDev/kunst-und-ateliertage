import {useState, useMemo} from "react";
import {neighborhoodData} from "../../../data/ProgramData.ts";
import ArtistCard, {type ArtistCardEntry} from "./ArtistCard.tsx";
import ResetFiltersButton from "../ResetFiltersButton.tsx";
import NeighborhoodLocationFilters from "../NeighborhoodLocationFilters.tsx";

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
            <NeighborhoodLocationFilters
                selectedNeighborhood={selectedNeighborhood}
                selectedLocation={selectedLocation}
                onNeighborhoodToggle={name => {
                    setSelectedNeighborhood(current => current === name ? null : name);
                    setSelectedLocation(null);
                }}
                onLocationToggle={name => {
                    setSelectedLocation(current => current === name ? null : name);
                }}
            />

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
