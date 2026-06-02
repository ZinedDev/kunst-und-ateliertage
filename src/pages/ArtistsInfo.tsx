import PageTransition from "../components/layout/PageTransitions.tsx";
import {artistsHeader, participationFacts, participationNotice} from "../data/ArtistsData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import Notice from "../components/sub/Notice.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";

export default function ArtistsInfo() {
    return (
        <PageTransition>
            <div>
                <Header
                    tagline={artistsHeader.tagline}
                    title={artistsHeader.title}
                    description={artistsHeader.description}
                />
                <section className="flex flex-col items-center justify-center">
                    <SectionFacts facts={participationFacts}/>
                    <Notice data={participationNotice}/>
                    <SocialMediaIcons/>
                </section>
            </div>
        </PageTransition>
    );
}