import type { NeighborhoodData, HeaderData } from "./Types.ts";
import flyerPdf from "../assets/KuA_2026_Programmflyer.pdf";

export const programHeader: HeaderData = {
    tagline: "Wer, wo, was?",
    title: "Programm",
    description: "Hier findest du alle Orte und Künstler*innen, die an den Kunst- und Ateliertagen teilnehmen, sortiert nach ihren Stadtteilen."
};

export type ArtistEntry = {
    artist: string;
    art: string[];
    area: string;

    email?: string;
    socialMedia?: string[];
    website?: string;
};

export const artists: ArtistEntry[] = [
    // --------------------------------------------------
    // 01 | HYCP VEDDEL SPACE
    // --------------------------------------------------

    {
        artist: "Aya Alsahel",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space"
    },
    {
        artist: "Marcel Döring",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space",
        website: "www.idyllerei.de"
    },
    {
        artist: "Rüdiger Frauenhoffer",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space"
    },
    {
        artist: "Jorit Kriesel",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space"
    },
    {
        artist: "Sinje Thoma Meyer",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space"
    },
    {
        artist: "Thomas Oram",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space",
        website: "www.idyllerei.de"
    },
    {
        artist: "Leon Skok",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space"
    },
    {
        artist: "Selcan Turin",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space"
    },
    {
        artist: "Nilüfer \"Lili\" Yildirim",
        art: ["IN/EXCLUSIVE ARTS"],
        area: "HYCP Veddel Space",
        website: "www.idyllerei.de"
    },

    // --------------------------------------------------
    // 02 | IMMANUELKIRCHE
    // --------------------------------------------------

    {
        artist: "Lord Nicolaus Dinter",
        art: ["Photographie", "Painting"],
        area: "Immanuelkirche",
        website: "www.nicolaus-dinter.com",
        socialMedia: ["@dinternicolaus"]
    },

    {
        artist: "Kristof",
        art: ["Gruppenausstellung \"art-help-healing\""],
        area: "Immanuelkirche"
    },
    {
        artist: "Sandra",
        art: ["Gruppenausstellung \"art-help-healing\""],
        area: "Immanuelkirche"
    },
    {
        artist: "Martin",
        art: ["Gruppenausstellung \"art-help-healing\""],
        area: "Immanuelkirche"
    },
    {
        artist: "Michael",
        art: ["Gruppenausstellung \"art-help-healing\""],
        area: "Immanuelkirche"
    },
    {
        artist: "Tanja",
        art: ["Gruppenausstellung \"art-help-healing\""],
        area: "Immanuelkirche"
    },
    {
        artist: "Christina",
        art: ["Gruppenausstellung \"art-help-healing\""],
        area: "Immanuelkirche"
    },
    {
        artist: "Rado",
        art: ["Gruppenausstellung \"art-help-healing\""],
        area: "Immanuelkirche"
    },

    // --------------------------------------------------
    // 03 | KÜNSTLERHAUS GEORGSWERDER
    // --------------------------------------------------

    {
        artist: "Michael Eicks",
        art: ["Fotografie"],
        area: "Künstlerhaus Georgswerder"
    },
    {
        artist: "Petra Hoppe",
        art: ["Fotografie", "Federleicht (und Steinschwer)"],
        area: "Künstlerhaus Georgswerder"
    },

    // --------------------------------------------------
    // 04 | WINDMÜHLE JOHANNA
    // --------------------------------------------------

    {
        artist: "Katharina Einhoff",
        art: ["Zeichnung", "Illustration"],
        area: "Windmühle Johanna",
        email: "katharinaeinhoff@gmx.de"
    },

    // --------------------------------------------------
    // 05 | ÄLTESTES WOHNHAUS WILHELMSBURG
    // --------------------------------------------------

    {
        artist: "Katarina Jensen - Piselotten",
        art: ["Bilder", "Modelabel"],
        area: "Ältestes Wohnhaus Wilhelmsburg",
        socialMedia: ["@katarinajensenpiselotten"]
    },

    // --------------------------------------------------
    // 06 | ATELIERGEMEINSCHAFT KREISKOMPLEX
    // --------------------------------------------------

    {
        artist: "Norman Heck",
        art: ["gestrickte Objekte"],
        area: "Ateliergemeinschaft Kreiskomplex"
    },
    {
        artist: "Freya Sarge",
        art: ["Fotografie"],
        area: "Ateliergemeinschaft Kreiskomplex"
    },
    {
        artist: "Insa",
        art: ["Multimedia Basteleien"],
        area: "Ateliergemeinschaft Kreiskomplex"
    },
    {
        artist: "mk539",
        art: ["Druckgrafik"],
        area: "Ateliergemeinschaft Kreiskomplex"
    },
    {
        artist: "mp4zu3",
        art: ["Videoinstallation"],
        area: "Ateliergemeinschaft Kreiskomplex"
    },
    {
        artist: "Eike Unrat",
        art: [
            "Skulptur",
            "Zeichnung",
            "Malerei",
            "Collage",
            "Installation"
        ],
        area: "Ateliergemeinschaft Kreiskomplex"
    },
    {
        artist: "Michael Schwarze",
        art: ["Fotografie", "Videokunst"],
        area: "Ateliergemeinschaft Kreiskomplex",
        website: "www.michaelschwarze.com",
        socialMedia: ["@michael.schwarze"]
    },
    {
        artist: "Jonas Gallenkamp",
        art: ["Malerei"],
        area: "Ateliergemeinschaft Kreiskomplex | Hidden Gallery",
        website: "www.jonasgallenkamp.de"
    },
    {
        artist: "Mika Grunwaldt",
        art: ["Photography"],
        area: "Ateliergemeinschaft Kreiskomplex | Hidden Gallery",
        website: "www.mikagrunwaldt.com",
        socialMedia: ["@mikagrunwaldt"]
    },

    // --------------------------------------------------
    // 07 | DEICHDIELE
    // --------------------------------------------------

    {
        artist: "Paulina Ohl",
        art: ["Fotografie"],
        area: "Deichdiele",
        email: "pauli.ohl@web.de",
        socialMedia: ["@paulinaohl"]
    },
    {
        artist: "Nico Manozkow",
        art: ["Fotografie"],
        area: "Deichdiele",
        email: "nicomanozkow@gmail.com",
        socialMedia: ["@manozkow"]
    },

    // --------------------------------------------------
    // 08 | KERAMIKWERKSTATT
    // --------------------------------------------------

    {
        artist: "Anqi Lyu",
        art: ["handgemachte Keramikwaren"],
        area: "Keramikwerkstatt",
        email: "hallo@studioanqi.de",
        socialMedia: ["@angellv1920"]
    },

    // --------------------------------------------------
    // 09 | ZINNWERKE E.V.
    // --------------------------------------------------

    {
        artist: "Nicole Rzepka und Michael Heim - Atelier Samtmammut",
        art: ["Druckkunst"],
        area: "Zinnwerke e.V."
    },
    {
        artist: "Berenice Möller",
        art: ["Textilkunst"],
        area: "Zinnwerke e.V.",
        website: "www.studioboldo.com",
        email: "berenice@studioboldo.com",
        socialMedia: ["@studioboldo"]
    },
    {
        artist: "Martin Schramm",
        art: ["Kollagen"],
        area: "Zinnwerke e.V."
    },
    {
        artist: "Katja Marx",
        art: ["Holzschnitte"],
        area: "Zinnwerke e.V."
    },
    {
        artist: "Tattoo Atelier",
        art: ["Tattoo", "Flashday"],
        area: "Zinnwerke e.V.",
        socialMedia: [
            "@guffel_tattoo",
            "@Theos_tats",
            "@help.artwork",
            "@raphitattoo"
        ]
    },

    // --------------------------------------------------
    // 10 | ATELIER FREISTIL
    // --------------------------------------------------

    {
        artist: "Atelier Freistil",
        art: ["verschiedene Kunstformen"],
        area: "Atelier Freistil",
        website: "www.atelier-freistil.de",
        socialMedia: ["@atelierfreistil"]
    },

    // --------------------------------------------------
    // 11 | ATELIERHOF
    // --------------------------------------------------

    {
        artist: "Bente Wolke",
        art: ["Bildobjekte", "Malerei"],
        area: "Atelierhof | Garten",
        website: "www.bente-wolke.de",
        email: "mail@bente-wolke.de",
        socialMedia: ["@bente_wolke"]
    },
    {
        artist: "Mareike Alexander",
        art: ["Kostümgestaltung", "Textilkunst"],
        area: "Atelierhof | Hinterhof | 1. Stock",
        email: "fraumareikealexander@gmail.com",
        socialMedia: ["@almamaalalma"]
    },
    {
        artist: "Lotte Bräuning",
        art: ["Kinderbuchillustration"],
        area: "Atelierhof | Hinterhof | 1. Stock",
        website: "www.lottebraeuning.de",
        email: "post@lottebraeuning.de",
        socialMedia: ["@lottebraeuning_illustration"]
    },
    {
        artist: "Nikita Bürger",
        art: ["Zeichnung", "Illustration"],
        area: "Atelierhof | Hinterhof | 1. Stock",
        socialMedia: ["@nikita.buerger"]
    },
    {
        artist: "Lena Galitsch",
        art: ["Webdesign", "Experimente"],
        area: "Atelierhof | Hinterhof | 1. Stock",
        website: "www.galitsch.de"
    },
    {
        artist: "Karin Kraemer",
        art: ["Keramik", "Zeichnung"],
        area: "Atelierhof | Hinterhof | 1. Stock",
        socialMedia: ["@karin__kraemer"]
    },
    {
        artist: "Gosia Machon",
        art: ["Malerei"],
        area: "Atelierhof | Hinterhof | 1. Stock",
        website: "www.gosiamachon.de"
    },

    // --------------------------------------------------
    // 12 | VITACURARE KUNSTLABOR
    // --------------------------------------------------

    {
        artist: "Kunst-Gruppe und Kreativgruppe",
        art: ["Werke der Klientinnen und Klienten"],
        area: "Vitacurare Kunstlabor"
    },
    {
        artist: "Klaas Goerges",
        art: ["Malerei"],
        area: "Vitacurare Kunstlabor",
        website: "www.vitacurare.de",
        email: "kg@vitacurare.de"
    },
    {
        artist: "Nathalie Hallmann",
        art: ["Makramee für Anfänger:innen"],
        area: "Vitacurare Kunstlabor",
        website: "www.vitacurare.de",
        email: "nah@vitacurare.de"
    },

    // --------------------------------------------------
    // 13 | RATTENLOCH 4.0
    // --------------------------------------------------

    {
        artist: "Ilo Toivio",
        art: [
            "crochet installation with audio",
            "drop-in mending workshop",
            "Illustration",
            "Installation"
        ],
        area: "Rattenloch 4.0"
    },
    {
        artist: "Marlene Busch",
        art: [
            "crochet installation with audio",
            "drop-in mending workshop",
            "Illustration",
            "Installation"
        ],
        area: "Rattenloch 4.0"
    },
    {
        artist: "Kuno Seltmann",
        art: [
            "crochet installation with audio",
            "drop-in mending workshop",
            "Illustration",
            "Installation"
        ],
        area: "Rattenloch 4.0"
    },

    // --------------------------------------------------
    // 14 | DER GEHEIMNISVOLLE DACHBODEN
    // --------------------------------------------------

    {
        artist: "Jürgen Weber",
        art: ["3d Collagen", "Maschinen", "Zeichnungen"],
        area: "Der geheimnisvolle Dachboden",
        email: "juergenweber.zeitmomente@gmail.com",
        socialMedia: ["@zeitmomente_in_3d"]
    },

    // --------------------------------------------------
    // 15 | HOFA - HONIGFABRIK
    // --------------------------------------------------

    {
        artist: "Tamara Niederweis - La Graffeuse",
        art: ["Urban Art Malerei"],
        area: "HoFa - Kommunikationszentrum Honigfabrik | Malerei Atelier",
        email: "tamara.niederweis@gmail.com",
        socialMedia: ["@lagraffeusearts"]
    },
    {
        artist: "Leonor Duque",
        art: ["Malerei"],
        area: "HoFa - Kommunikationszentrum Honigfabrik | Malerei Atelier",
        email: "leonorrecio.duque@gmail.com",
        socialMedia: ["@leonorduque_"]
    },
    {
        artist: "Johanna Sarah Schmidt und Ana Luisa Amaral Lucena - ClayGround",
        art: ["Keramik"],
        area: "HoFa - Kommunikationszentrum Honigfabrik"
    },
    {
        artist: "Julio Celis Rodriguez",
        art: ["Musik"],
        area: "HoFa - Kommunikationszentrum Honigfabrik | Musik Atelier",
        email: "celiselgato@gmail.com",
        socialMedia: ["@celiselgato"]
    },

    // --------------------------------------------------
    // 16 | ATELIERHAUS 23 | 2. ETAGE
    // --------------------------------------------------

    {
        artist: "Thomas Kleine",
        art: ["Papierschnitt", "Monotypie", "Installation"],
        area: "Atelierhaus 23 | 2. Etage",
        website: "www.thomas-kleine.de",
        email: "mail@thomas-kleine.de",
        socialMedia: ["@thomaskleinestudio"]
    },
    {
        artist: "Katja Sattelkau - Atelier 90°",
        art: ["Malerei", "Objekte"],
        area: "Atelierhaus 23 | 2. Etage",
        website: "www.katjasattelkau.de",
        socialMedia: ["@atelier_90_grad"]
    },
    {
        artist: "Kristin Strauß - Scheinwerfer Dance Center",
        art: ["Tanz"],
        area: "Atelierhaus 23 | 2. Etage",
        website: "www.scheinwerfer-dancecenter.de",
        socialMedia: ["@scheinwerfer_dance_center"]
    },
    {
        artist: "Elke Ehninger",
        art: ["Collage"],
        area: "Atelierhaus 23 | 2. Etage",
        website: "www.elke-ehninger.de",
        email: "mail@elke-ehninger.de"
    },
    {
        artist: "Jann Kaune",
        art: ["Ölmalerei"],
        area: "Atelierhaus 23 | 2. Etage",
        email: "info@kaune-online.de"
    },
    {
        artist: "Ulrich Mertens",
        art: ["visual arts", "Beauty of Wind"],
        area: "Atelierhaus 23 | 2. Etage"
    },
    {
        artist: "Valerie Wagner",
        art: ["Fotografie", "Linoldruck"],
        area: "Atelierhaus 23 | 2. Etage",
        socialMedia: ["@valeriewagner_photography"]
    },

    // --------------------------------------------------
    // 16 | ATELIERHAUS 23 | 1. ETAGE
    // --------------------------------------------------

    {
        artist: "Katharina Bick",
        art: ["Malerei", "Zeichnung"],
        area: "Atelierhaus 23 | 1. Etage",
        email: "katharina.bick@web.de"
    },
    {
        artist: "Claudia Eschborn - books and photographs",
        art: ["Fotografie", "Buchbinderei"],
        area: "Atelierhaus 23 | 1. Etage",
        website: "www.claudiaeschborn.de",
        socialMedia: ["@claudiaeschborn2404"]
    },
    {
        artist: "Stephanie Krengel",
        art: ["Malerei"],
        area: "Atelierhaus 23 | 1. Etage",
        email: "skrengel@online.de",
        socialMedia: ["@stephanie_krengel"]
    },
    {
        artist: "Catalina González González",
        art: ["film", "drawing", "text"],
        area: "Atelierhaus 23 | 1. Etage",
        socialMedia: ["@gonzalezgonzalezacostalopez"]
    },
    {
        artist: "Katharina Langer",
        art: ["Malerei", "Siebdruck"],
        area: "Atelierhaus 23 | 1. Etage",
        website: "www.katharinalanger.de",
        socialMedia: ["@Katharinalangerstudio"]
    },
    {
        artist: "Claire Ewbank",
        art: ["Malerei"],
        area: "Atelierhaus 23 | 1. Etage",
        socialMedia: ["@claire.ewbank"]
    },

    // --------------------------------------------------
    // 16 | ATELIERHAUS 23 | ERDGESCHOSS
    // --------------------------------------------------

    {
        artist: "Carla Binter",
        art: [
            "Wandbilder",
            "charakterstarke keramische Einzelstücke"
        ],
        area: "Atelierhaus 23 | Erdgeschoss",
        website: "www.keramik-carla-binter.de",
        email: "info@keramik-carla-binter.de"
    },
    {
        artist: "Melanie Cramer - vonLani",
        art: ["Schmuck", "Accessoires"],
        area: "Atelierhaus 23 | Erdgeschoss",
        website: "www.vonlani.de",
        socialMedia: ["@von.lani"]
    },
    {
        artist: "Frieder Falk",
        art: ["Zeichnung", "Objekt"],
        area: "Atelierhaus 23 | Erdgeschoss",
        website: "www.friederfalk.de",
        email: "fcfalk@posteo.de",
        socialMedia: ["@falk_frieder"]
    },
    {
        artist: "Sabine Hahn-Nicol",
        art: ["Bildhauerei"],
        area: "Atelierhaus 23 | Erdgeschoss",
        email: "sabine.hahn-nicol@hamburg.de"
    },
    {
        artist: "Capoeira",
        art: ["Fitness", "Kampf", "Rhythmus"],
        area: "Atelierhaus 23 | Erdgeschoss",
        website: "www.capoeira-hamburg-sued.org",
        socialMedia: ["@capoeira_angola_hamburg_sued"]
    },
    {
        artist: "Martin Graf - edition8x8",
        art: ["Druckgrafik", "Bastelbögen", "Heftchen"],
        area: "Atelierhaus 23 | Erdgeschoss | Ateliergemeinschaft",
        website: "www.edition8x8.de",
        email: "martin.graf@edition8x8.de"
    },
    {
        artist: "Miriam Elze",
        art: ["Illustration"],
        area: "Atelierhaus 23 | Erdgeschoss | Ateliergemeinschaft",
        website: "www.miriamelze.de",
        email: "illustration@miriamelze.de",
        socialMedia: ["@miriamelze_illustration"]
    },

    // --------------------------------------------------
    // 17 | GALERIE 23 | KAFFEELIEBE
    // --------------------------------------------------

    {
        artist: "Stephanie Krengel",
        art: ["Malerei und mehr"],
        area: "Galerie 23 | Kaffeeliebe",
        email: "skrengel@online.de",
        socialMedia: ["@stephanie_krengel"]
    }
];

