
import PageTransition from "../components/layout/PageTransitions.tsx";
import {visitorHighlights, visitorHeader, visitorNotice} from "../data/VisitorData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";
import Notice from "../components/sub/Notice.tsx";


export default function VisitorsInfo() {
    return (
        <PageTransition>
            <main className="max-sm:flex max-sm:flex-col items-start justify-start">
                <Header
                    tagline={visitorHeader.tagline}
                    title={visitorHeader.title}
                    description={visitorHeader.description}
                />
                <section className="lex flex-col max-sm:max-items-center max-sm:justify-center">
                    <div>
                    <SectionFacts facts={visitorHighlights}/>
                    <Notice data={visitorNotice}/>
                    </div>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}