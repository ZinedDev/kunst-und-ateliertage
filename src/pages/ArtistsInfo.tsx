import PageTransition from "../components/layout/PageTransitions.tsx";
import {artistsHeader, participationFacts, participationNotice} from "../data/ArtistsData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import Notice from "../components/sub/Notice.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";

export default function ArtistsInfo() {
    return (
        <PageTransition>
            <main className="max-sm:flex max-sm:flex-col items-start justify-start">
            <Header
                    tagline={artistsHeader.tagline}
                    title={artistsHeader.title}
                    description={artistsHeader.description}
                />
                <section className="flex flex-col max-sm:max-items-center max-sm:justify-center">
                    <div>
                        <SectionFacts facts={participationFacts}/>
                        <Notice data={participationNotice}/>
                    </div>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}