import {useEffect, useRef, useState, type MouseEvent} from "react";
import {motion, AnimatePresence} from "motion/react";
import {useNavigate} from "react-router";
//import {Globe, AtSign, Mail} from "lucide-react";
import type {ArtistEntry} from "../../../data/Types.ts";
import {MapPin} from "lucide-react";
import ArtistCardDetails from "./ArtistCardDetails.tsx";

export type ArtistCardEntry = (ArtistEntry | { name: string; location: string; neighborhood: string }) & {
    name?: string;
    artist?: string;
    location?: string;
    area?: string;
    neighborhood?: string;
    art?: string[];
    email?: string;
    socialMedia?: string[];
    website?: string;
};

export interface ArtistCardProps {
    artist: ArtistCardEntry;
    index?: number;
    onClick?: () => void;
    isFocused?: boolean;
    onFocusDismiss?: () => void;
}

export default function ArtistCard({
    artist,
    index = 0,
    onClick,
    isFocused = false,
    onFocusDismiss,
}: ArtistCardProps) {
    const [isRevealed, setIsRevealed] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const name = artist.artist || artist.name || "";
    const location = artist.location || artist.area || "";
    const neighborhood = artist.neighborhood || "";
    const isCardRevealed = isRevealed;

    useEffect(() => {
        if (!isFocused) return;

        const focusTimer = window.setTimeout(() => {
            cardRef.current?.scrollIntoView({behavior: "smooth", block: "center"});
            cardRef.current?.focus({preventScroll: true});
        }, 100);

        return () => window.clearTimeout(focusTimer);
    }, [isFocused]);

    const handleClick = () => {
        if (isFocused) {
            cardRef.current?.blur();
            onFocusDismiss?.();

            if (!isRevealed)
            {
                setIsRevealed(true);
            }
            return;
        }

        if (onClick) {
            onClick();
            return;
        }
        setIsRevealed((prev) => !prev);
    };

    const handleMapClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        navigate("/karte", {
            state: {
                neighborhood,
                location,
                artist: name,
            },
        });
    };

    return (
        <motion.div
            ref={cardRef}
            layout
            transition={{layout: {duration: 0.2, type: "spring", stiffness: 100, damping: 20, ease: "easeInOut"}}}
            onClick={handleClick}
            tabIndex={-1}
            aria-label={isFocused ? `${name}, ausgewählte Künstler*in` : undefined}
            className="cursor-pointer outline-none"
        >
            <motion.div
                initial={{opacity: 0, x: index % 2 ? 10 : -10}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false}}
                transition={{duration: 0.2, type: "spring", stiffness: 100, delay: index * 0.001, restDelta: 10}}
                className={`flex flex-col items-start px-4 py-3 bg-white border-2 rounded-xl group text-left w-full h-auto min-h-26 justify-between hover:scale-[1.02] hover:border-blue-700 hover:shadow-lg transition-all duration-200  ${
                    isFocused || isRevealed
                        ? "border-orange-400 shadow-lg scale-[1.02]"
                        : "border-zinc-100"
                }`}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <div className="flex flex-col items-center justify-center w-full">

                        {/* Artist Name */}
                        <span className="border-b mb-3 text-lg font-bold text-zinc-900">
                            {name}
                        </span>

                        {/* Artist Location */}
                        <div className="flex items-center gap-0.5 text-[12px] text-zinc-500 uppercase tracking-wider font-medium">
                            <button
                                type="button"
                                aria-label={`Auf der Karte anzeigen: ${location}`}
                                title="Auf der Karte anzeigen"
                                onClick={handleMapClick}
                                aria-hidden={isCardRevealed}
                                inert={isCardRevealed}
                                className="flex flex-row items-center gap-x-1 justify-center rounded text-zinc-700 cursor-pointer hover:scale-110 transition-transform duration-300"
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <MapPin className="text-blue-600 w-3 h-3"/>
                                <span>{location}</span>
                                <span className="text-blue-600 font-bold">
                                {neighborhood}
                                </span>
                                </div>
                            </button>
                        </div>

                        {/* Artist Details Container */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: isCardRevealed ? 1 : 0}}
                            viewport={{once: false}}
                            aria-hidden={!isCardRevealed}
                            inert={!isCardRevealed}
                            className={`absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 rounded-lg bg-white ${
                                isCardRevealed ? "pointer-events-auto" : "pointer-events-none"
                            }`}
                        >
                            <ArtistCardDetails artist={artist}/>
                        </motion.div>
                    </div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
