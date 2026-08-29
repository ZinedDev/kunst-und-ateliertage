import type { NeighborhoodData, HeaderData, ArtistEntry } from "./Types.ts";
import flyerPdf from "../assets/KuA_2026_Programmflyer.pdf";

export type { ArtistEntry } from "./Types.ts";

export const programHeader: HeaderData = {
    tagline: "Wer, wo, was?",
    title: "Programm",
    description: "Hier findest du alle Orte und Künstler*innen, die an den Kunst- und Ateliertagen teilnehmen, sortiert nach ihren Stadtteilen."
};

// --------------------------------------------------
// 01 | HYCP VEDDEL SPACE
// --------------------------------------------------

export const ayaAlsahel: ArtistEntry = {
    artist: "Aya Alsahel",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space"
};

export const marcelDoering: ArtistEntry = {
    artist: "Marcel Döring",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space",
    website: "www.idyllerei.de"
};

export const ruedigerFrauenhoffer: ArtistEntry = {
    artist: "Rüdiger Frauenhoffer",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space"
};

export const joritKriesel: ArtistEntry = {
    artist: "Jorit Kriesel",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space"
};

export const sinjeThomaMeyer: ArtistEntry = {
    artist: "Sinje Thoma Meyer",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space"
};

export const thomasOram: ArtistEntry = {
    artist: "Thomas Oram",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space",
    website: "www.idyllerei.de"
};

export const leonSkok: ArtistEntry = {
    artist: "Leon Skok",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space"
};

export const selcanTurin: ArtistEntry = {
    artist: "Selcan Turin",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space"
};

export const nilueferLiliYildirim: ArtistEntry = {
    artist: "Nilüfer \"Lili\" Yildirim",
    art: ["IN/EXCLUSIVE ARTS"],
    area: "HYCP Veddel Space",
    website: "www.idyllerei.de"
};

// --------------------------------------------------
// 02 | IMMANUELKIRCHE
// --------------------------------------------------

export const lordNicolausDinter: ArtistEntry = {
    artist: "Lord Nicolaus Dinter",
    art: ["Photographie", "Painting"],
    area: "Immanuelkirche",
    website: "www.nicolaus-dinter.com",
    socialMedia: ["@dinternicolaus"]
};

export const kristof: ArtistEntry = {
    artist: "Kristof",
    art: ["Gruppenausstellung \"art-help-healing\""],
    area: "Immanuelkirche"
};

export const sandra: ArtistEntry = {
    artist: "Sandra",
    art: ["Gruppenausstellung \"art-help-healing\""],
    area: "Immanuelkirche"
};

export const martin: ArtistEntry = {
    artist: "Martin",
    art: ["Gruppenausstellung \"art-help-healing\""],
    area: "Immanuelkirche"
};

export const michael: ArtistEntry = {
    artist: "Michael",
    art: ["Gruppenausstellung \"art-help-healing\""],
    area: "Immanuelkirche"
};

export const tanja: ArtistEntry = {
    artist: "Tanja",
    art: ["Gruppenausstellung \"art-help-healing\""],
    area: "Immanuelkirche"
};

export const christina: ArtistEntry = {
    artist: "Christina",
    art: ["Gruppenausstellung \"art-help-healing\""],
    area: "Immanuelkirche"
};

export const rado: ArtistEntry = {
    artist: "Rado",
    art: ["Gruppenausstellung \"art-help-healing\""],
    area: "Immanuelkirche"
};

// --------------------------------------------------
// 03 | KÜNSTLERHAUS GEORGSWERDER
// --------------------------------------------------

export const michaelEicks: ArtistEntry = {
    artist: "Michael Eicks",
    art: ["Fotografie"],
    area: "Künstlerhaus Georgswerder"
};

export const petraHoppe: ArtistEntry = {
    artist: "Petra Hoppe",
    art: ["Fotografie", "Federleicht (und Steinschwer)"],
    area: "Künstlerhaus Georgswerder"
};

// --------------------------------------------------
// 04 | WINDMÜHLE JOHANNA
// --------------------------------------------------

