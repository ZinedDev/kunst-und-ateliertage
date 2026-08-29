import {useEffect, useRef} from "react";
import {motion} from "motion/react";
import {useNavigate} from "react-router";
import {Calendar, MapPin, User} from "lucide-react";
import type {ProgramEntry} from "../../data/EventData.ts";
import {getCategoryBadgeStyle} from "../../data/EventData.ts";

function formatDate(isoDate: string): string {
    const parts = isoDate.split("-");
    if (parts.length !== 3) return isoDate;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const date = new Date(year, month, day);
    const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    const dayName = days[date.getDay()];
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${dayName}, ${pad(day)}.${pad(month + 1)}.`;
}

function formatTimeRange(time: { startTime: string; endTime?: string }): string {
    if (time.endTime) {
        return `${time.startTime} – ${time.endTime} Uhr`;
    }
    return `${time.startTime} Uhr`;
}


export interface EventCardProps {
    event: ProgramEntry;
    index?: number;
    onClick?: () => void;
    isFocused?: boolean;
    onFocusDismiss?: () => void;
}

export default function EventCard({
    event,
    index = 0,
    onClick,
    isFocused = false,
    onFocusDismiss,
}: EventCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

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
            return;
        }

        if (onClick) {
            onClick();
            return;
        }

        navigate("/karte", {
            state: {
                neighborhood: event.where.neighborhood.replace(/^HH-/, ""),
                location: event.where.venue,
                address: event.where.address,
                eventId: event.id,
                event: event.what,
            },
        });
    };

    const handleMapClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        navigate("/karte", {
            state: {
                neighborhood: event.where.neighborhood.replace(/^HH-/, ""),
                location: event.where.venue,
                address: event.where.address,
                eventId: event.id,
                event: event.what,
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
            aria-label={isFocused ? `${event.what}, ausgewähltes Event` : undefined}
            className="cursor-pointer break-inside-avoid mb-4 outline-none"
        >
            <motion.div
                initial={{opacity: 0, y: index % 2 ? 10 : -10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.2, type: "spring", stiffness: 100, delay: index * 0.01, restDelta: 10}}
                className={`flex flex-col justify-between items-start p-4 rounded-2xl hover:border-blue-700 hover:shadow-xl transition-all group text-left ${getCategoryBadgeStyle(event.category)} ${
                    isFocused
                        ? "border-orange-400 shadow-lg scale-[1.02]"
                        : ""
                }`}
            >

                {/* Topic */}
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {event.what}
                </h3>

                {/* Details */}
                <div className="w-full flex flex-col gap-2.5 pt-2 border-t border-zinc-100 text-xs text-zinc-600">

                    {/* Artist */}
                    <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-600">
                        <User className="w-4 h-4 text-zinc-400 shrink-0"/>
                        <span>{event.who}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-1.5">
                        <button
                            type="button"
                            aria-label={`Auf der Karte anzeigen: ${event.where.venue}`}
                            title="Auf der Karte anzeigen"
                            onClick={handleMapClick}
                            className="flex items-start gap-1.5 text-left text-zinc-600 hover:text-blue-700 transition-colors cursor-pointer group/pin"
                        >
                            <MapPin className="w-4 h-4 text-zinc-400 group-hover/pin:text-blue-700 shrink-0 mt-0.5"/>
                            <div>
                                <span className="font-semibold text-zinc-800 group-hover/pin:text-blue-700">{event.where.venue}</span>
                                {event.where.room && <span className="text-zinc-500"> ({event.where.room})</span>}
                                <div className="text-zinc-400 group-hover/pin:text-blue-700">{event.where.address}, {event.where.neighborhood}</div>
                            </div>
                        </button>
                    </div>

                    {/* Schedule / Times */}
                    <div className="flex items-start gap-1.5">
                        <Calendar className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5"/>
                        <div className="flex flex-col gap-1 w-full">
                            {event.occurrences.map((occ, idx) => (
                                <div key={idx} className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                    <span className="font-semibold text-zinc-700">{formatDate(occ.date)}</span>
                                    {occ.times.length > 0 ? (
                                        occ.times.map((t, tIdx) => (
                                            <span key={tIdx}
                                                  className="bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-700 font-medium">
                                                {formatTimeRange(t)}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-zinc-400 italic">ganztägig / laufend</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
