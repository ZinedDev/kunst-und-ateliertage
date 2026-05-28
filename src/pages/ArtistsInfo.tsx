import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import {participationFacts, artistsHeader} from "../data/ArtistsData.ts";
import ParticipationCard from "../components/sub/ParticipationCard.tsx";
import Header from "../components/layout/Header.tsx";



const steps = [
    "Atelier, Werkstatt oder Ausstellungsort vorbereiten",
    "Anmeldung rechtzeitig absenden",
    "Kurzbeschreibung, Bildmaterial und Kontaktdaten bereitstellen",
    "Programm, Plakate und Social Media aktiv mitverbreiten",
];

export default function ArtistsInfo() {
    return (
        <PageTransition>
            <section className="space-y-12">
                <Header
                    tagline={artistsHeader.tagline}
                    title={artistsHeader.title}
                    description={artistsHeader.description}
                    taglineClassName="text-amber-700"
                >
                    <motion.div
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                    >
                        <a
                            href="mailto:info@kunstundateliertage.de"
                            className="inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Jetzt Kontakt aufnehmen
                        </a>
                        <Link
                            to="/besucherinnen"
                            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:border-neutral-950 hover:bg-neutral-100"
                        >
                            Besucher*innen-Infos ansehen
                        </Link>
                    </motion.div>
                </Header>

                <motion.div
                    className="grid gap-4 max-sm:grid-cols-2 xl:grid-cols-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.06,
                            },
                        },
                    }}
                >
                    {participationFacts.map((fact) => (
                        <ParticipationCard key={fact.label} fact={fact} />
                    ))}
                </motion.div>

                <div className="grid gap-6 max-sm:flex max-sm:flex-col lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.article
                        className="rounded-4xl bg-neutral-950 p-6 text-white sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                    >
                        <h2 className="text-2xl font-black sm:text-3xl">
                            Was du vorbereiten solltest
                        </h2>

                        <div className="mt-8 space-y-5">
                            {steps.map((step, index) => (
                                <div key={step} className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-neutral-950">
                                        {index + 1}
                                    </div>
                                    <p className="pt-1 text-base leading-7 text-white/80">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.article>

                    <motion.aside
                        className="rounded-4xl border border-blue-100 bg-blue-50 p-6 sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.16 }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                            Wichtig
                        </p>

                        <h2 className="mt-4 text-2xl font-black text-blue-950 sm:text-3xl">
                            Gemeinsam sichtbar werden
                        </h2>

                        <p className="mt-5 leading-8 text-blue-950/80">
                            Die Veranstaltung lebt davon, dass alle Beteiligten mithelfen:
                            durch offene Türen, gute Informationen, geteilte Beiträge,
                            Plakate und persönliche Einladungen.
                        </p>

                        <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
                            <p className="text-sm font-bold text-neutral-950">
                                Kontakt für Künstler*innen
                            </p>
                            <a
                                href="mailto:info@kunstundateliertage.de"
                                className="mt-2 block break-words text-lg font-black text-blue-700 hover:text-blue-900"
                            >
                                info@kunstundateliertage.de
                            </a>
                        </div>
                    </motion.aside>
                </div>
            </section>
        </PageTransition>
    );
}