export const katharinaEinhoff: ArtistEntry = {
    artist: "Katharina Einhoff",
    art: ["Zeichnung", "Illustration"],
    area: "Windmühle Johanna",
    email: "katharinaeinhoff@gmx.de"
};

// --------------------------------------------------
// 05 | ÄLTESTES WOHNHAUS WILHELMSBURG
// --------------------------------------------------

export const katarinaJensen: ArtistEntry = {
    artist: "Katarina Jensen - Piselotten",
    art: ["Bilder", "Modelabel"],
    area: "Ältestes Wohnhaus Wilhelmsburg",
    socialMedia: ["@katarinajensenpiselotten"]
};

// --------------------------------------------------
// 06 | ATELIERGEMEINSCHAFT KREISKOMPLEX
// --------------------------------------------------

export const normanHeck: ArtistEntry = {
    artist: "Norman Heck",
    art: ["gestrickte Objekte"],
    area: "Ateliergemeinschaft Kreiskomplex"
};

export const freyaSarge: ArtistEntry = {
    artist: "Freya Sarge",
    art: ["Fotografie"],
    area: "Ateliergemeinschaft Kreiskomplex"
};

export const insa: ArtistEntry = {
    artist: "Insa",
    art: ["Multimedia Basteleien"],
    area: "Ateliergemeinschaft Kreiskomplex"
};

export const mk539: ArtistEntry = {
    artist: "mk539",
    art: ["Druckgrafik"],
    area: "Ateliergemeinschaft Kreiskomplex"
};

export const mp4zu3: ArtistEntry = {
    artist: "mp4zu3",
    art: ["Videoinstallation"],
    area: "Ateliergemeinschaft Kreiskomplex"
};

export const eikeUnrat: ArtistEntry = {
    artist: "Eike Unrat",
    art: [
        "Skulptur",
        "Zeichnung",
        "Malerei",
        "Collage",
        "Installation"
    ],
    area: "Ateliergemeinschaft Kreiskomplex"
};

export const michaelSchwarze: ArtistEntry = {
    artist: "Michael Schwarze",
    art: ["Fotografie", "Videokunst"],
    area: "Ateliergemeinschaft Kreiskomplex",
    website: "www.michaelschwarze.com",
    socialMedia: ["@michael.schwarze"]
};

export const jonasGallenkamp: ArtistEntry = {
    artist: "Jonas Gallenkamp",
    art: ["Malerei"],
    area: "Ateliergemeinschaft Kreiskomplex | Hidden Gallery",
    website: "www.jonasgallenkamp.de"
};

export const mikaGrunwaldt: ArtistEntry = {
    artist: "Mika Grunwaldt",
    art: ["Photography"],
    area: "Ateliergemeinschaft Kreiskomplex | Hidden Gallery",
    website: "www.mikagrunwaldt.com",
    socialMedia: ["@mikagrunwaldt"]
};

// --------------------------------------------------
// 07 | DEICHDIELE
// --------------------------------------------------

export const paulinaOhl: ArtistEntry = {
    artist: "Paulina Ohl",
    art: ["Fotografie"],
    area: "Deichdiele",
    email: "pauli.ohl@web.de",
    socialMedia: ["@paulinaohl"]
};

export const nicoManozkow: ArtistEntry = {
    artist: "Nico Manozkow",
    art: ["Fotografie"],
    area: "Deichdiele",
    email: "nicomanozkow@gmail.com",
    socialMedia: ["@manozkow"]
};

// --------------------------------------------------
// 08 | KERAMIKWERKSTATT
// --------------------------------------------------

export const anqiLyu: ArtistEntry = {
    artist: "Anqi Lyu",
    art: ["handgemachte Keramikwaren"],
    area: "Keramikwerkstatt",
    email: "hallo@studioanqi.de",
    socialMedia: ["@angellv1920"]
};

// --------------------------------------------------
// 09 | ZINNWERKE E.V.
// --------------------------------------------------

