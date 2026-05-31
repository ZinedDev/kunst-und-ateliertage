import type {HeaderData, SectionFacts} from "./Types.ts";

export const visitorHeader: HeaderData = {
    tagline: "Orte entdecken, \n Menschen treffen, \n  Kunst erleben .",
    title: "Besucher*innen",
    description: "...können die kreative Vielfalt der Elbinseln kennenlernen."
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
