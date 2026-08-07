import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";
import {neighborhoodData} from "../../data/ProgramData.ts";
import {useNavigate} from "react-router";
import {MapPin} from "lucide-react";

interface MapSectionProps {
    selectedNeighborhood?: string | null;
    selectedLocation?: string | null;
    onNeighborhoodToggle?: (name: string | null) => void;
    onLocationToggle?: (neighborhoodName: string, locationName: string | null) => void;
    showNeighborhoodButtons?: boolean;
}

export default function MapSection({
                                           selectedNeighborhood,
                                           selectedLocation,
                                           onNeighborhoodToggle,
                                           onLocationToggle,
                                           showNeighborhoodButtons = true
                                       }: MapSectionProps) {
    console.log("[MapSection] Rendering", { selectedNeighborhood, selectedLocation, showNeighborhoodButtons });
    const [expandedNeighborhoods, setExpandedNeighborhoods] = useState<Record<string, boolean>>({});
    const [expandedLocations, setExpandedLocations] = useState<Record<string, boolean>>({});
    const navigate = useNavigate();

    useEffect(() => {
        console.log("[MapSection] useEffect (selectedNeighborhood)", { selectedNeighborhood });
        if (selectedNeighborhood) {
            setExpandedNeighborhoods({
                [selectedNeighborhood]: true
            });
        } else {
            setExpandedNeighborhoods({});
            setExpandedLocations({});
        }
    }, [selectedNeighborhood]);

    useEffect(() => {
        console.log("[MapSection] useEffect (selectedLocation)", { selectedLocation, selectedNeighborhood });
        if (selectedLocation && selectedNeighborhood) {
            const key = `${selectedNeighborhood}-${selectedLocation}`;
            setExpandedLocations({
                [key]: true
            });
        } else if (!selectedLocation) {
            setExpandedLocations({});
        }
    }, [selectedLocation, selectedNeighborhood]);

    const toggleLocation = (neighborhoodName: string, locationName: string) => {
        const key = `${neighborhoodName}-${locationName}`;
        const isExpanding = !expandedLocations[key];
        console.log("[MapSection] toggleLocation", { neighborhoodName, locationName, isExpanding });

        if (onLocationToggle) {
            onLocationToggle(neighborhoodName, isExpanding ? locationName : null);
        }

        setExpandedLocations(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const anyNeighborhoodExpanded = Object.values(expandedNeighborhoods).some(Boolean);

    return (
        <section className="flex flex-col w-full max-w-5xl mx-auto">
            <AnimatePresence>
                {neighborhoodData.map((neighborhood) => {
                    const isExpanded = expandedNeighborhoods[neighborhood.name];

                    if (showNeighborhoodButtons) {
                        if (anyNeighborhoodExpanded && !isExpanded) {
                            return null;
                        }
                    } else {
                        // In locations-only mode, only show the selected neighborhood's content
                        if (!selectedNeighborhood || neighborhood.name !== selectedNeighborhood) {
                            return null;
                        }
                    }

                    return (
                        <div
                            key={neighborhood.name}
                            className="flex flex-col bg-transparent pb-2 max-sm:pb-1 "
                        >
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{height: 0, opacity: 0}}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                            marginBottom: '1rem',
                                            transition: {duration: .5}
                                        }}
                                        exit={{height: 0, opacity: 0, marginBottom: 0, transition: {duration: .5}}}
                                        transition={{ease: "easeInOut"}}
                                    >
                                        <div className={`${showNeighborhoodButtons ? 'pl-6' : ''} flex flex-col`}>
                                            <AnimatePresence>
                                                {neighborhood.locations.map((location) => {
                                                    const locationKey = `${neighborhood.name}-${location.name}`;
                                                    const isLocationExpanded = expandedLocations[locationKey];

                                                    // If any location is expanded, only show the expanded one
                                                    const anyLocationExpanded = Object.keys(expandedLocations).some(key =>
                                                        key.startsWith(`${neighborhood.name}-`) && expandedLocations[key]
                                                    );

                                                    if (anyLocationExpanded && !isLocationExpanded) {
                                                        return null;
                                                    }

                                                    return (
                                                        <article
                                                            key={location.name}
                                                            className="flex flex-col"
                                                        >
                                                            <div className="flex items-center w-full group/loc">
                                                                <button
                                                                    onClick={() => toggleLocation(neighborhood.name, location.name)}
                                                                    aria-expanded={isLocationExpanded}
                                                                    className={`flex items-center py-0.5 text-base max-sm:text-xs uppercase tracking-wider text-black rounded-md hover:cursor-pointer hover:scale-[1.02] transition-all duration-200 text-left ${isLocationExpanded ? 'scale-[1.02]' : ''}`}
                                                                >
                                                                    <span
                                                                        className={isLocationExpanded ? 'underline underline-offset-4' : ''}>
                                                                        {location.name}
                                                                    </span>
                                                                </button>
                                                                {!onNeighborhoodToggle && (
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            window.scrollTo({
                                                                                top: 0,
                                                                                behavior: 'smooth'
                                                                            });
                                                                            navigate("/besucherinnen", {
                                                                                state: {
                                                                                    location: location.name,
                                                                                    neighborhood: neighborhood.name
                                                                                }
                                                                            });
                                                                        }}
                                                                        className="ml-2 p-1.5 text-zinc-400 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors duration-200"
                                                                        title="Auf Karte zeigen"
                                                                    >
                                                                        <MapPin size={16}/>
                                                                    </button>
                                                                )}
                                                            </div>
                                                            <AnimatePresence>
                                                                {isLocationExpanded && (
                                                                    <motion.ul
                                                                        initial={{height: 0, opacity: 0}}
                                                                        animate={{
                                                                            height: "auto",
                                                                            opacity: 1,
                                                                        }}
                                                                        exit={{
                                                                            height: 0,
                                                                            opacity: 0,
                                                                        }}
                                                                        transition={{ duration: 0.3 }}
                                                                        className="overflow-hidden mt-1 pl-1 border-l-2 border-zinc-200"
                                                                    >
                                                                        {location.artists.map((artist, aIdx) => (
                                                                            <li
                                                                                key={aIdx}
                                                                                className="text-md max-sm:text-sm text-neutral-700 italic"
                                                                            >
                                                                                {artist.name}
                                                                            </li>
                                                                        ))}
                                                                    </motion.ul>
                                                                )}
                                                            </AnimatePresence>
                                                        </article>
                                                    );
                                                })}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </AnimatePresence>
        </section>
    );
}
