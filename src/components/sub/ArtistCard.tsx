import {useEffect, useRef, useState, type MouseEvent} from "react";
import {motion, AnimatePresence} from "motion/react";
import {useNavigate} from "react-router";
//import {Globe, AtSign, Mail} from "lucide-react";
import type {ArtistEntry} from "../../data/Types.ts";
import {MapPin} from "lucide-react";

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

    const hasAdditionalInfo = (artist.art && artist.art.length > 0) ||
        artist.website ||
        (artist.socialMedia && artist.socialMedia.length > 0) ||
        artist.email;

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
                transition={{duration: 0.2, type: "spring", stiffness: 100, delay: index * 0.01, restDelta: 10}}
                className={`flex flex-col items-start px-4 py-3 bg-white border-2 rounded-xl hover:border-blue-700 hover:shadow-xl transition-all duration-300 group text-left w-full h-auto min-h-26 justify-between ${
                    isFocused || isRevealed
                        ? "border-orange-400 shadow-xl scale-[1.02]"
                        : "border-zinc-100"
                }`}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        initial={{opacity: 0, filter: "blur(6px)", height: "auto"}}
                        animate={{opacity: 1, filter: "blur(0px)"}}
                        exit={{opacity: 0, filter: "blur(6px)"}}
                        transition={{duration: 0.2}}
                        className="flex flex-col items-center justify-center w-full"
                    >
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
                            {/* Arts */}
                            <h2 className="w-full text-center text-sm font-bold text-zinc-700">
                                {artist.art?.join(" | ")}
                            </h2>

                            {/* Contact & Links */}
                            {hasAdditionalInfo ? (
                                <div
                                    className="flex flex-col items-center justify-center gap-0.5 text-xs text-zinc-600 w-full">
                                    {artist.website && (
                                        <a
                                            href={artist.website.startsWith("http") ? artist.website : `https://${artist.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1.5 text-blue-600 hover:underline break-all"
                                        >
                                            {/*<Globe className="w-3.5 h-3.5 shrink-0" />*/}
                                            <span>{artist.website}</span>
                                        </a>
                                    )}

                                    {artist.socialMedia && artist.socialMedia.length > 0 && (
                                        <div className="flex flex-wrap items-center gap-2">
                                            {artist.socialMedia.map((sm, idx) => {
                                                const handle = sm.replace(/^@/, "");
                                                const href = sm.startsWith("http") ? sm : `https://instagram.com/${handle}`;
                                                return (
                                                    <a
                                                        key={idx}
                                                        href={href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center gap-1.5 text-pink-600 hover:underline"
                                                    >
                                                        {/*<AtSign className="w-3.5 h-3.5 shrink-0" />*/}
                                                        <span>{sm}</span>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {artist.email && (
                                        <a
                                            href={`mailto:${artist.email}`}
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-blue-600 hover:underline break-all"
                                        >
                                            {/*<Mail className="w-3.5 h-3.5 shrink-0" />*/}
                                            <span>{artist.email}</span>
                                        </a>
                                    )}
                                </div>
                            ) : null}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