export const nicoleRzepka: ArtistEntry = {
    artist: "Nicole Rzepka - At. Samtmammut",
    art: ["Druckkunst"],
    area: "Zinnwerke e.V."
};

export const michaelHeim: ArtistEntry = {
    artist: "Michael Heim - At. Samtmammut",
    art: ["Druckkunst"],
    area: "Zinnwerke e.V."
};

export const bereniceMoeller: ArtistEntry = {
    artist: "Berenice Möller",
    art: ["Textilkunst"],
    area: "Zinnwerke e.V.",
    website: "www.studioboldo.com",
    email: "berenice@studioboldo.com",
    socialMedia: ["@studioboldo"]
};

export const martinSchramm: ArtistEntry = {
    artist: "Martin Schramm",
    art: ["Kollagen"],
    area: "Zinnwerke e.V."
};

export const katjaMarx: ArtistEntry = {
    artist: "Katja Marx",
    art: ["Holzschnitte"],
    area: "Zinnwerke e.V."
};

export const tattooAtelier: ArtistEntry = {
    artist: "Tattoo Atelier",
    art: ["Tattoo", "Flashday"],
    area: "Zinnwerke e.V.",
    socialMedia: [
        "@guffel_tattoo",
        "@Theos_tats",
        "@help.artwork",
        "@raphitattoo"
    ]
};

// --------------------------------------------------
// 10 | ATELIER FREISTIL
// --------------------------------------------------

export const atelierFreistil: ArtistEntry = {
    artist: "Atelier Freistil",
    art: ["verschiedene Kunstformen"],
    area: "Atelier Freistil",
    website: "www.atelier-freistil.de",
    socialMedia: ["@atelierfreistil"]
};

// --------------------------------------------------
// 11 | ATELIERHOF
// --------------------------------------------------

export const benteWolke: ArtistEntry = {
    artist: "Bente Wolke",
    art: ["Bildobjekte", "Malerei"],
    area: "Atelierhof | Garten",
    website: "www.bente-wolke.de",
    email: "mail@bente-wolke.de",
    socialMedia: ["@bente_wolke"]
};

export const mareikeAlexander: ArtistEntry = {
    artist: "Mareike Alexander",
    art: ["Kostümgestaltung", "Textilkunst"],
    area: "Atelierhof | Hinterhof | 1. Stock",
    email: "fraumareikealexander@gmail.com",
    socialMedia: ["@almamaalalma"]
};

export const lotteBraeuning: ArtistEntry = {
    artist: "Lotte Bräuning",
    art: ["Kinderbuchillustration"],
    area: "Atelierhof | Hinterhof | 1. Stock",
    website: "www.lottebraeuning.de",
    email: "post@lottebraeuning.de",
    socialMedia: ["@lottebraeuning_illustration"]
};

export const nikitaBuerger: ArtistEntry = {
    artist: "Nikita Bürger",
    art: ["Zeichnung", "Illustration"],
    area: "Atelierhof | Hinterhof | 1. Stock",
    socialMedia: ["@nikita.buerger"]
};

export const lenaGalitsch: ArtistEntry = {
    artist: "Lena Galitsch",
    art: ["Webdesign", "Experimente"],
    area: "Atelierhof | Hinterhof | 1. Stock",
    website: "www.galitsch.de"
};

export const karinKraemer: ArtistEntry = {
    artist: "Karin Kraemer",
    art: ["Keramik", "Zeichnung"],
    area: "Atelierhof | Hinterhof | 1. Stock",
    socialMedia: ["@karin__kraemer"]
};

export const gosiaMachon: ArtistEntry = {
    artist: "Gosia Machon",
    art: ["Malerei"],
    area: "Atelierhof | Hinterhof | 1. Stock",
    website: "www.gosiamachon.de"
};

// --------------------------------------------------
// 12 | VITACURARE KUNSTLABOR
// --------------------------------------------------

export const kunstGruppeUndKreativgruppe: ArtistEntry = {
    artist: "Kunst- und Kreativgruppe",
    art: ["Werke der Klientinnen und Klienten"],
    area: "Vitacurare Kunstlabor"
};

