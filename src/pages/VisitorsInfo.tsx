import PageTransition from "../components/layout/PageTransitions.tsx";
import {visitorHeader, flyerData} from "../data/VisitorData.ts";
import Header from "../components/layout/Header.tsx";
// import SectionFacts from "../components/sub/SectionFacts.tsx";
import ProgramSection from "../components/sub/ProgramSection.tsx";
import FlyerDownload from "../components/sub/FlyerDownload.tsx";

export default function VisitorsInfo() {
    return (
        <PageTransition>
            <section className="mb-8 mt-8">
                <Header
                    tagline={visitorHeader.tagline}
                    title={visitorHeader.title}
                    description={visitorHeader.description}
                />
                <div className="flex flex-col items-center justify-center gap-y-8 max-sm:gap-y-0">
                    {/*<SectionFacts facts={visitorHighlights}/>*/}
                    <FlyerDownload
                        label={flyerData.label}
                        href={flyerData.href}
                    />
                    <ProgramSection />
                </div>
            </section>
        </PageTransition>
    );
}