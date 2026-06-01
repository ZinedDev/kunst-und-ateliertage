import type {HeaderData, NoticeData, SectionFacts} from "./Types.ts";

export const artistsHeader:HeaderData = {
    tagline:"Zeig deine Kunst dort, \n  wo sie entsteht.",
    title: "Künstler*innen",
    description:"...können ihre Arbeit präsentieren und Teil eines gemeinsamen Wochenendes für Kunst und Kultur werden."
}

export const participationNotice: NoticeData = {
    title: "Wichtig!!!",
    text: "Gemeinsam sichtbar werden durch...\n" +
          "Verbreitung der Infos,\n" +
          "persönliche Einladungen,\n" +
          "offene Türen!",
    titleClassName: "text-green-800",
    textClassName: "text-blue-800"
}

export const prepSteps = [
    "Rechtzeitig anmelden",
    "Kurzbeschreibung, Bildmaterial und Kontaktdaten bereitstellen",
    "Programm, Plakate und Social Media aktiv mitverbreiten",
    "Atelier, Werkstatt oder Ausstellungsort vorbereiten",
];

export const participationFacts:SectionFacts[] = [
    {
        label: "Anmeldung",
        value: "Bis zum 31.05.2026 anmelden!!!\nKurzbeschreibung, Bildmaterial sowie Kontaktdaten bereitstellen. ",
    },
    {
        label: "Vorbereitung",
        value: "Programm über Social Media mitverbreiten.\nPlakate und Flyer verteilen.",
    },
    {
        label: "Teilnahme",
        value: "Den Ort deiner kreativen Tätigkeit einladend sowie zugänglich gestalten.",
    },
];