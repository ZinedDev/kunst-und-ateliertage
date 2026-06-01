import type {HeaderData, SectionFacts} from "./Types.ts";

export const impressumHeader:HeaderData = {
    tagline: "Rechtliches",
    title: "Impressum",
    description: "Angaben gemäß presserechtlicher Verantwortung und rechtliche Hinweise zur Website.",
}

export const impressumFacts:SectionFacts[] = [
    {
        label:"Organisation",
        value:"Die Elbinsel Kunst- und Ateliertage werden ehrenamtlich von der PR-AG des Atelierhaus 23 organisiert.",
    },
    {
        label:"Haftungshinweis",
        value:"Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine" +
            "Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten " +
            "sind ausschließlich deren Betreiber verantwortlich.",
    },
    {
        label:"Urheberrecht",
        value:"Alle Rechte, insbesondere das Recht auf Vervielfältigung " +
            "Verbreitung sowie Übersetzung, bleiben vorbehalten. Keine der " +
            "Abbildungen darf ohne Genehmigung der jeweiligen Künstler*innen" +
            "reproduziert oder unter Verwendung elektronischer Systeme" +
            "verarbeitet, vervielfältigt oder verbreitet werden.",
    }
];