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
    const locations = useMemo(() => {
        if (!selectedNeighborhood) return [];

        return neighborhoodData
            .find(neighborhood => neighborhood.name === selectedNeighborhood)
            ?.locations.map(location => location.name) || [];
    }, [selectedNeighborhood]);

    return (
        <>
            <div className="flex flex-row justify-center gap-1 mt-4 max-sm:mt-2 w-full max-w-5xl">
                {neighborhoods.map(name => (
                    <button
                        type="button"
                        key={name}
                        onClick={() => onNeighborhoodToggle(name)}
                        className={`px-3 py-1.5 rounded-lg border-2 text-base max-sm:text-xs font-bold transition-all duration-300 cursor-pointer ${
                            selectedNeighborhood === name
                                ? "border-2 border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20"
                                : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                        }`}
                        aria-pressed={selectedNeighborhood === name}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <motion.div
                key="neighborhood"
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: "auto"}}
                exit={{opacity: 0, height: 0}}
                transition={{duration: 0.2}}
                className="flex flex-wrap justify-center gap-1 mt-2 w-full max-w-5xl overflow-hidden mx-auto"
            >
                {locations.map(name => (
                    <button
                        type="button"
                        key={name}
                        onClick={() => onLocationToggle(name)}
                        className={`px-2 py-1.5 rounded-md border-2 text-[10px] font-bold transition-all cursor-pointer ${
                            selectedLocation === name
                                ? "border-2 border-orange-400 bg-orange-400/10 shadow-md shadow-blue-700/20"
                                : "bg-white border-2 border-zinc-200 text-zinc-600 hover:border-blue-700 hover:text-blue-700"
                        }`}
                        aria-pressed={selectedLocation === name}
                    >
                        {name}
                    </button>
                ))}
            </motion.div>
        </>
    );
}
