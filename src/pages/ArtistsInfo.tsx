import PageTransition from "../components/layout/PageTransitions.tsx";
import {artistsHeader, participationFacts} from "../data/ArtistsData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import ParticipationNotice from "../components/sub/artists/ParticipationNotice.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";

export default function ArtistsInfo() {
    return (
        <PageTransition>
            <main className="space-y-8 lg:space-y-16 flex flex-col items-center justify-center">
                <Header
                    tagline={artistsHeader.tagline}
                    title={artistsHeader.title}
                    description={artistsHeader.description}
                />
                <section className="space-y-8 flex flex-col items-center justify-center">
                    <SectionFacts facts={participationFacts}/>
                    <ParticipationNotice/>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}