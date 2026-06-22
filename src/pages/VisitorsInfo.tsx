import PageTransition from "../components/layout/PageTransitions.tsx";
import {visitorHighlights, visitorHeader, flyerData} from "../data/VisitorData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
// import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";
// import Notice from "../components/sub/Notice.tsx";
import ProgramSection from "../components/sub/ProgramSection.tsx";
import FlyerDownload from "../components/sub/FlyerDownload.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";


export default function VisitorsInfo() {
    return (
        <PageTransition>
            <div className="mb-8">
                <Header
                    tagline={visitorHeader.tagline}
                    title={visitorHeader.title}
                    description={visitorHeader.description}
                />
                <section className="flex flex-col items-center justify-center">
                    <SectionFacts facts={visitorHighlights}/>
                    <FlyerDownload
                        label={flyerData.label}
                        href={flyerData.href}
                    />
                    <ProgramSection />
                    {/*<Notice data={visitorNotice}/>*/}
                    <SocialMediaIcons/>
                </section>
            </div>
        </PageTransition>
    );
}