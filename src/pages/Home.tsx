import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import {motion} from "motion/react";
import MainNav from "../components/sub/MainNav.tsx";
import FlyerDownload from "../components/sub/FlyerDownload.tsx";
import {flyerData} from "../data/ProgramData.ts";
import Notice from "../components/sub/Notice.tsx";
import {contactNotice} from "../data/ContactData.ts";

export default function Home() {

    const Logo = "https://sa1np9c1c2.ufs.sh/f/xPMtTXbj0GDiflnHgtStRHWq1wx6Gy3nQsXpa2P5IOJhTkmE";

    return (
        <PageTransition>
            <section className="mt-8 max-sm:mt-4 flex flex-col items-center justify-center gap-y-6 max-sm:gap-y-1">
                <div className="max-w-5xl">
                    <Header
                        tagline="19.–20. September 2026"
                        taglineClassName="underline text-blue-800"
                    />
                </div>
                <motion.img
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, type: "spring", stiffness: 100, damping: 10, delay: 0.1}}
                    src={Logo}
                    alt="Kunst- und Ateliertage Logo"
                    height={500}
                    width={500}
                />
                <MainNav/>
                <div className="mt-12">
                    <FlyerDownload
                        label={flyerData.label}
                        href={flyerData.href}
                    />
                </div>
                <Notice data={contactNotice}/>
            </section>
        </PageTransition>
    );
}
