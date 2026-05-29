import { motion } from "motion/react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import {places, visitorHighlights, visitorHeader} from "../data/VisitorData.ts";
import Header from "../components/layout/Header.tsx";


export default function VisitorsInfo() {
    return (
        <PageTransition>
            <section className="space-y-12">
                <Header
                    tagline={visitorHeader.tagline}
                    title={visitorHeader.title}
                    description={visitorHeader.description}
                >
                    <motion.div
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                    >
                        {/*<Link*/}
                        {/*    to="/galerie"*/}
                        {/*    className="inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"*/}
                        {/*>*/}
                        {/*    Galerie ansehen*/}
                        {/*</Link>*/}

                        <a
                            href="/KuA_2025_Programm_Flyer_Web-2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:border-neutral-950 hover:bg-neutral-100"
                        >
                            Programm/Flyer öffnen
                        </a>
                    </motion.div>
                </Header>

                <motion.div
                    className="grid gap-4 md:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                >
                    {visitorHighlights.map((item) => (
                        <motion.article
                            key={item.title}
                            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm wrap-break-word md:p-7"
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl font-black text-neutral-950">
                                {item.title}
                            </h2>
                            <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <motion.aside
                        className="rounded-4xl border border-amber-100 bg-amber-50 p-6 sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
                            Termin
                        </p>

                        <h2 className="mt-4 text-3xl font-black text-amber-950 max-sm:text-2xl">
                            19.–20. Sept. 2026
                        </h2>

                        <p className="mt-5 leading-8 text-amber-950/80">
                            Die Ateliers und Ausstellungsorte sind voraussichtlich von
                            13:00–18:00 Uhr geöffnet. Das detaillierte Programm wird später
                            veröffentlicht.
                        </p>

                        <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
                            <p className="text-sm font-bold text-neutral-950">
                                Programmstatus
                            </p>
                            <p className="mt-2 text-neutral-700">
                                Das neue Programm für 2026 ist in Vorbereitung.
                            </p>
                        </div>
                    </motion.aside>

                    <motion.article
                        className="rounded-4xl bg-neutral-950 p-6 text-white sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.16 }}
                    >
                        <h2 className="text-2xl font-black sm:text-3xl">
                            Orte auf den Elbinseln
                        </h2>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {places.map((place) => (
                                <div
                                    key={place}
                                    className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-bold"
                                >
                                    {place}
                                </div>
                            ))}
                        </div>
                    </motion.article>
                </div>
            </section>
        </PageTransition>
    );
}