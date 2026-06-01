import PageTransition from "../components/layout/PageTransitions.tsx";
import {contactFacts, contactHeader, contactNotice} from "../data/ContactData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import Notice from "../components/sub/Notice.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";

export default function ContactPage() {
    return (
        <PageTransition>
            <main className="max-sm:flex max-sm:flex-col items-start justify-start">
                <Header
                    tagline={contactHeader.tagline}
                    title={contactHeader.title}
                    description={contactHeader.description}
                />
                <section className="flex flex-col max-sm:max-items-center max-sm:justify-center">
                    <div>
                        <SectionFacts facts={contactFacts}/>
                        <Notice data={contactNotice}/>
                    </div>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}