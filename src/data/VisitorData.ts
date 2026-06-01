import type {HeaderData, NoticeData, SectionFacts} from "./Types.ts";

export const visitorHeader: HeaderData = {
    tagline: "Orte entdecken, \n Menschen treffen, \n  Kunst erleben .",
    title: "Besucher*innen",
    description: "...können die kreative Vielfalt der Elbinseln kennenlernen."
}

export const visitorNotice: NoticeData = {
    title: "Programm",
    text: "(...für 2026 noch in Arbeit!)",
    link: {
        label: "Programm/Flyer 2025",
        href: "/KuA_2025_Programm_Flyer_Web-2.pdf"
    }
}

export const visitorHighlights: SectionFacts[] = [
    {
        label: "Elbinseln entdecken",
        value: "Entdecke Kunst in Wilhelmsburg, Kirchdorf, Georgswerder und auf der Veddel.",
    },
    {
        label: "Künstler*innen besuchen",
        value: "Besuche Künstler*innen direkt an den Orten ihrer kreativen Tätigkeit.",
    },
    {
        label: "Programm erleben",
        value: "Erlebe Ausstellungen, Gespräche, Workshops, Musik sowie weitere Aktionen live vor Ort.",
    },

];

export const places = ["Wilhelmsburg", "Veddel", "Kirchdorf", "Georgswerder"];
