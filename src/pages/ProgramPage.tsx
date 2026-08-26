import {useState, useMemo} from "react";
import {motion} from "motion/react";
import {useNavigate} from "react-router";
import {Search, X} from "lucide-react";
import {neighborhoodData} from "../data/ProgramData";
import {programHeader} from "../data/ProgramData";

import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";


export default function ProgramPage() {

    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const neighborhoods = useMemo(() => neighborhoodData.map(n => n.name), []);

    const locations = useMemo(() => {
        if (!selectedNeighborhood) return [];
        return neighborhoodData.find(n => n.name === selectedNeighborhood)?.locations.map(l => l.name) || [];
    }, [selectedNeighborhood]);

    const filteredArtists = useMemo(() => {
        const artists: Array<{ name: string; location: string; neighborhood: string }> = [];
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

    const handleArtistClick = (neighborhood: string, location: string) => {
        navigate("/besucherinnen", {
            state: {
                neighborhood,
                location
            }
        });
    };

    return (
        <PageTransition>
            <Header
                tagline={programHeader.tagline}
                title={programHeader.title}
                description={programHeader.description}
            />
            <div className="w-full max-w-md mx-auto mt-8 max-sm:mt-4 px-4">
                <div className="relative flex items-center">
                    <Search className="absolute left-3 w-5 h-5 text-zinc-400 pointer-events-none" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Künstler*in suchen..."
                        className="w-full pl-10 pr-10 py-2.5 bg-white border-2 border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-700 transition-colors shadow-xs"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 text-zinc-400 hover:text-zinc-600 focus:outline-none cursor-pointer"
                            aria-label="Suchfeld leeren"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
            <section className="w-full max-w-5xl mb-8 mx-auto">
                {/* Neighborhood Filter */}
                <div
                    className="flex flex-row justify-center gap-1 mt-4 max-sm:mt-2 w-full max-w-5xl px-4 lg:px-0 overflow-x-hidden">
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
                            className={`px-2 rounded-md border-2 uppercase tracking-widest text-base max-sm:text-xs font-bold transition-all duration-300 ${
                                selectedNeighborhood === name
                                    ? 'bg-blue-700 border-blue-700 text-white shadow-md'
                                    : 'bg-transparent border-zinc-300 text-zinc-600 hover:border-blue-700 hover:text-blue-700'
                            }`}
                        >
                            {name.toUpperCase()}
                        </button>
                    ))}
                </div>
                {selectedNeighborhood && (
                    <motion.div
                        key={"neighborhood"}
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        className="flex flex-wrap justify-center gap-1 mt-2 w-full max-w-5xl px-4 lg:px-0 overflow-hidden mx-auto">
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
                                className={`px-2 py-1.5 rounded-md border-2 text-xs font-bold transition-all ${
                                    selectedLocation === name
                                        ? 'bg-zinc-800 border-zinc-800 text-white'
                                        : 'border-zinc-200 text-zinc-500 hover:border-zinc-800 hover:text-zinc-800'
                                }`}
                            >
                                {name}
                            </button>
                        ))}
                    </motion.div>
                )}
                <div className="w-full max-w-5xl mt-4 mb-8 max-sm:mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mx-auto">
                    {filteredArtists.map((artist, index) => (
                        <motion.div
                            key={`${artist.name}-${artist.location}`}
                            layout
                            transition={{layout: {duration: .2, type: "spring", stiffness: 100, damping: 20, ease: "easeInOut", } }}
                            onClick={() => handleArtistClick(artist.neighborhood, artist.location)}
                        >
                            <motion.div
                                initial={{opacity: 0, y: index % 2 ? 10 : -10}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: false}}
                                transition={{duration: 0.2, type: "spring", stiffness: 100, delay: index * 0.01, restDelta: 10}}
                                className="flex flex-col items-start px-4 py-2 bg-white border-2 border-zinc-100 rounded-xl hover:border-blue-700 hover:shadow-xl transition-all group text-left w-full h-full"
                            >
                                <span className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-blue-700 transition-colors">
                                    {artist.name}
                                </span>
                                <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
                                    {artist.location}
                                </span>
                                <span className="text-xs text-blue-600 font-bold mt-1">
                                    {artist.neighborhood}
                                </span>
                            </motion.div>

                        </motion.div>
                    ))}
                </div>
            </section>
        </PageTransition>
    );
}
