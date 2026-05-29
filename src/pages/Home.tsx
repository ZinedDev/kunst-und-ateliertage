import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {AnimatePresence, motion} from "motion/react";
import {navItems} from "../data/NavData.ts";
import {NavLink} from "react-router";

export default function Home() {
    return (
        <PageTransition>
            <section className="mx-auto max-w-5xl">
                <Header
                    tagline="19.–20. September 2026"
                    title="Kunst- und Ateliertage"
                    description={`Kunst von den Elbinseln dort erleben, wo sie entsteht...`}
                    taglineClassName="border-b-2 border-blue-700 pb-1 text-blue-700"
                />
            </section>
            <section className="mt-10">
                <AnimatePresence>
                    <>
                        <motion.nav
                            className="rounded-3xl border-2 border-zinc-800 bg-linear-to-tr from-orange-500 to-orange-400 p-4 shadow-2xl sm:left-6 sm:right-6 lg:hidden"
                            initial={{opacity: 0, y: -16, scale: 0.96}}
                            animate={{opacity: 1, y: 0, scale: 1}}
                            exit={{opacity: 0, y: -16, scale: 0.96}}
                            transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item,i) => (
                                    i > 0 && (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end={item.path === "/"}
                                        className={({isActive}) =>
                                            [
                                                "rounded-2xl px-4 py-3 text-base font-semibold transition",
                                                isActive
                                                    ? "bg-neutral-950 text-white"
                                                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
                                            ].join(" ")
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                )))}
                            </div>
                        </motion.nav>
                    </>
                </AnimatePresence>
            </section>

        </PageTransition>
    );
}