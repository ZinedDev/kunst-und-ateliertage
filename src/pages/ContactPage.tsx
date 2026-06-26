import PageTransition from "../components/layout/PageTransitions.tsx";
import {contactFacts, contactHeader, contactNotice} from "../data/ContactData.ts";
import Header from "../components/layout/Header.tsx";
import SectionFacts from "../components/sub/SectionFacts.tsx";
import Notice from "../components/sub/Notice.tsx";
import SocialMediaIcons from "../components/sub/SocialMediaIcons.tsx";
// import Background from "../components/sub/Background.tsx";
// import BackgroundImage from "../assets/images/background/image1.jpeg";

export default function ContactPage() {
    return (
        <PageTransition>
            {/*<Background*/}
            {/*    src={BackgroundImage}*/}
            {/*    opacity={0.1}*/}
            {/*    className=" pointer-events-none"*/}
            {/*/>*/}
            <div className={"mt-8"}>
                <Header
                    tagline={contactHeader.tagline}
                    title={contactHeader.title}
                    description={contactHeader.description}
                />
                <section className="flex flex-col items-center justify-center">
                    <SectionFacts facts={contactFacts}/>
                    <Notice data={contactNotice}/>
                    <SocialMediaIcons/>
                </section>
            </div>
        </PageTransition>
    );
}