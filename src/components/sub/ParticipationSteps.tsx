import {motion} from "motion/react";
import {prepSteps} from "../../data/ArtistsData.ts";
import {useRef, useState} from "react";


export default function ParticipationSteps() {
    const [expandSteps, setExpandSteps] = useState(false);

    const innerContentRef = useRef<HTMLDivElement | null>(null);

    const toggleSteps = () => {
        setExpandSteps((prev) => !prev);
    };

    const handleAnimationComplete = () => {
        const isMobile = window.matchMedia("(max-width: 639px)").matches;
        if (!isMobile) return;

        if (expandSteps) {
            innerContentRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
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
    };

    return (
        <div>
            <motion.h2
                className="text-center p-10 max-sm:p-6"
                animate={{
                    marginTop: expandSteps ? "0rem" : "0",
                    marginBottom: expandSteps ? "0rem" : "0",
                    transition: expandSteps ? {marginTop: {duration: 0.5, ease: "easeInOut"}} : {duration: 0}
                }}>
                <button
                    type="button"
                    aria-expanded={expandSteps}
                    aria-controls="participation-steps"
                    onClick={toggleSteps}
                    className="text-3xl max-sm:text-2xl font-black uppercase tracking-widest max-sm:border-b-2 max-sm:pb-2 hover:scale-105 transition-transform cursor-pointer"
                >
                    Teilnahme
                </button>
            </motion.h2>
            <div>
                <article className="p-6 max-sm:p-4 text-neutral-950">
                    <motion.div
                        key="participation-steps-content"
                        id="participation-steps-content"
                        initial={{height: 0, opacity: 0}}
                        animate={expandSteps ? {
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: {
                                    duration: 0.4,
                                    ease: [0.04, 0.62, 0.23, 0.98]
                                },
                                opacity: {
                                    duration: 0.25,
                                    delay: 0.1
                                }
                            }
                        } : {
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.0,
                                    ease: [0.04, 0.62, 0.23, 0.98]
                                },
                                opacity: {
                                    duration: 0.0
                                }
                            }
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
                                            animate={expandSteps ? {
                                                opacity: 1,
                                                scale: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeInOut",
                                                    delay: index * 0.1
                                                }
                                            } : {
                                                opacity: 0,
                                                scale: 0.2,
                                                transition: {
                                                    duration: 0.0,
                                                    ease: "easeInOut"
                                                }
                                            }}
                                        >
                                            {index + 1}
                                        </motion.div>

                                        <motion.p
                                            className="text-lg font-semibold text-neutral-950"
                                            initial={{opacity: 0, x: 30}}
                                            animate={expandSteps ?
                                                {
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        duration: 0.5,
                                                        ease: "easeInOut",
                                                        delay: index * 0.1
                                                    }
                                                }
                                                :
                                                {
                                                    opacity: 0,
                                                    x: 30,
                                                    transition: {
                                                        duration: 0.0,
                                                        ease: "easeInOut"
                                                    }
                                                }}
                                        >
                                            {step}
                                        </motion.p>
                                    </div>
                                ))}
                            </div>
                            <motion.div
                                key="contact-section"
                                className="justify-center mt-10 max-sm:mt-0 text-center"
                            >
                                <motion.a
                                    initial={{opacity: 0, scale: 0.0}}
                                    animate={expandSteps ? {
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            duration: 0.2,
                                            ease: "easeInOut",
                                            delay: prepSteps.length * 0.1
                                        }
                                    } : {
                                        opacity: 0,
                                        scale: 0.0,
                                        transition: {
                                            duration: 0.0,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    href="mailto:info@kunstundateliertage.de"
                                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-neutral-950 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Kontakt aufnehmen
                                </motion.a>
                            </motion.div>
                        </div>
                        <div className="max-sm:border-y-2 max-sm:py-4">
                            <ParticipationNotice/>
                        </div>
                    </motion.div>
                </article>
            </div>
        </div>
    );
}