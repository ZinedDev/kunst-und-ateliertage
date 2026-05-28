import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {impressumHeader} from "../data/ImpressumData.ts";

export default function Impressum() {
    return (
        <PageTransition>
            <section className="space-y-10">
                <Header
                    tagline={impressumHeader.tagline}
                    title={impressumHeader.title}
                    description={impressumHeader.description}
                    //taglineClassName="text-neutral-500"
                />

                <motion.div
                    className="grid gap-6 lg:grid-cols-[1fr_0.8fr]"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                >
                    <article className="rounded-4xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
                        <h2 className="text-2xl font-black text-neutral-950">
                            Verantwortlich für die Inhalte
                        </h2>

                        <div className="mt-6 space-y-2 leading-8 text-neutral-700">
                            <p>
                                Für die Inhalte auf den Internetseiten{" "}
                                <strong className="font-bold text-neutral-950">
                                    kunstundateliertage.de
                                </strong>{" "}
                                zeichnet im presserechtlichen Sinne verantwortlich:
                            </p>

                            <div className="mt-6 rounded-3xl bg-neutral-50 p-5">
                                <p className="font-bold text-neutral-950">
                                    Verein zur Förderung von Kunst und Kultur in den Veringhöfen
                                    e.V.
                                </p>
                                <p>Am Veringhof 23</p>
                                <p>21107 Hamburg</p>
                            </div>

                            <div className="mt-6">
                                <p className="font-bold text-neutral-950">E-Mail</p>
                                <a
                                    href="mailto:moin@kunst-und-ateliertage.de"
                                    className="wrap-break-word text-lg font-black text-blue-700 transition hover:text-blue-900"
                                >
                                    moin@kunst-und-ateliertage.de
                                </a>
                            </div>
                        </div>
                    </article>

                    <aside className="rounded-4xl bg-neutral-950 p-6 text-white sm:p-8 md:p-10">
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">
                            Organisation
                        </p>

                        <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                            Ehrenamtlich organisiert
                        </h2>

                        <p className="mt-5 leading-8 text-white/75">
                            Die Elbinsel Kunst- und Ateliertage werden ehrenamtlich von der
                            PR-AG des Atelierhaus 23 organisiert.
                        </p>

                        <Link
                            to="/kontakt"
                            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:bg-blue-100"
                        >
                            Kontaktseite öffnen
                        </Link>
                    </aside>
                </motion.div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2"
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
                    <motion.article
                        className="rounded-4xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
                        variants={{
                            hidden: { opacity: 0, y: 18 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-black text-neutral-950">
                            Haftungshinweis
                        </h2>

                        <p className="mt-5 leading-8 text-neutral-700">
                            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                            Haftung für die Inhalte externer Links. Für den Inhalt der
                            verlinkten Seiten sind ausschließlich deren Betreiber
                            verantwortlich.
                        </p>
                    </motion.article>

                    <motion.article
                        className="rounded-4xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
                        variants={{
                            hidden: { opacity: 0, y: 18 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-black text-neutral-950">
                            Urheberrecht
                        </h2>

                        <p className="mt-5 leading-8 text-neutral-700">
                            Alle Rechte, insbesondere das Recht auf Vervielfältigung und
                            Verbreitung sowie Übersetzung, bleiben vorbehalten. Keine der
                            Abbildungen darf ohne Genehmigung der jeweiligen Künstler*innen
                            reproduziert oder unter Verwendung elektronischer Systeme
                            verarbeitet, vervielfältigt oder verbreitet werden.
                        </p>
                    </motion.article>
                </motion.div>

                {/*<motion.div*/}
                {/*    className="rounded-2rem border border-blue-100 bg-blue-50 p-6 sm:p-8"*/}
                {/*    initial={{ opacity: 0, y: 24 }}*/}
                {/*    animate={{ opacity: 1, y: 0 }}*/}
                {/*    transition={{ duration: 0.35, delay: 0.25 }}*/}
                {/*>*/}
                {/*    <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">*/}
                {/*        Wichtig vor Veröffentlichung*/}
                {/*    </p>*/}

                {/*    <h2 className="mt-3 text-2xl font-black text-blue-950">*/}
                {/*        Impressum final prüfen*/}
                {/*    </h2>*/}

                {/*    <p className="mt-4 max-w-3xl leading-8 text-blue-950/80">*/}
                {/*        Bitte prüfe vor dem Launch die finale Schreibweise der E-Mail-Adresse*/}
                {/*        und ob zusätzlich eine Datenschutzerklärung benötigt wird,*/}
                {/*        insbesondere falls später Analytics, eingebettete Karten, externe*/}
                {/*        Medien oder ein Kontaktformular ergänzt werden.*/}
                {/*    </p>*/}
                {/*</motion.div>*/}
            </section>
        </PageTransition>
    );
}