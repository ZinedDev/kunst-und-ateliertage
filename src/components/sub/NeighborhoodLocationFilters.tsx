import {useMemo} from "react";
import {motion} from "motion/react";
import {neighborhoodData} from "../../data/ProgramData.ts";

interface NeighborhoodLocationFiltersProps {
    selectedNeighborhood: string | null;
    selectedLocation: string | null;
    onNeighborhoodToggle: (neighborhood: string) => void;
    onLocationToggle: (location: string) => void;
}

export default function NeighborhoodLocationFilters({
    selectedNeighborhood,
    selectedLocation,
    onNeighborhoodToggle,
    onLocationToggle,
}: NeighborhoodLocationFiltersProps) {
    const neighborhoods = useMemo(() => neighborhoodData.map(neighborhood => neighborhood.name), []);
    const allLocations = useMemo(
        () =>
            neighborhoodData.flatMap(neighborhood =>
                neighborhood.locations.map(location => ({
                    name: location.name,
                    neighborhood: neighborhood.name,
                }))
            ),
        []
    );

    return (
        <>
            <div className="flex flex-row justify-center gap-1 mt-4 max-sm:mt-2 w-full max-w-5xl">
                {neighborhoods.map(name => (
                    <button
                        type="button"
                        key={name}
                        onClick={() => onNeighborhoodToggle(name)}
                        className={`px-3 py-1.5 rounded-lg border-2 text-base max-sm:text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                            selectedNeighborhood === name
                                ? "border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20"
                                : "bg-white border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                        }`}
                        aria-pressed={selectedNeighborhood === name}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2}}
                className="flex flex-wrap justify-center gap-1 mt-2 w-full max-w-5xl mx-auto"
            >
                {allLocations.map(({name, neighborhood}) => {
                    const isSelected = selectedLocation === name;
                    const isMuted = Boolean(selectedNeighborhood && neighborhood !== selectedNeighborhood);

                    return (
                        <button
                            type="button"
                            key={name}
                            onClick={() => !isMuted && onLocationToggle(name)}
                            disabled={isMuted}
                            aria-disabled={isMuted}
                            aria-pressed={isSelected}
                            className={`px-2 py-1.5 rounded-md border-2 text-[10px] max-sm:text-[8px] font-bold transition-all ${
                                isMuted
                                    ? "bg-white border-zinc-200 text-zinc-400 opacity-40 cursor-not-allowed pointer-events-none"
                                    : isSelected
                                    ? "border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20 cursor-pointer"
                                    : "bg-white border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700 cursor-pointer"
                            }`}
                        >
                            {name}
                        </button>
                    );
                })}
            </motion.div>
        </>
    );
}
