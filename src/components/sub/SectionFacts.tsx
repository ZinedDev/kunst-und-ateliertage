import Fact from "./Fact.tsx";
import {motion} from "motion/react";
import type {SectionFacts} from "../../data/Types.ts";

interface SectionFactsProps {
    facts?: SectionFacts[]
}

export default function SectionFacts({ facts }: SectionFactsProps) {
    return (
        <motion.div
            className="mt-8 pl-1 grid grid-cols-1 gap-y-4"
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
            {facts?.map((fact) => (
                <Fact key={fact.label} fact={fact}/>
            ))}
        </motion.div>
    )
}