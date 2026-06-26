import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {AnimatePresence, motion} from "motion/react";
import Logo from "../assets/images/logos/260317_kunst_ateliertage2026_logo_cmyk_kat_2026_logo_cmyk.jpg";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";
import MainNav from "../components/sub/MainNav.tsx";
import FlyerDownload from "../components/sub/FlyerDownload.tsx";
import {flyerData} from "../data/VisitorData.ts";



export default function Home() {
    return (
        <PageTransition>
            <section className="mt-8 max-sm:mt-4 mb-4 flex flex-col items-center justify-center gap-y-10 max-sm:gap-y-1">
                <AnimatePresence>
                    <div
                        key={"header-home"}
                        className="max-w-5xl">
                        <Header
                            tagline="19.–20. September 2026"
                            taglineClassName="underline border-blue-700 p-2 text-blue-700"
                        />
                    </div>
                    <motion.img
                        key="logo"
                        // className={"border-2 border-orange-500 rounded-4xl"}
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5, type: "spring", stiffness: 100, damping: 10, delay: 0.1,}}
                        src={Logo}
                        alt="Kunst- und Ateliertage Logo"
                        height={400}
                        width={400}
                    />
                    <div
                        key={"main-nav"}
                        className={""}>
                        <MainNav />
                    </div>
                    <div className={"max-sm:mt-2"}>
                        <FlyerDownload
                            label={flyerData.label}
                            href={flyerData.href}
                        />
                    </div>
                    <div
                        key={"social-media-icons"}
                        className={"max-sm:mt-4"}
                    >
                        <SocialMediaIcons />
                    </div>
                </AnimatePresence>
            </section>

        </PageTransition>
    );
}