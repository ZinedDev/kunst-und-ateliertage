import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { neighborhoodLocations, neighborhoodArtists } from "../../data/ProgramData.ts";

export default function ProgramSection() {
    const [expandedNeighborhoods, setExpandedNeighborhoods] = useState<Record<string, boolean>>({});
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

    const toggleNeighborhood = (name: string) => {
        setExpandedNeighborhoods(prev => {
            const isExpanding = !prev[name];
            if (!isExpanding) {
                setExpandedSections(prevSections => {
                    const newSections = { ...prevSections };
                    delete newSections[`${name}-locations`];
                    delete newSections[`${name}-artists`];
                    return newSections;
                });
            }
            return {
                ...prev,
                [name]: isExpanding
            };
        });
    };

    const toggleSection = (neighborhoodName: string, sectionType: 'locations' | 'artists') => {
        const key = `${neighborhoodName}-${sectionType}`;
        setExpandedSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <section className="mt-8 flex flex-col mx-auto lg:mx-0">
            {neighborhoodLocations.map((neighborhood) => {
                const artistsForNeighborhood = neighborhoodArtists.find(
                    (na) => na.name === neighborhood.name
                );
                const isExpanded = expandedNeighborhoods[neighborhood.name];
                const showLocations = expandedSections[`${neighborhood.name}-locations`];
                const showArtists = expandedSections[`${neighborhood.name}-artists`];

                return (
                    <div key={neighborhood.name} className="flex flex-col bg-transparent ">
                        <button
                            onClick={() => toggleNeighborhood(neighborhood.name)}
                            aria-expanded={isExpanded}
                            className={`flex items-center w-full px-2 text-left hover:bg-white/5 hover:scale-105 transition-all duration-200 group rounded-md ${isExpanded ? 'bg-white/5 scale-105' : 'bg-transparent'}`}
                        >
                            <h2 className="text-xl max-sm:text-base uppercase tracking-[0.2em] text-zinc-700 font-bold">
                                {neighborhood.name}
                            </h2>
                            <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                className="pl-1 text-2xl text-zinc-700"
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
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <div className="pl-6 flex flex-col">
                                        {/* Locations Section */}
                                        <motion.article
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <button
                                                onClick={() => toggleSection(neighborhood.name, 'locations')}
                                                aria-expanded={showLocations}
                                                className={`flex items-center py-1 gap-2 text-xl max-sm:text-base font-semibold text-black rounded-md hover:scale-105 transition-all duration-200 ${showLocations ? 'scale-105' : ''}`}
                                            >
                                                <span className={showLocations ? 'underline underline-offset-4' : ''}>Orte</span>
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
                                                        animate={{ height: "auto", opacity: 1, marginBottom: '1rem'}}
                                                        exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                                                        className="flex flex-col gap-1 overflow-hidden pl-2 max-sm:pl-1"
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
                                                    aria-expanded={showArtists}
                                                    className={`flex items-center py-1 gap-2 text-xl max-sm:text-base font-semibold text-black rounded-lg hover:scale-105 transition-all duration-200 ${showArtists ? 'scale-105' : ''}`}
                                                >
                                                    <span className={showArtists ? 'underline underline-offset-4' : ''}>Künstler*innen</span>
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
                                                            animate={{ height: "auto", opacity: 1, marginBottom: '1rem' }}
                                                            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                                                            className="flex flex-col gap-1 overflow-hidden pl-2 max-sm:pl-1"
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
