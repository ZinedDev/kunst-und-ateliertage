import {motion, AnimatePresence} from "motion/react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import {participationFacts, artistsHeader, prepSteps} from "../data/ArtistsData.ts";
import ParticipationCard from "../components/sub/ParticipationCard.tsx";
import Header from "../components/layout/Header.tsx";
import {useState} from "react";

export default function ArtistsInfo() {

    const [expandSteps, setExpandSteps] = useState(false);
    const [expandImportant, setExpandImportant] = useState(false);

    //const bIsSmallDisplay = window.innerWidth < 640;

    return (
        <PageTransition>
            <section className="space-y-6">
                <Header
                    tagline={artistsHeader.tagline}
                    title={artistsHeader.title}
                    description={artistsHeader.description}
                    taglineClassName={"text-blue-700"}
                >
                </Header>
                <motion.div
                    className="pl-1 grid gap-4 max-sm:grid-cols-1 xl:grid-cols-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {participationFacts.map((fact) => (
                        <ParticipationCard key={fact.label} fact={fact}/>
                    ))}
                </motion.div>

                <div
                    className="grid max-sm:flex max-sm:flex-col lg:grid-cols-[1.1fr_0.9fr] hover:scale-105 transition-transform cursor-pointer">
                    <motion.article
                        className="rounded-4xl p-6 max-sm:p-4 border-2 border-zinc-800 bg-linear-to-tr from-orange-500 to-orange-400 text-neutral-950 "
                        initial={{opacity: 0, y: 24}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.35, delay: 0.1}}
                    >
                        <h2
                            className="text-2xl text-center font-black sm:text-3xl"
                            role={"button"}
                            onClick={() => {
                                setExpandSteps(!expandSteps)
                                expandSteps ? setExpandImportant(false) : null ;
                            }}
                        >
                            ...für die Teilnahme
                        </h2>
                        <AnimatePresence>
                            {expandSteps && (
                                <motion.div
                                    key="steps-container"
                                    initial={{height: 0, opacity: 0,}}
                                    animate={{height: "auto", opacity: 1,}}
                                    exit={{height: 0, opacity: 0,}}
                                    transition={{duration: 0.5, ease: "easeInOut"}}
                                    className="overflow-hidden flex flex-row max-sm:flex-col"
                                >
                                    <div className="mt-10 space-y-2">
                                        {prepSteps.map((step, index) => (
                                            <div key={step} className="flex gap-4">
                                                <motion.div
                                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-800 bg-transparent text-xl font-black text-neutral-950"
                                                    initial={{opacity: 0, scale: 0.8}}
                                                    animate={{opacity: 1, scale: 1}}
                                                    transition={{duration: 0.5, ease: "easeInOut", delay: index * 0.1}}
                                                >
                                                    {index + 1}
                                                </motion.div>
                                                <motion.p
                                                    className="pt-1 text-lg leading-7 text-zinc-700"
                                                    initial={{opacity: 0, x:30}}
                                                    animate={{opacity: 1, x:0}}
                                                    transition={{duration: 0.5, delay: index * 0.1, ease: "easeOut"}}
                                                >
                                                    {step}
                                                </motion.p>
                                            </div>
                                        ))}
                                        <motion.div
                                            key={"contact-section"}
                                            className="justify-center mt-10 flex flex-row gap-2 lg:gap-4 "
                                            initial={{opacity: 0, y: 18, scale: 0.9}}
                                            animate={{opacity: 1, y: 0, scale: 1 }}
                                            transition={{duration: 0.35, delay: 0.15}}
                                        >
                                            <a
                                                href="mailto:info@kunstundateliertage.de"
                                                className="inline-flex items-center justify-center rounded-2xl border-2 border-zinc-800 bg-linear-to-tr from-orange-500 to-orange-400 backdrop-blur-3xl px-6 py-4 text-sm font-bold text-neutral-950 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            >
                                                Kontakt aufnehmen
                                            </a>
                                        </motion.div>
                                    </div>
                                    <div className={"mt-10 border-t-2"}
                                    >
                                        <p
                                            role="button"
                                            className="mt-10 text-2xl text-center font-bold uppercase tracking-[0.25em] text-green-700"
                                            onClick={() => setExpandImportant(!expandImportant)}
                                        >
                                            Wichtig!!!
                                        </p>
                                        <h2 className="text-base text-center font-black text-blue-700 sm:text-3xl">
                                            Gemeinsam sichtbar werden...
                                        </h2>
                                        <AnimatePresence>
                                            <motion.p
                                                className="mt-4 text-zinc-700"
                                                initial={{height: 0, opacity: 0}}
                                                animate={{
                                                    height: expandImportant ? "auto" : 0,
                                                    opacity: expandImportant ? 1 : 0
                                                }}
                                                exit={{height: 0, opacity: 0}}
                                                transition={{duration: 0.5, ease: "easeInOut",}}
                                            >
                                                Die Veranstaltung lebt davon, dass alle Beteiligten mithelfen:
                                                durch offene Türen, gute Informationen, geteilte Beiträge,
                                                Plakate und persönliche Einladungen.

                                            </motion.p>
                                        </AnimatePresence>
                                    </div>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.article>
                </div>
            </section>
        </PageTransition>
    );
}