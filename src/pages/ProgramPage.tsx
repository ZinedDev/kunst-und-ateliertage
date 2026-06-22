import PageTransition from "../components/layout/PageTransitions.tsx";
import Header from "../components/layout/Header.tsx";
import { programHeader } from "../data/ProgramData.ts";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";
import ProgramSection from "../components/sub/ProgramSection.tsx";

export default function ProgramPage() {
    return (
        <PageTransition>
            <div>
                <Header
                    tagline={programHeader.tagline}
                    title={programHeader.title}
                    description={programHeader.description}
                />

                <section className="flex flex-col items-center justify-center">
                    <ProgramSection />
                    <SocialMediaIcons/>
                </section>
            </div>
        </PageTransition>
    );
}
