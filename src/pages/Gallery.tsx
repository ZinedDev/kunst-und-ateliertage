import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/layout/PageTransitions.tsx";
import {galleryItems, galleryHeader} from "../data/GalleryData.ts";
import GalleryCard from "../components/sub/GalleryCard.tsx";
import Header from "../components/layout/Header.tsx";

export default function Gallery() {
    return (
        <PageTransition>
            <section className="space-y-12">
                <Header
                    tagline={galleryHeader.tagline}
                    title={galleryHeader.title}
                    description={galleryHeader.description}
                >
                    <motion.div
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                    >
                        <a
                            href="/KuA_2025_Programm_Flyer_Web-2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Flyer 2025 öffnen
                        </a>

                        <Link
                            to="/besucherinnen"
                            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:border-neutral-950 hover:bg-neutral-100"
                        >
                            Besucher*innen-Infos
                        </Link>
                    </motion.div>
                </Header>

                <motion.div
                    className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.07,
                            },
                        },
                    }}
                >
                    {galleryItems.map((item) => (
                        <GalleryCard key={item.title} item={item} />
                    ))}
                </motion.div>

                {/*<motion.aside*/}
                {/*    className="rounded-2rem bg-neutral-950 p-6 text-white sm:p-8 md:p-10"*/}
                {/*    initial={{ opacity: 0, y: 24 }}*/}
                {/*    animate={{ opacity: 1, y: 0 }}*/}
                {/*    transition={{ duration: 0.35, delay: 0.2 }}*/}
                {/*>*/}
                {/*    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">*/}
                {/*        <div>*/}
                {/*            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">*/}
                {/*                Nächster Schritt*/}
                {/*            </p>*/}
                {/*            <h2 className="mt-3 text-2xl font-black sm:text-3xl">*/}
                {/*                Echte Bilder ergänzen*/}
                {/*            </h2>*/}
                {/*            <p className="mt-4 max-w-2xl leading-8 text-white/75">*/}
                {/*                Lege später echte Fotos in <code>public/gallery</code> oder*/}
                {/*                <code> src/assets/images</code> ab und ersetze die visuellen*/}
                {/*                Platzhalter durch echte Bildkarten.*/}
                {/*            </p>*/}
                {/*        </div>*/}

                {/*        <Link*/}
                {/*            to="/kontakt"*/}
                {/*            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-neutral-950 transition hover:bg-blue-100"*/}
                {/*        >*/}
                {/*            Bilder anfragen*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</motion.aside>*/}
            </section>
        </PageTransition>
    );
}