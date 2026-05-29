import {AnimatePresence} from "motion/react";
import {motion} from "motion/react";
import {prepSteps} from "../../data/ArtistsData.ts";
import {useState} from "react";
import ParticipationNotice from "./ParticipationNotice.tsx";

export default function ParticipationSteps() {

    const [expandSteps, setExpandSteps] = useState(false);

    return (
        <div className="grid grid-rows max-sm:flex max-sm:flex-col">
            <motion.article
                className="rounded-4xl p-6 max-sm:p-4 text-neutral-950 "
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.35, delay: 0.1}}
            >
                <h2
                    className="text-3xl max-sm:text-2xl text-center font-black uppercase tracking-widest max-sm:border-b-2 max-sm:pb-2 hover:scale-105 transition-transform cursor-pointer"
                    role={"button"}
                    onClick={() => {
                        setExpandSteps(!expandSteps)
                    }}
                >
                    Teilnahme
                </h2>
                <AnimatePresence>
                    {expandSteps && (
                        <motion.div
                            key="steps-container"
                            initial={{height: 0, opacity: 0,}}
                            animate={{height: "auto", opacity: 1,}}
                            exit={{height: 0, opacity: 0,}}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                            className="overflow-hidden flex flex-col"
                        >
                            <div>
                                <div className={"max-sm:border-b-2 max-sm:py-5 flex flex-col gap-y-2"} >
                                    {prepSteps.map((step, index) => (
                                        <div
                                            key={step} className="flex flex-row gap-x-2">
                                            <motion.div
                                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-zinc-800 bg-transparent text-xl font-black text-zinc-700"
                                                initial={{opacity: 0, scale: 0.2}}
                                                animate={{opacity: 1, scale: 1}}
                                                transition={{duration: 0.5, ease: "easeInOut", delay: (index + 1) * 0.1}}
                                            >
                                                {index + 1}
                                            </motion.div>
                                            <motion.p
                                                className="text-lg font-semibold text-neutral-950"
                                                initial={{opacity: 0, x:30}}
                                                animate={{opacity: 1, x:0}}
                                                transition={{duration: 0.5, ease: "easeInOut", delay: (index + 1) * 0.12, }}
                                            >
                                                {step}
                                            </motion.p>
                                        </div>
                                    ))}
                                </div>
                                <motion.div
                                    key={"contact-section"}
                                    className="justify-center mt-10 max-sm:mt-0 text-center"
                                    initial={{opacity: 0, y: 18, scale: 0.9}}
                                    animate={{opacity: 1, y: 0, scale: 1 }}
                                    transition={{duration: 0.35, delay: 0.15}}
                                >
                                    <a
                                        href="mailto:info@kunstundateliertage.de"
                                        className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-neutral-950 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Kontakt aufnehmen
                                    </a>
                                </motion.div>
                            </div>
                            <div className={"max-sm:border-y-2 max-sm:py-4"}>
                                <ParticipationNotice/>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.article>
        </div>
    )
}