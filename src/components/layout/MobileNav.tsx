import {useState} from "react";
import {NavLink} from "react-router";
import {AnimatePresence, motion} from "motion/react";
import {Menu, X} from "lucide-react";
import {navbarItems} from "../../data/NavData.ts";
import brandMark from "../../assets/images/logos/KuA-Logo_Inline.png?inline";
import SocialMediaIcons from "../sub/SocialMediaIcons.tsx";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed left-0 top-0 z-40 w-full border-b-2 border-zinc-800 px-2 backdrop-blur-xl sm:px-6">
                <div className="flex items-center justify-between">
                    <NavLink
                        to="/"
                        aria-label="Zur Startseite"
                        className="group inline-flex h-14 items-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <img
                            src={brandMark}
                            alt=""
                            aria-hidden="true"
                            className="h-12 w-auto transition-transform group-hover:scale-105"
                            height={50}
                            width={48}
                        />
                    </NavLink>
                    <div>
                        <SocialMediaIcons />
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsOpen((current) => !current)}
                        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                        aria-expanded={isOpen}
                        className="mr-2 ml-3 inline-flex h-8 w-8 items-center justify-center rounded-xl border-2 border-zinc-800 bg-transparent text-zinc transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {isOpen ? <X size={24}/> : <Menu size={18}/>}
                    </button>
                </div>
            </header>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Menü schließen"
                            className="fixed inset-0 z-30 bg-neutral-950/40 backdrop-blur-sm"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.nav
                            className="w-1/2 lg:w-1/6 fixed left-1/2 -translate-x-1/2 top-20 z-50 rounded-xl border-2 border-zinc-800 bg-white p-4 shadow-2xl"
                            initial={{opacity: 0, y: -16, scale: 0.96}}
                            animate={{opacity: 1, y: 0, scale: 1}}
                            exit={{opacity: 0, y: -16, scale: 0.96}}
                            transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="flex flex-col items-center gap-2">
                                {navbarItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        end={item.path === "/"}
                                        className={({isActive}) =>
                                            [
                                                "rounded-xl px-4 py-3 text-lg font-semibold transition-all",
                                                isActive
                                                    ? "bg-orange-400/10 border-2 border-orange-400 rounded-xl"
                                                    : "text-neutral-700 hover:scale-[1.04] hover:text-neutral-950",
                                            ].join(" ")
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
