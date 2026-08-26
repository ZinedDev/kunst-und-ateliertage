import {motion} from "motion/react";
import {useNavigate} from "react-router";

export interface ArtistEntry {
    name: string;
    location: string;
    neighborhood: string;
}

export interface ArtistCardProps {
    artist: ArtistEntry;
    index?: number;
    onClick?: () => void;
}

export default function ArtistCard({artist, index = 0, onClick}: ArtistCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
            return;
        }
        navigate("/karte", {
            state: {
                neighborhood: artist.neighborhood,
                location: artist.location,
            },
        });
    };

    return (
        <motion.div
            layout
            transition={{layout: {duration: 0.2, type: "spring", stiffness: 100, damping: 20, ease: "easeInOut"}}}
            onClick={handleClick}
            className="cursor-pointer"
        >
            <motion.div
                initial={{opacity: 0, y: index % 2 ? 10 : -10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.2, type: "spring", stiffness: 100, delay: index * 0.01, restDelta: 10}}
                className="flex flex-col items-start px-4 py-3 bg-white border-2 border-zinc-100 rounded-xl hover:border-blue-700 hover:shadow-xl transition-all group text-left w-full h-full"
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
    );
}
