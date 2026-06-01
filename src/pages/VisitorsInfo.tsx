
import PageTransition from "../components/layout/PageTransitions.tsx";
import {visitorHighlights, visitorHeader, visitorNotice} from "../data/VisitorData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";
import Notice from "../components/sub/Notice.tsx";


export default function VisitorsInfo() {
    return (
        <PageTransition>
            <main className="space-y-8 lg:space-y-16 max-sm:flex max-sm:flex-col items-center justify-start">
                <Header
                    tagline={visitorHeader.tagline}
                    title={visitorHeader.title}
                    description={visitorHeader.description}
                />
                <section className="space-y-8 lg:space-y-24 flex flex-col max-sm:max-items-center max-sm:justify-center">
                    <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-12">
                    <SectionFacts facts={visitorHighlights}/>
                    <Notice data={visitorNotice}/>
                    </div>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}