import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {AnimatePresence, motion} from "motion/react";
import Logo from "../assets/images/260317_kunst_ateliertage2026_logo_cmyk_kat_2026_logo_cmyk.jpg";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";
import MainNav from "../components/sub/MainNav.tsx";


export default function Home() {
    return (
        <PageTransition>
            <section className="mt-4 max-sm:mt-0 flex flex-col items-center justify-center ">
                <AnimatePresence>
                    <div
                        key={"header-home"}
                        className="max-w-5xl">
                        <Header
                            tagline="19.–20. September 2026"
                            taglineClassName="border-b-2 border-blue-700 pb-1 text-blue-700"
                        />
                    </div>
                    <motion.img
                        key="logo"
                        className={"mt-5 rounded-br-full border-2 border-zinc-800"}
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
                        className={"mt-10 max-sm:mt-5"}>
                        <MainNav />
                    </div>
                    <div key={"social-media-icons"}>
                        <SocialMediaIcons />
                    </div>
                </AnimatePresence>
            </section>

        </PageTransition>
    );
}