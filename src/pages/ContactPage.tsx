import PageTransition from "../components/layout/PageTransitions.tsx";
import {contactFacts, contactHeader, contactNotice} from "../data/ContactData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import Notice from "../components/sub/Notice.tsx";


export default function ContactPage() {
    return (
        <PageTransition>
            {/*<Background*/}
            {/*    src={BackgroundImage}*/}
            {/*    opacity={0.1}*/}
            {/*    className=" pointer-events-none"*/}
            {/*/>*/}
            <section>
                <Header
                    tagline={contactHeader.tagline}
                    title={contactHeader.title}
                    description={contactHeader.description}
                />
                <div className="flex flex-col items-center justify-center">
                    <SectionFacts facts={contactFacts}/>
                    <Notice data={contactNotice}/>
                    {/*<SocialMediaIcons/>*/}
                </div>
            </section>
        </PageTransition>
    );
}