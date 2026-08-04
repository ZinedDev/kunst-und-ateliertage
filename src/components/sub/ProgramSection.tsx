import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { neighborhoodData } from "../../data/ProgramData.ts";

export default function ProgramSection() {
    const [expandedNeighborhoods, setExpandedNeighborhoods] = useState<Record<string, boolean>>({});
    const [expandedLocations, setExpandedLocations] = useState<Record<string, boolean>>({});
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const setRef = (key: string, el: HTMLElement | null) => {
        sectionRefs.current[key] = el;
    };

    const scrollIntoViewIfOverreaching = (key: string) => {
        // Delay to allow animation to start/finish enough to get correct position
        setTimeout(() => {
            const element = sectionRefs.current[key];
            if (element) {
                const rect = element.getBoundingClientRect();
                const isOverreaching = rect.bottom > window.innerHeight;

                if (isOverreaching) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        }, 300); // Slight delay for motion animations
    };

    const toggleNeighborhood = (name: string) => {
        setExpandedNeighborhoods(prev => {
            const isExpanding = !prev[name];
            if (!isExpanding) {
                setExpandedLocations(prevLocs => {
                    const newLocs = { ...prevLocs };
                    // Remove all locations belonging to this neighborhood
                    Object.keys(newLocs).forEach(key => {
                        if (key.startsWith(`${name}-`)) {
                            delete newLocs[key];
                        }
                    });
                    return newLocs;
                });
            } else {
                scrollIntoViewIfOverreaching(name);
            }
            return {
                ...prev,
                [name]: isExpanding
            };
        });
    };

    const toggleLocation = (neighborhoodName: string, locationName: string) => {
        const key = `${neighborhoodName}-${locationName}`;
        const isExpanding = !expandedLocations[key];
        
        setExpandedLocations(prev => ({
            ...prev,
            [key]: !prev[key]
        }));

        if (isExpanding) {
            scrollIntoViewIfOverreaching(key);
        }
    };

    return (
        <section className="flex flex-col mx-auto lg:mx-0 mt-8 max-sm:mt-0">
            {neighborhoodData.map((neighborhood) => {
                const isExpanded = expandedNeighborhoods[neighborhood.name];

                return (
                    <div 
                        key={neighborhood.name} 
                        ref={(el) => setRef(neighborhood.name, el)}
                        className="flex flex-col bg-transparent pb-2 max-sm:pb-1 "
                    >
                        <button
                            onClick={() => toggleNeighborhood(neighborhood.name)}
                            aria-expanded={isExpanded}
                            className={`flex items-center w-full px-2 text-left hover:bg-white/5 hover:scale-105 hover:cursor-pointer transition-all duration-200 group rounded-md ${isExpanded ? 'bg-white/5 scale-105' : 'bg-transparent'}`}
                        >
                            <motion.span
                                animate={{ rotate: isExpanded ? 90 : 0 }}
                                className="mr-2 text-xl text-zinc-700"
                            >
                                →
                            </motion.span>
                            <h2 className="text-xl max-sm:text-base uppercase tracking-[0.2em] text-zinc-700 font-bold">
                                {neighborhood.name}
                            </h2>
                        </button>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1, marginBottom: '1rem', transition: { duration: .5 } }}
                                    exit={{ height: 0, opacity: 0, marginBottom: 0, transition: { duration: .5 } }}
                                    transition={{ease: "easeInOut" }}
                                >
                                    <div className="pl-6 flex flex-col mt-2">
                                        {neighborhood.locations.map((location) => {
                                            const locationKey = `${neighborhood.name}-${location.name}`;
                                            const isLocationExpanded = expandedLocations[locationKey];
                                            
                                            return (
                                                <motion.article
                                                    key={location.name}
                                                    ref={(el) => setRef(locationKey, el)}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="flex flex-col"
                                                >
                                                    <button
                                                        onClick={() => toggleLocation(neighborhood.name, location.name)}
                                                        aria-expanded={isLocationExpanded}
                                                        className={`flex items-center py-1 gap-2 text-base max-sm:text-sm uppercase tracking-wider text-black rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-200 text-left ${isLocationExpanded ? 'scale-105' : ''}`}
                                                    >
                                                        <motion.span
                                                            animate={{ rotate: isLocationExpanded ? 90 : 0 }}
                                                            className="text-xs"
                                                        >
                                                            →
                                                        </motion.span>
                                                        <span className={isLocationExpanded ? 'underline underline-offset-4' : ''}>
                                                            {location.name}
                                                        </span>
                                                    </button>
                                                    
                                                    <AnimatePresence>
                                                        {isLocationExpanded && (
                                                            <motion.ul
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1, marginTop: '0.25rem', transition: { duration: .2 } }}
                                                                exit={{ height: 0, opacity: 0, marginTop: 0, transition: { duration: .2 } }}
                                                                className="overflow-hidden pl-6 border-l-2 border-zinc-200"
                                                            >
                                                                {location.artists.map((artist, aIdx) => (
                                                                    <li key={aIdx} className="text-md max-sm:text-sm text-neutral-700 italic py-0.5">
                                                                        {artist.name}
                                                                    </li>
                                                                ))}
                                                            </motion.ul>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.article>
                                            );
                                        })}
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