export const klaasGoerges: ArtistEntry = {
    artist: "Klaas Goerges",
    art: ["Malerei"],
    area: "Vitacurare Kunstlabor",
    website: "www.vitacurare.de",
    email: "kg@vitacurare.de"
};

export const nathalieHallmann: ArtistEntry = {
    artist: "Nathalie Hallmann",
    art: ["Makramee für Anfänger:innen"],
    area: "Vitacurare Kunstlabor",
    website: "www.vitacurare.de",
    email: "nah@vitacurare.de"
};

// --------------------------------------------------
// 13 | RATTENLOCH 4.0
// --------------------------------------------------

export const iloToivio: ArtistEntry = {
    artist: "Ilo Toivio",
    art: [
        "crochet installation with audio",
        "drop-in mending workshop",
        "Illustration",
        "Installation"
    ],
    area: "Rattenloch 4.0"
};

export const marleneBusch: ArtistEntry = {
    artist: "Marlene Busch",
    art: [
        "crochet installation with audio",
        "drop-in mending workshop",
        "Illustration",
        "Installation"
    ],
    area: "Rattenloch 4.0"
};

export const kunoSeltmann: ArtistEntry = {
    artist: "Kuno Seltmann",
    art: [
        "crochet installation with audio",
        "drop-in mending workshop",
        "Illustration",
        "Installation"
    ],
    area: "Rattenloch 4.0"
};

// --------------------------------------------------
// 14 | DER GEHEIMNISVOLLE DACHBODEN
// --------------------------------------------------

export const juergenWeber: ArtistEntry = {
    artist: "Jürgen Weber",
    art: ["3d Collagen", "Maschinen", "Zeichnungen"],
    area: "Der geheimnisvolle Dachboden",
    email: "juergenweber.zeitmomente@gmail.com",
    socialMedia: ["@zeitmomente_in_3d"]
};

// --------------------------------------------------
// 15 | HOFA - HONIGFABRIK
// --------------------------------------------------

export const tamaraNiederweis: ArtistEntry = {
    artist: "Tamara Niederweis",
    art: ["Urban Art Malerei"],
    area: "HoFa - Kommunikationszentrum Honigfabrik | Malerei Atelier",
    email: "tamara.niederweis@gmail.com",
    socialMedia: ["@lagraffeusearts"]
};

export const leonorDuque: ArtistEntry = {
    artist: "Leonor Duque",
    art: ["Malerei"],
    area: "HoFa - Kommunikationszentrum Honigfabrik | Malerei Atelier",
    email: "leonorrecio.duque@gmail.com",
    socialMedia: ["@leonorduque_"]
};

export const johannaSchmidt: ArtistEntry = {
    artist: "Johanna Sarah Schmidt",
    art: ["Keramik"],
    area: "HoFa - Kommunikationszentrum Honigfabrik"
};

export const anaLucena: ArtistEntry = {
    artist: "Ana Luisa Amaral Lucena",
    art: ["Keramik"],
    area: "HoFa - Kommunikationszentrum Honigfabrik"
};

export const julioCelisRodriguez: ArtistEntry = {
    artist: "Julio Celis Rodriguez",
    art: ["Musik"],
    area: "HoFa - Kommunikationszentrum Honigfabrik | Musik Atelier",
    email: "celiselgato@gmail.com",
    socialMedia: ["@celiselgato"]
};

// --------------------------------------------------
// 16 | ATELIERHAUS 23 | 2. ETAGE
// --------------------------------------------------

export const thomasKleine: ArtistEntry = {
    artist: "Thomas Kleine",
    art: ["Papierschnitt", "Monotypie", "Installation"],
    area: "Atelierhaus 23 | 2. Etage",
    website: "www.thomas-kleine.de",
    email: "mail@thomas-kleine.de",
    socialMedia: ["@thomaskleinestudio"]
};

export const katjaSattelkau: ArtistEntry = {
    artist: "Katja Sattelkau - Atelier 90°",
    art: ["Malerei", "Objekte"],
    area: "Atelierhaus 23 | 2. Etage",
    website: "www.katjasattelkau.de",
    socialMedia: ["@atelier_90_grad"]
};

