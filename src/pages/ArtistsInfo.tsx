import {motion} from "motion/react";
import ParticipationSteps from "../components/sub/ParticipationSteps.tsx";
import PageTransition from "../components/layout/PageTransitions.tsx";
import {participationFacts, artistsHeader} from "../data/ArtistsData.ts";
import ParticipationCard from "../components/sub/ParticipationCard.tsx";
import Header from "../components/layout/Header.tsx";
import {useRef} from "react";


export default function ArtistsInfo() {

    const sectionRef = useRef<HTMLDivElement>(null);
    //const bIsSmallDisplay = window.innerWidth < 640;

    return (
        <PageTransition>
            <div
                ref={sectionRef}
                className="space-y-18">
                <Header
                    tagline={artistsHeader.tagline}
                    title={artistsHeader.title}
                    description={artistsHeader.description}
                    taglineClassName={"text-blue-700"}
                />
                <motion.div
                    className="pl-1 grid gap-4 max-sm:grid-cols-1 xl:grid-cols-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {participationFacts.map((fact) => (
                        <ParticipationCard key={fact.label} fact={fact}/>
                    ))}
                </motion.div>
                <ParticipationSteps/>
            </div>
        </PageTransition>
    );
}