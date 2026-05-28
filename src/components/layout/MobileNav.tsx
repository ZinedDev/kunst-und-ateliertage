import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router";
import {AnimatePresence, motion} from "motion/react";
import {Menu, X} from "lucide-react";
import {navItems} from "../../data/NavData.ts";


export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <>
            <header className="fixed left-0 top-0 z-40 w-full border-b-2 border-zinc-800 bg-linear-to-tr from-cyan-200 to-amber-200 px-4 py-3 backdrop-blur-xl sm:px-6 lg:hidden">
                <div className="flex items-center justify-between">
                    <NavLink to="/" className="group">
                        <span className="block text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                            Elbinsel
                        </span>
                        <span className="block text-base font-black leading-tight text-neutral-950 transition group-hover:text-blue-700 sm:text-lg">
                            Kunst- und Ateliertage
                        </span>
                    </NavLink>

                    <button
                        type="button"
                        onClick={() => setIsOpen((current) => !current)}
                        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                        aria-expanded={isOpen}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-zinc-800 bg-linear-to-tr from-cyan-200 to-amber-200 text-zinc transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {isOpen ? <X size={22}/> : <Menu size={22}/>}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Menü schließen"
                            className="fixed inset-0 z-30 bg-neutral-950/40 backdrop-blur-sm lg:hidden"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.nav
                            className="fixed left-4 right-4 top-20 z-50 rounded-3xl border-2 border-zinc-800 bg-linear-to-tr from-cyan-200 to-amber-200 p-4 shadow-2xl sm:left-6 sm:right-6 lg:hidden"
                            initial={{opacity: 0, y: -16, scale: 0.96}}
                            animate={{opacity: 1, y: 0, scale: 1}}
                            exit={{opacity: 0, y: -16, scale: 0.96}}
                            transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="mb-4 rounded-2xl bg-blue-50 p-4">
                                <p className="text-sm font-bold text-blue-950">
                                    Kunst- und Ateliertage 2026
                                </p>
                                <p className="mt-1 text-sm text-blue-900/80">
                                    19.–20. September 2026
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
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
                                ))}
                            </div>

                            <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm text-amber-950">
                                <strong>Anmeldung bis 31.05.2026</strong>
                                <p className="mt-1 text-amber-900/80">
                                    Für teilnehmende Künstler*innen
                                </p>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}