export const neighborhoodData: NeighborhoodData[] = [
    {
        name: "Veddel",
        locations: [
            {
                name: "HYCP VEDDEL SPACE",
                adresse: "Sieldeich 36, 20539 Hamburg",
                lat: 53.52682,
                lng: 10.02827,
                artists: [{ name: "Gruppenausstellung local artists" }]
            },
            {
                name: "IMMANUELKIRCHE",
                adresse: "Wilhelmsburger Straße 73, 20539 Hamburg",
                lat: 53.525589,
                lng: 10.017181,
                artists: [{ name: "Lord Nikolaus" }]
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
                artists: [{ name: "Valérie Wagner" }]
            },
            {
                name: "WINDMÜHLE JOHANNA",
                adresse: "Schönenfelder Straße 99a, 21109 Hamburg",
                lat: 53.49982,
                lng: 10.02316,
                artists: [
                    { name: "Die Müller" },
                    { name: "Katharina Einhoff" },
                    { name: "kleiner Kunsthandwerkermarkt" }
                ]
            },
            {
                name: "ÄLTESTES WOHNHAUS WILHELMSBURG",
                adresse: "Schönenfelder Straße 33, 21109 Hamburg",
                lat: 53.503992,
                lng: 10.015822,
                artists: [{ name: "Piselotten | Katarina Jensen" }]
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
                artists: [{ name: "Gemeinschaftsausstellung" }]
            },
            {
                name: "ATELIERGEM. KREISKOMPLEX",
                adresse: "Stenzelring 17, 21107 Hamburg",
                lat: 53.5191733,
                lng: 10.0066839,
                artists: [
                    { name: "Norman Heck" },
                    { name: "Freya Sarge" },
                    { name: "Insa" },
                    { name: "mk539" },
                    { name: "mp4zu3" },
                    { name: "Eike Unrat" }
                ]
            },
            {
                name: "ATELIERHAUS 23",
                adresse: "Am Veringhof 23a, 21107 Hamburg",
                lat: 53.514650,
                lng: 9.983862,
                artists: [
                    { name: "Capoeira Angola Hamburg Süd" },
                    { name: "Carla Binter" },
                    { name: "Catalina González González" },
                    { name: "Claire Suliman" },
                    { name: "Claudia Eschborn" },
                    { name: "Elke Ehninger" },
                    { name: "Frieder Falk" },
                    { name: "Jann Kaune" },
                    { name: "Katharina Langer" },
                    { name: "Katja Sattelkau" },
                    { name: "Kristin Strauß" },
                    { name: "Martin Graf" },
                    { name: "Melanie Cramer" },
                    { name: "Michael Schwarze" },
                    { name: "Miriam Elze" },
                    { name: "Sabine Hahn-Nicol" },
                    { name: "Stephanie Krengel" },
                    { name: "Thomas Kleine" },
                    { name: "Katharina Bick" }
                ]
            },
            {
                name: "ATELIERHOF",
                adresse: "Veringstraße 22, 21107 Hamburg",
                lat: 53.51644,
                lng: 9.98766,
                artists: [
                    { name: "Bente Wolke" },
                    { name: "Mareike Alexander" },
                    { name: "Lotte Bräuning" },
                    { name: "Nikita Bürger" },
                    { name: "Lena & Galitsch" },
                    { name: "Karin Kraemer" },
                    { name: "Gosia Machon" }
                ]
            },
            {
                name: "DACHBODEN",
                adresse: "Karl-Kunert-Straße 3, 21107 Hamburg",
                lat: 53.518835,
                lng: 9.983836,
                artists: [{ name: "Jürgen Weber" }]
            },
            {
                name: "DEICHDIELE",
                adresse: "Veringstraße 156, 21107 Hamburg",
                lat: 53.505358,
                lng: 9.98618,
                artists: [
                    { name: "Nico Manozkow" },
                    { name: "Paulina Ohl" }
                ]
            },
            {
                name: "HIDDEN GALLERY",
                adresse: "Am Veringhof 23, 21107 Hamburg",
                lat: 53.514917,
                lng: 9.983862,
                artists: [
                    { name: "Jonas Gallenkamp" },
                    { name: "Mika Grunwaldt" }
                ]
            },
            {
                name: "KERAMIKWERKSTATT",
                adresse: "Neuhöfer Straße 23, Puhsthof, 21107 Hamburg",
                lat: 53.5103,
                lng: 9.98551,
                artists: [{ name: "Anqi Lyu" }]
            },
            {
                name: "HONIGFABRIK",
                adresse: "Industriestraße 125–131, 21107 Hamburg",
                lat: 53.515877,
                lng: 9.982554,
                artists: [
                    { name: "Johanna Sarah Schmidt" },
                    { name: "Ana Luisa Amaral Lucena" },
                    { name: "Julio Celis Rodriguez" },
                    { name: "Leonor Duque" },
                    { name: "Tamara Niederweis" }
                ]
            },
            {
                name: "RATTENLOCH",
                adresse: "Fährstraße 85, 21107 Hamburg",
                lat: 53.516586,
                lng: 9.984074,
                artists: [
                    { name: "Ilo Toivio" },
                    { name: "Kuno Seltmann" },
                    { name: "Marlene Busch" }
                ]
            },
            {
                name: "VITACURARE",
                adresse: "Sanitasstraße 10, 21107 Hamburg",
                lat: 53.5155646,
                lng: 9.9862596,
                artists: [
                    { name: "Klaas Goerges, vitaCurare" },
                    { name: "Nathalie Hallmann" }
                ]
            },
            {
                name: "ZINNWERKE",
                adresse: "Am Veringhof 7, 21107 Hamburg",
                lat: 53.513175,
                lng: 9.984564,
                artists: [
                    { name: "Berenice Möller" },
                    { name: "Nicole Rzepka" },
                    { name: "Michael Heim" },
                    { name: "TAK" },
                    { name: "Weitere Gastkünstler" }
                ]
            }
        ]
    }
];

export const flyerData = {
    label: "Programm/Flyer 2026",
    href: flyerPdf
};

