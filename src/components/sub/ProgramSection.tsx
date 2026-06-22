import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { neighborhoodLocations, neighborhoodArtists } from "../../data/ProgramData.ts";

export default function ProgramSection() {
    const [expandedNeighborhoods, setExpandedNeighborhoods] = useState<Record<string, boolean>>({});
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

    const toggleNeighborhood = (name: string) => {
        setExpandedNeighborhoods(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const toggleSection = (neighborhoodName: string, sectionType: 'locations' | 'artists') => {
        const key = `${neighborhoodName}-${sectionType}`;
        setExpandedSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <section className="mt-8 flex flex-col gap-1 mx-auto lg:mx-0">
            {neighborhoodLocations.map((neighborhood) => {
                const artistsForNeighborhood = neighborhoodArtists.find(
                    (na) => na.name === neighborhood.name
                );
                const isExpanded = expandedNeighborhoods[neighborhood.name];
                const showLocations = expandedSections[`${neighborhood.name}-locations`];
                const showArtists = expandedSections[`${neighborhood.name}-artists`];

                return (
                    <div key={neighborhood.name} className="flex flex-col bg-transparent overflow-hidden">
                        <button
                            onClick={() => toggleNeighborhood(neighborhood.name)}
                            className="flex items-center gap-2 w-full p-2 text-left hover:bg-white/5 transition-colors group rounded-lg"
                        >
                            <h2 className="text-xl max-sm:text-base uppercase tracking-[0.3em] text-zinc-700 font-bold">
                                {neighborhood.name}
                            </h2>
                            <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                className="text-2xl text-zinc-700"
                            >
                                ↓
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="pl-4 pb-8 flex flex-col gap-8">
                                        {/* Locations Section */}
                                        <motion.article
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <button
                                                onClick={() => toggleSection(neighborhood.name, 'locations')}
                                                className="flex items-center gap-2 text-xl max-sm:text-base uppercase tracking-[0.3em] text-zinc-700 mb-2 hover:text-zinc-900 transition-colors"
                                            >
                                                <span>Orte</span>
                                                <motion.span
                                                    animate={{ rotate: showLocations ? 180 : 0 }}
                                                    className="text-xs"
                                                >
                                                    ↓
                                                </motion.span>
                                            </button>
                                            <AnimatePresence>
                                                {showLocations && (
                                                    <motion.ul
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="flex flex-col gap-1 overflow-hidden pl-2 max-sm:pl-1.5"
                                                    >
                                                        {neighborhood.locations.map((location) => (
                                                            <li key={location} className="text-base max-sm:text-sm text-neutral-950 font-bold">
                                                                {location}
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </motion.article>

                                        {/* Artists Section */}
                                        {artistsForNeighborhood && (
                                            <motion.article
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                            >
                                                <button
                                                    onClick={() => toggleSection(neighborhood.name, 'artists')}
                                                    className="flex items-center gap-2 text-xl max-sm:text-base uppercase tracking-[0.3em] text-zinc-700 mb-2 hover:text-zinc-900 transition-colors"
                                                >
                                                    <span>Künstler*innen</span>
                                                    <motion.span
                                                        animate={{ rotate: showArtists ? 180 : 0 }}
                                                        className="text-xs"
                                                    >
                                                        ↓
                                                    </motion.span>
                                                </button>
                                                <AnimatePresence>
                                                    {showArtists && (
                                                        <motion.ul
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="flex flex-col gap-1 overflow-hidden pl-2 max-sm:pl-1.5"
                                                        >
                                                            {artistsForNeighborhood.artists.map((artist) => (
                                                                <li key={artist.name} className="text-base max-sm:text-sm text-neutral-950 font-bold">
                                                                    {artist.name}
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </motion.article>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </section>
    );
}
