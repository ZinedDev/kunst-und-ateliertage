import PageTransition from "../components/layout/PageTransitions.tsx";
import {contactFacts, contactHeader, contactNotice} from "../data/ContactData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import Notice from "../components/sub/Notice.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";

export default function ContactPage() {
    return (
        <PageTransition>
            <main className="space-y-8 lg:space-y-16 max-sm:flex max-sm:flex-col items-center justify-center">
                <Header
                    tagline={contactHeader.tagline}
                    title={contactHeader.title}
                    description={contactHeader.description}
                />
                <section className="space-y-8 lg:space-y-24 flex flex-col max-sm:max-items-center max-sm:justify-center">
                    <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-12">
                        <SectionFacts facts={contactFacts}/>
                        <Notice data={contactNotice}/>
                    </div>
                    <SocialMediaIcons/>
                </section>
            </main>
        </PageTransition>
    );
}