export const kristinStrauss: ArtistEntry = {
    artist: "Kristin Strauß",
    art: ["Tanz"],
    area: "Atelierhaus 23 | 2. Etage",
    website: "www.scheinwerfer-dancecenter.de",
    socialMedia: ["@scheinwerfer_dance_center"]
};

export const elkeEhninger: ArtistEntry = {
    artist: "Elke Ehninger",
    art: ["Collage"],
    area: "Atelierhaus 23 | 2. Etage",
    website: "www.elke-ehninger.de",
    email: "mail@elke-ehninger.de"
};

export const jannKaune: ArtistEntry = {
    artist: "Jann Kaune",
    art: ["Ölmalerei"],
    area: "Atelierhaus 23 | 2. Etage",
    email: "info@kaune-online.de"
};

export const ulrichMertens: ArtistEntry = {
    artist: "Ulrich Mertens",
    art: ["visual arts", "Beauty of Wind"],
    area: "Atelierhaus 23 | 2. Etage"
};

export const valerieWagner: ArtistEntry = {
    artist: "Valerie Wagner",
    art: ["Fotografie", "Linoldruck"],
    area: "Atelierhaus 23 | 2. Etage",
    socialMedia: ["@valeriewagner_photography"]
};

// --------------------------------------------------
// 16 | ATELIERHAUS 23 | 1. ETAGE
// --------------------------------------------------

export const katharinaBick: ArtistEntry = {
    artist: "Katharina Bick",
    art: ["Malerei", "Zeichnung"],
    area: "Atelierhaus 23 | 1. Etage",
    email: "katharina.bick@web.de"
};

export const claudiaEschborn: ArtistEntry = {
    artist: "Claudia Eschborn",
    art: ["Fotografie", "Buchbinderei"],
    area: "Atelierhaus 23 | 1. Etage",
    website: "www.claudiaeschborn.de",
    socialMedia: ["@claudiaeschborn2404"]
};

export const stephanieKrengel: ArtistEntry = {
    artist: "Stephanie Krengel",
    art: ["Malerei"],
    area: "Atelierhaus 23 | 1. Etage",
    email: "skrengel@online.de",
    socialMedia: ["@stephanie_krengel"]
};

export const catalinaGonzalezGonzalez: ArtistEntry = {
    artist: "Catalina González González",
    art: ["film", "drawing", "text"],
    area: "Atelierhaus 23 | 1. Etage",
    socialMedia: ["@gonzalezgonzalezacostalopez"]
};

export const katharinaLanger: ArtistEntry = {
    artist: "Katharina Langer",
    art: ["Malerei", "Siebdruck"],
    area: "Atelierhaus 23 | 1. Etage",
    website: "www.katharinalanger.de",
    socialMedia: ["@Katharinalangerstudio"]
};

export const claireEwbank: ArtistEntry = {
    artist: "Claire Ewbank",
    art: ["Malerei"],
    area: "Atelierhaus 23 | 1. Etage",
    socialMedia: ["@claire.ewbank"]
};

// --------------------------------------------------
// 16 | ATELIERHAUS 23 | ERDGESCHOSS
// --------------------------------------------------

export const carlaBinter: ArtistEntry = {
    artist: "Carla Binter",
    art: [
        "Wandbilder",
        "keramische Einzelstücke"
    ],
    area: "Atelierhaus 23 | Erdgeschoss",
    website: "www.keramik-carla-binter.de",
    email: "info@keramik-carla-binter.de"
};

export const melanieCramer: ArtistEntry = {
    artist: "Melanie Cramer - vonLani",
    art: ["Schmuck", "Accessoires"],
    area: "Atelierhaus 23 | Erdgeschoss",
    website: "www.vonlani.de",
    socialMedia: ["@von.lani"]
};

