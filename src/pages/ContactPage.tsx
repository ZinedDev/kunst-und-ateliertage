
import { motion } from "motion/react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import {contactOptions, contactHeader} from "../data/ContactData.ts";
import Header from "../components/layout/Header.tsx";

export default function ContactPage() {
    return (
        <PageTransition>
            <section className="space-y-12">
                <Header
                    tagline={contactHeader.tagline}
                    title={contactHeader.title}
                    description={contactHeader.description}
                />

                <div className="flex gap-6 max-sm:flex-col lg:grid-cols-[0.9fr_1.1fr]">
                    <motion.aside
                        className="rounded-4xl bg-neutral-950 p-6 text-white sm:p-8 md:p-10"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">
                            Direktkontakt
                        </p>

                        <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                            PR-AG des Atelierhaus 23
                        </h2>

                        <a
                            href="mailto:moin@kunstundateliertage.de"
                            className="mt-6 block wrap-break-word text-2xl font-black text-blue-200 transition hover:text-white sm:text-3xl"
                        >
                            moin@kunstundateliertage.de
                        </a>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                            <a
                                href="mailto:moin@kunstundateliertage.de"
                                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:bg-blue-100"
                            >
                                E-Mail öffnen
                            </a>

                            <a
                                href="https://www.instagram.com/kunst_und_ateliertage/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                            >
                                Instagram
                            </a>
                        </div>
                    </motion.aside>

                    <motion.div
                        className="grid gap-4"
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
                        {contactOptions.map((option) => (
                            <motion.article
                                key={option.title}
                                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm wrap-break-word sm:p-7"
                                variants={{
                                    hidden: { opacity: 0, y: 18 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-xl font-black text-neutral-950">
                                    {option.title}
                                </h2>

                                <p className="mt-3 leading-7 text-neutral-700">
                                    {option.text}
                                </p>

                                <a
                                    href={option.href}
                                    className="mt-5 inline-flex items-center justify-center rounded-2xl bg-neutral-100 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
                                >
                                    {option.label}
                                </a>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>

                {/*<motion.div*/}
                {/*    className="rounded-2rem border border-amber-100 bg-amber-50 p-6 sm:p-8 md:p-10"*/}
                {/*    initial={{ opacity: 0, y: 24 }}*/}
                {/*    animate={{ opacity: 1, y: 0 }}*/}
                {/*    transition={{ duration: 0.35, delay: 0.2 }}*/}
                {/*>*/}
                {/*    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">*/}
                {/*        <div>*/}
                {/*            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">*/}
                {/*                Hinweis*/}
                {/*            </p>*/}
                {/*            <h2 className="mt-3 text-2xl font-black text-amber-950">*/}
                {/*                Kein Backend nötig*/}
                {/*            </h2>*/}
                {/*            <p className="mt-4 max-w-2xl leading-8 text-amber-950/80">*/}
                {/*                Diese Kontaktseite nutzt einfache Mail-Links. Das passt gut zu*/}
                {/*                deinem Vercel-Setup, weil du dafür kein Formular-Backend*/}
                {/*                brauchst.*/}
                {/*            </p>*/}
                {/*        </div>*/}

                {/*        <Link*/}
                {/*            to="/impressum"*/}
                {/*            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-amber-950 shadow-sm transition hover:bg-amber-100"*/}
                {/*        >*/}
                {/*            Impressum ansehen*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</motion.div>*/}
            </section>
        </PageTransition>
    );
}