
import PageTransition from "../components/layout/PageTransitions.tsx";
import {visitorHighlights, visitorHeader} from "../data/VisitorData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";
import VisitorNotice from "../components/sub/VisitorNotice.tsx";


export default function VisitorsInfo() {
    return (
        <PageTransition>
            <main className="space-y-8 lg:space-y-16 flex flex-col items-center justify-center">
                <Header
                    tagline={visitorHeader.tagline}
                    title={visitorHeader.title}
                    description={visitorHeader.description}
                />
                <section className="space-y-8 flex flex-col items-center justify-center">
                    <SectionFacts facts={visitorHighlights}/>
                    <VisitorNotice/>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}