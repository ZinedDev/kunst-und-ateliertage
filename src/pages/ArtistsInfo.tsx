import PageTransition from "../components/layout/PageTransitions.tsx";
import {artistsHeader, participationFacts, participationNotice} from "../data/ArtistsData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import Notice from "../components/sub/Notice.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";

export default function ArtistsInfo() {
    return (
        <PageTransition>
            <main className="space-y-1 lg:space-y-16 max-sm:flex max-sm:flex-col items-center justify-center">
            <Header
                    tagline={artistsHeader.tagline}
                    title={artistsHeader.title}
                    description={artistsHeader.description}
                />
                <section className="space-y-12 lg:space-y-24 flex flex-col max-sm:max-items-center max-sm:justify-center">
                    <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-12">
                        <SectionFacts facts={participationFacts}/>
                        <Notice data={participationNotice}/>
                    </div>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}