export const friederFalk: ArtistEntry = {
    artist: "Frieder Falk",
    art: ["Zeichnung", "Objekt"],
    area: "Atelierhaus 23 | Erdgeschoss",
    website: "www.friederfalk.de",
    email: "fcfalk@posteo.de",
    socialMedia: ["@falk_frieder"]
};

export const sabineHahnNicol: ArtistEntry = {
    artist: "Sabine Hahn-Nicol",
    art: ["Bildhauerei"],
    area: "Atelierhaus 23 | Erdgeschoss",
    email: "sabine.hahn-nicol@hamburg.de"
};

export const capoeira: ArtistEntry = {
    artist: "Capoeira Angola Hamburg-Süd",
    art: ["Fitness", "Kampf", "Rhythmus"],
    area: "Atelierhaus 23 | Erdgeschoss",
    website: "www.capoeira-hamburg-sued.org",
    socialMedia: ["@capoeira_angola_hamburg_sued"]
};

export const martinGraf: ArtistEntry = {
    artist: "Martin Graf - edition8x8",
    art: ["Druckgrafik", "Bastelbögen", "Heftchen"],
    area: "Atelierhaus 23 | Erdgeschoss | Ateliergemeinschaft",
    website: "www.edition8x8.de",
    email: "martin.graf@edition8x8.de"
};

export const miriamElze: ArtistEntry = {
    artist: "Miriam Elze",
    art: ["Illustration"],
    area: "Atelierhaus 23 | Erdgeschoss | Ateliergemeinschaft",
    website: "www.miriamelze.de",
    email: "illustration@miriamelze.de",
    socialMedia: ["@miriamelze_illustration"]
};

// --------------------------------------------------
// 17 | GALERIE 23 | KAFFEELIEBE
// --------------------------------------------------

export const stephanieKrengelGalerie23: ArtistEntry = {
    artist: "Stephanie Krengel",
    art: ["Malerei und mehr"],
    area: "Galerie 23 | Kaffeeliebe",
    email: "skrengel@online.de",
    socialMedia: ["@stephanie_krengel"]
};

