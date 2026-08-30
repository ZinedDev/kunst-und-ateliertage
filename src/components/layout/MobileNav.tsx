import {useState} from "react";
import {NavLink} from "react-router";
import {AnimatePresence, motion} from "motion/react";
import {Menu, X} from "lucide-react";
import {navbarItems} from "../../data/NavData.ts";
import Logo from "../../assets/images/logos/KuA-Logo_Schriftzug.png"
//import Logo from "../../assets/images/logos/260317_kunst_ateliertage2026_logo_cmyk_kat_2026_logo_cmyk.jpg"
import SocialMediaIcons from "../sub/SocialMediaIcons.tsx";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed left-0 top-0 z-40 w-full border-b-2 border-zinc-800 px-2 sm:px-6 backdrop-blur-xl ">
                <div className="flex items-center justify-between">
                    <NavLink
                        to="/"
                        className="group"
                        onClick={() => setIsOpen(false)}
                    >
                    <div>
                        <img
                            src={Logo}
                            alt="Kunst- und Ateliertage Logo"
                            className={""}
                            height={50}
                            width={50}
                        />
                        {/*<span*/}
                        {/*    className="block text-sm font-black leading-tight text-neutral-950 transition group-hover:text-blue-700">*/}
                        {/*    14. Kunst- und Ateliertage*/}
                        {/*    <p className="text-xs">*/}
                        {/*        auf den Elbinseln*/}
                        {/*    </p>*/}
                        {/*</span>*/}
                    </div>
                    </NavLink>
                    <div
                        key={"social-media-icons"}
                    >
                        <SocialMediaIcons />
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsOpen((current) => !current)}
                        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                        aria-expanded={isOpen}
                        className="inline-flex h-8 w-8 mr-2 ml-3 items-center justify-center rounded-xl border-2 border-zinc-800 bg-transparent text-zinc transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {isOpen ? <X size={24}/> : <Menu size={18}/>}
                    </button>
                </div>
            </header>
            <AnimatePresence>
                {isOpen && (
                    <div>
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
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}