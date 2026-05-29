import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import {participationFacts, artistsHeader, prepSteps} from "../data/ArtistsData.ts";
import ParticipationCard from "../components/sub/ParticipationCard.tsx";
import Header from "../components/layout/Header.tsx";
import {useState} from "react";

export default function ArtistsInfo() {

    const [expandSteps, setExpandSteps] = useState(false);

   //const bIsSmallDisplay = window.innerWidth < 640;

    return (
        <PageTransition>
            <section className="space-y-6">
                <Header
                    tagline={artistsHeader.tagline}
                    title={artistsHeader.title}
                    description={artistsHeader.description}
                    taglineClassName={"text-blue-700"}
                ></Header>
                    <motion.div
                        className="mt-8 flex flex-row gap-2 lg:gap-4 "
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                    >
                        <a
                            href="mailto:info@kunstundateliertage.de"
                            className="inline-flex items-center justify-center rounded-2xl border-2 border-zinc-800 bg-linear-to-tr from-orange-500 to-orange-400 backdrop-blur-3xl px-6 py-4 text-sm font-bold text-neutral-950 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Kontakt aufnehmen
                        </a>
                        <Link
                            to="/besucherinnen"
                            className="inline-flex items-center justify-center rounded-2xl border-2 border-zinc-800 bg-linear-to-tr from-orange-500 to-orange-400 backdrop-blur-3xl px-6 py-4 text-sm font-bold text-neutral-950 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
                        >
                            ...für Besucher*innen
                        </Link>
                    </motion.div>


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
                        <ParticipationCard key={fact.label} fact={fact} />
                    ))}
                </motion.div>

                <div className="grid gap-4 max-sm:flex max-sm:flex-col lg:grid-cols-[1.1fr_0.9fr] hover:scale-105 transition-transform cursor-pointer">
                    <motion.article
                        className="rounded-4xl p-6 max-sm:p-4 border-2 border-zinc-800 bg-linear-to-tr from-orange-500 to-orange-400 text-neutral-950 "
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                    >
                        <h2
                            className="text-2xl text-center font-black sm:text-3xl"
                            role={"button"}
                            onClick={() => {setExpandSteps(!expandSteps);}}
                        >
                            ...für die Teilnahme
                        </h2>

                        <AnimatePresence>
                            {expandSteps && (
                                <motion.div
                                    key="steps-container"
                                    initial={{ height: 0, opacity: 0,}}
                                    animate={{ height: "auto", opacity: 1,}}
                                    exit={{ height: 0, opacity: 0, }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden flex flex-row max-sm:flex-col"
                                >
                                    <div className="mt-8 space-y-5">
                                        {prepSteps.map((step, index) => (
                                            <div key={step} className="flex gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-800 bg-transparent text-xl font-black text-neutral-950">
                                                    {index + 1}
                                                </div>
                                                <p className="pt-1 text-lg leading-7 text-zinc-700">
                                                    {step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={"mt-10 border-t-2 pt-10"}>
                                        <p className="text-2xl text-center font-bold uppercase tracking-[0.25em] text-green-700">
                                            Wichtig!!!
                                        </p>

                                        <h2 className="mt-4 text-base text-center font-black text-blue-700 sm:text-3xl">
                                            Gemeinsam sichtbar werden
                                        </h2>

                                        <p className="mt-5 leading-8 text-zinc-700">
                                            Die Veranstaltung lebt davon, dass alle Beteiligten mithelfen:
                                            durch offene Türen, gute Informationen, geteilte Beiträge,
                                            Plakate und persönliche Einladungen.
                                        </p>
                                    </div>

                                </motion.div>
                            )}
                            {/*{expandSteps && (*/}
                            {/*    <motion.div*/}
                            {/*        key="steps-footer"*/}
                            {/*        className="rounded-4xl  p-6 sm:p-8 md:p-10"*/}
                            {/*        initial={{ opacity: 0, y: 0, height: 0 }}*/}
                            {/*        animate={{ opacity: 1, y: 0, height: 'auto' }}*/}
                            {/*        exit={{ opacity: 0, y: 0, height: 0 }}*/}
                            {/*        transition={{ duration: 0.35,}}*/}
                            {/*    >*/}
                            {/*        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">*/}
                            {/*            Wichtig*/}
                            {/*        </p>*/}

                            {/*        <h2 className="mt-4 text-2xl font-black text-blue-950 sm:text-3xl">*/}
                            {/*            Gemeinsam sichtbar werden*/}
                            {/*        </h2>*/}

                            {/*        <p className="mt-5 leading-8 text-blue-950/80">*/}
                            {/*            Die Veranstaltung lebt davon, dass alle Beteiligten mithelfen:*/}
                            {/*            durch offene Türen, gute Informationen, geteilte Beiträge,*/}
                            {/*            Plakate und persönliche Einladungen.*/}
                            {/*        </p>*/}

                            {/*        /!*<div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">*!/*/}
                            {/*        /!*    <p className="text-sm font-bold text-neutral-950">*!/*/}
                            {/*        /!*        Kontakt für Künstler*innen*!/*/}
                            {/*        /!*    </p>*!/*/}
                            {/*        /!*    <a*!/*/}
                            {/*        /!*        href="mailto:info@kunstundateliertage.de"*!/*/}
                            {/*        /!*        className="mt-2 block break-words text-lg font-black text-blue-700 hover:text-blue-900"*!/*/}
                            {/*        /!*    >*!/*/}
                            {/*        /!*        info@kunstundateliertage.de*!/*/}
                            {/*        /!*    </a>*!/*/}
                            {/*        /!*</div>*!/*/}
                            {/*    </motion.div>*/}
                            {/*)}*/}
                        </AnimatePresence>
                    </motion.article>
                </div>
            </section>
        </PageTransition>
    );
}