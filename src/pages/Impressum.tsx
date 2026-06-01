import {motion} from "motion/react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {impressumFacts, impressumHeader} from "../data/ImpressumData.ts";
import SectionFacts from "../components/sub/SectionFacts.tsx";

export default function Impressum() {
    return (
        <PageTransition>
            <main className="space-y-8 lg:space-y-16 max-sm:flex max-sm:flex-col items-center justify-center">
                <Header
                    tagline={impressumHeader.tagline}
                    title={impressumHeader.title}
                    description={impressumHeader.description}
                    //taglineClassName="text-neutral-500"
                />
                <section
                    className="space-y-8 lg:space-y-24 flex flex-col max-sm:max-items-center max-sm:justify-center">
                    <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-12">
                        <SectionFacts facts={impressumFacts}/>
                    </div>
                </section>

                <motion.div
                    className="grid gap-6 lg:grid-cols-[1fr_0.8fr]"
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.35, delay: 0.15}}
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
                </motion.div>
            </main>
        </PageTransition>
    );
}