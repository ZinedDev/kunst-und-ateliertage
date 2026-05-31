import PageTransition from "../components/layout/PageTransitions.tsx";
import {contactFacts, contactHeader} from "../data/ContactData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import ContactNotice from "../components/sub/ContactNotice.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";

export default function ContactPage() {
    return (
        <PageTransition>
            <main className="space-y-8 lg:space-y-16 flex flex-col items-center justify-center">
                <Header
                    tagline={contactHeader.tagline}
                    title={contactHeader.title}
                    description={contactHeader.description}
                />
                <section className="space-y-8 flex flex-col items-center justify-center">
                    <SectionFacts facts={contactFacts}/>
                    <ContactNotice/>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}