export const neighborhoodData: NeighborhoodData[] = [
    {
        name: "Veddel",
        locations: [
            {
                name: "HYCP VEDDEL SPACE",
                adresse: "Sieldeich 36, 20539 Hamburg",
                lat: 53.52682,
                lng: 10.02827,
                artists: [
                    ayaAlsahel,
                    marcelDoering,
                    ruedigerFrauenhoffer,
                    joritKriesel,
                    sinjeThomaMeyer,
                    thomasOram,
                    leonSkok,
                    selcanTurin,
                    nilueferLiliYildirim
                ]
            },
            {
                name: "IMMANUELKIRCHE",
                adresse: "Wilhelmsburger Straße 73, 20539 Hamburg",
                lat: 53.525589,
                lng: 10.017181,
                artists: [
                    lordNicolausDinter,
                    kristof,
                    sandra,
                    martin,
                    michael,
                    tanja,
                    christina,
                    rado
                ]
            }
        ]
    },
    {
        name: "Kirchdorf / Georgswerder",
        locations: [
            {
                name: "KÜNSTLERHAUS GEORGSWERDER",
                adresse: "Rahmwerder Straße 3, 21109 Hamburg",
                lat: 53.512230,
                lng: 10.019950,
                artists: [
                    michaelEicks,
                    petraHoppe
                ]
            },
            {
                name: "WINDMÜHLE JOHANNA",
                adresse: "Schönenfelder Straße 99a, 21109 Hamburg",
                lat: 53.49982,
                lng: 10.02316,
                artists: [
                    katharinaEinhoff
                ]
            },
            {
                name: "ÄLTESTES WOHNHAUS WILHELMSBURG",
                adresse: "Schönenfelder Straße 33, 21109 Hamburg",
                lat: 53.503992,
                lng: 10.015822,
                artists: [
                    katarinaJensen
                ]
            }
        ]
    },
    {
        name: "Wilhelmsburg",
        locations: [
            {
                name: "ATELIER FREISTIL",
                adresse: "Am Veringhof 15–17, 21107 Hamburg",
                lat: 53.5143,
                lng: 9.98396,
                artists: [
                    atelierFreistil
                ]
            },
            {
                name: "ATELIERGEM. KREISKOMPLEX",
                adresse: "Stenzelring 17, 21107 Hamburg",
                lat: 53.5191733,
                lng: 10.0066839,
                artists: [
                    normanHeck,
                    freyaSarge,
                    insa,
                    mk539,
                    mp4zu3,
                    eikeUnrat,
                    michaelSchwarze
                ]
            },
            {
                name: "ATELIERHAUS 23",
                adresse: "Am Veringhof 23a, 21107 Hamburg",
                lat: 53.514650,
                lng: 9.983862,
                artists: [
                    thomasKleine,
                    katjaSattelkau,
                    kristinStrauss,
                    elkeEhninger,
                    jannKaune,
                    ulrichMertens,
                    valerieWagner,
                    katharinaBick,
                    claudiaEschborn,
                    stephanieKrengel,
                    catalinaGonzalezGonzalez,
                    katharinaLanger,
                    claireEwbank,
                    carlaBinter,
                    melanieCramer,
                    friederFalk,
                    sabineHahnNicol,
                    capoeira,
                    martinGraf,
                    miriamElze,
                ]
            },
            {
                name: "ATELIERHOF",
                adresse: "Veringstraße 22, 21107 Hamburg",
                lat: 53.51644,
                lng: 9.98766,
                artists: [
                    benteWolke,
                    mareikeAlexander,
                    lotteBraeuning,
                    nikitaBuerger,
                    lenaGalitsch,
                    karinKraemer,
                    gosiaMachon
                ]
            },
            {
                name: "DACHBODEN",
                adresse: "Karl-Kunert-Straße 3, 21107 Hamburg",
                lat: 53.518835,
                lng: 9.983836,
                artists: [
                    juergenWeber
                ]
            },
            {
                name: "DEICHDIELE",
                adresse: "Veringstraße 156, 21107 Hamburg",
                lat: 53.505358,
                lng: 9.98618,
                artists: [
                    paulinaOhl,
                    nicoManozkow
                ]
            },
            {
                name: "HIDDEN GALLERY",
                adresse: "Am Veringhof 23, 21107 Hamburg",
                lat: 53.514917,
                lng: 9.983862,
                artists: [
                    jonasGallenkamp,
                    mikaGrunwaldt
                ]
            },
            {
                name: "KERAMIKWERKSTATT",
                adresse: "Neuhöfer Straße 23, Puhsthof, 21107 Hamburg",
                lat: 53.5103,
                lng: 9.98551,
                artists: [
                    anqiLyu
                ]
            },
            {
                name: "HONIGFABRIK",
                adresse: "Industriestraße 125–131, 21107 Hamburg",
                lat: 53.515877,
                lng: 9.982554,
                artists: [
                    tamaraNiederweis,
                    leonorDuque,
                    johannaSchmidt,
                    anaLucena,
                    julioCelisRodriguez
                ]
            },
            {
                name: "RATTENLOCH",
                adresse: "Fährstraße 85, 21107 Hamburg",
                lat: 53.516586,
                lng: 9.984074,
                artists: [
                    iloToivio,
                    marleneBusch,
                    kunoSeltmann
                ]
            },
            {
                name: "VITACURARE",
                adresse: "Sanitasstraße 10, 21107 Hamburg",
                lat: 53.5155646,
                lng: 9.9862596,
                artists: [
                    kunstGruppeUndKreativgruppe,
                    klaasGoerges,
                    nathalieHallmann
                ]
            },
            {
                name: "ZINNWERKE",
                adresse: "Am Veringhof 7, 21107 Hamburg",
                lat: 53.513175,
                lng: 9.984564,
                artists: [
                    nicoleRzepka,
                    michaelHeim,
                    bereniceMoeller,
                    martinSchramm,
                    katjaMarx,
                    tattooAtelier
                ]
            }
        ]
    }
];

export const flyerData = {
    label: "Programm/Flyer 2026",
    href: flyerPdf
};
