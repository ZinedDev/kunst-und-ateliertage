import {motion, AnimatePresence} from "motion/react";
import {prepSteps} from "../../data/ArtistsData.ts";
import ParticipationNotice from "./ParticipationNotice.tsx";
import {useEffect, useRef, useState} from "react";


export default function ParticipationSteps() {
    const [expandSteps, setExpandSteps] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);

    const stepsContainerRef = useRef<HTMLDivElement | null>(null);
    const innerContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!stepsContainerRef.current) return;

        if (expandSteps) {
            setContentHeight(stepsContainerRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }

    }, [expandSteps]);

    const toggleSteps = () => {
        setExpandSteps((prev) => !prev);
    };

    const handleAnimationComplete = () => {
        const isMobile = window.matchMedia("(max-width: 639px)").matches;
        if (!isMobile) return;

        if (expandSteps) {
            stepsContainerRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });

            return;
        }
    };

    const scrollToTop = () => {

        const isMobile = window.matchMedia("(max-width: 639px)").matches;
        if (!isMobile) return;
        if (expandSteps) return;

        scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // animate(startY, 0, {
        //     duration: 0.9, // slower = higher number
        //     ease: "easeInOut",
        //     onUpdate: (latest) => {
        //         window.scrollTo(0, latest);
        //     },
        // });
    };

    return (
        <motion.div
            className="grid grid-rows max-sm:flex max-sm:flex-col"
            initial={false}
            animate={{
                marginTop: expandSteps ? "8rem" : "0",
                marginBottom: expandSteps ? "6rem" : "0",
            }}
            transition={expandSteps ? {marginTop: {duration: 0.5, ease: "easeInOut"}} : {duration: 0}}
        >
            <article
                className="p-6 max-sm:p-4 text-neutral-950 scroll-mt-8"
            >
                <h2 className="text-center">
                    <button
                        type="button"
                        aria-expanded={expandSteps}
                        aria-controls="participation-steps"
                        onClick={toggleSteps}
                        className="text-3xl max-sm:text-2xl font-black uppercase tracking-widest max-sm:border-b-2 max-sm:pb-2 hover:scale-105 transition-transform cursor-pointer"
                    >
                        Teilnahme
                    </button>
                </h2>
                <AnimatePresence initial={false} mode="wait" onExitComplete={() => setContentHeight(0)}>
                    <motion.div
                        id="participation-steps"
                        ref={stepsContainerRef}
                        initial={false}
                        animate={{
                            height: expandSteps ? contentHeight : 0,
                            opacity: expandSteps ? 1 : 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        onAnimationStart={() => {
                            scrollToTop();
                        }}
                        onAnimationComplete={handleAnimationComplete}
                        className="overflow-hidden"
                    >
                        <div ref={innerContentRef}>
                            <div className="max-sm:border-b-2 max-sm:py-5 flex flex-col gap-y-2">
                                {prepSteps.map((step, index) => (
                                    <div key={step} className="flex flex-row gap-x-2">
                                        <motion.div
                                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-zinc-800 bg-transparent text-xl font-black text-zinc-700"
                                            initial={{opacity: 0, scale: 0.2}}
                                            animate={expandSteps ? {opacity: 1, scale: 1} : {
                                                opacity: 0,
                                                scale: 0.2
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut",
                                                delay: (index + 1) * 0.2,
                                            }}
                                        >
                                            {index + 1}
                                        </motion.div>

                                        <motion.p
                                            className="text-lg font-semibold text-neutral-950"
                                            initial={{opacity: 0, x: 30}}
                                            animate={expandSteps ? {opacity: 1, x: 0} : {opacity: 0, x: 30}}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut",
                                                delay: (index + 1) * 0.3,
                                            }}
                                        >
                                            {step}
                                        </motion.p>
                                    </div>
                                ))}
                            </div>
                            <div
                                key="contact-section"
                                className="justify-center mt-10 max-sm:mt-0 text-center"
                            >
                                <motion.a
                                    initial={{opacity: 0, scale: 0.0}}
                                    animate={expandSteps ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.0}}
                                    transition={{duration: 0.5, type: "spring", stiffness: 100}}
                                    href="mailto:info@kunstundateliertage.de"
                                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-neutral-950 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Kontakt aufnehmen
                                </motion.a>
                            </div>
                        </div>
                        <div className="max-sm:border-y-2 max-sm:py-4">
                            <ParticipationNotice/>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </article>
        </motion.div>
    )
        ;
}