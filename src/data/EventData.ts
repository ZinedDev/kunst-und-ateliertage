// ProgramData.ts

// ============================================================
// TYPES
// ============================================================

export type ProgramCategory =
    | "PERFORMANCE_WORKSHOP"
    | "BILDERBUCHKINO"
    | "CONCERT";


export type ProgramTime = {
    startTime: string;
    endTime?: string;
};


export type ProgramOccurrence = {
    // ISO format: YYYY-MM-DD
    date: string;

    // Supports multiple sessions on the same day.
    times: ProgramTime[];
};


export type ProgramLocation = {
    venue: string;
    room?: string;
    address: string;
    neighborhood: string;
};


export type ProgramEntry = {
    id: string;

    category: ProgramCategory;

    // Name/title of the event.
    what: string;

    // Artist, organization, instructor, author etc.
    who: string;

    // Content description of the event.
    description: string;

    // Separate occurrences allow Saturday and Sunday
    // to be filtered independently.
    occurrences: ProgramOccurrence[];

    where: ProgramLocation;

    // Practical information.
    age?: string;
    price?: string;
    registration?: string;
    accessibility?: string;
};


// ============================================================
// PERFORMANCES & WORKSHOPS
// ============================================================

export const performancesAndWorkshops: ProgramEntry[] = [
    {
        id: "klang-up",

        category: "PERFORMANCE_WORKSHOP",

        what: "\"Klang Up\": Upcycling Musikinstrumentebau",

        who: "Julio Celis Rodriguez",

        description:
            "Gemeinsam werden Musikinstrumente aus wiederverwendeten Alltagsmaterialien wie Karton und Plastik gebaut. Der Workshop verbindet Kreativität und Spaß mit einem Bewusstsein für die Wiederverwendung von Alltagsobjekten. Die Instrumente sind an das Alter und die handwerklichen Fähigkeiten der Kinder angepasst. Zum Abschluss werden die selbstgebauten Instrumente bei einem kleinen gemeinsamen Konzert ausprobiert.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "10:30",
                        endTime: "12:00"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "10:30",
                        endTime: "12:00"
                    }
                ]
            }
        ],

        where: {
            venue: "HoFa - Kommunikationszentrum Honigfabrik",
            address: "Industriestr. 125-131",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "4-7 Jahre",

        price: "Eintritt auf Spende, Spendenempfehlung 10 €",

        accessibility: "Überwiegend barrierefrei"
    },


    {
        id: "cyanotypie",

        category: "PERFORMANCE_WORKSHOP",

        what: "Cyanotypie - Workshop",

        who: "Katja Sattelkau | Atelier 90 Grad",

        description:
            "Ein Workshop zur Cyanotypie, einem historischen fotografischen Druckverfahren von 1842. Mit Pflanzen, Objekten und Sonnenlicht entstehen individuelle blaue Kunstwerke. Es sind keine Vorkenntnisse erforderlich. Der Workshop findet nur bei Sonnenschein statt.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "12:00",
                        endTime: "13:30"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "12:00",
                        endTime: "13:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage",
            address: "Am Veringhof 23a",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 10 Jahren",

        price: "20 € inklusive Material",

        registration:
            "Anmeldung per E-Mail an kontakt@atelier90grad.de erforderlich. Maximal 6 Plätze. Der Workshop findet nur bei Sonnenschein statt.",

        accessibility: "Barrierefrei"
    },


    {
        id: "tavoli",

        category: "PERFORMANCE_WORKSHOP",

        what: "Tavoli",

        who: "Katharina Einhoff",

        description:
            "TAVOLI ist ein kreativer Ort für neugierige Hände und Gedanken. Farben, Naturmaterialien und Saatgut dienen als Inspiration, um mit Formen zu experimentieren, zu falten, zu zeichnen und einzigartige Samenpäckchen zu gestalten. Dabei entstehen persönliche Fundstücke zum Mitnehmen, Verschenken oder Bewahren.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "15:00",
                        endTime: "17:00"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "15:00",
                        endTime: "17:00"
                    }
                ]
            }
        ],

        where: {
            venue: "Windmühle Johanna",
            address: "Schönenfelder Straße 99a",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 6 Jahren",

        price: "Eintritt auf Spende",

        registration: "Keine Anmeldung erforderlich. Komm spontan vorbei."
    },


    {
        id: "schnuppertoepfern",

        category: "PERFORMANCE_WORKSHOP",

        what: "Schnuppertöpfern",

        who: "Anqi Lyu",

        description:
            "Nach einer etwa 30-minütigen Einführung können die Teilnehmenden eine Stunde lang mit einem Kilogramm Ton arbeiten. Es können kleine Gefäße, Skulpturen, Tiere und andere Objekte entstehen. Wer die gefertigten Stücke behalten möchte, kann sie gegen Aufpreis brennen lassen; eine Glasurauswahl ist dabei inklusive.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "13:30",
                        endTime: "15:00"
                    },
                    {
                        startTime: "16:00",
                        endTime: "17:30"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "10:30",
                        endTime: "12:00"
                    },
                    {
                        startTime: "14:00",
                        endTime: "15:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Keramikwerkstatt",
            room: "Puhsthof, Haus 5, Erdgeschoss",
            address: "Neuhöfer Str. 23",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 6 Jahren, unter 10 Jahren mit Begleitung",

        price:
            "9 € Materialpauschale für 1 kg Ton. Optional 10 € Aufpreis für Brennen inklusive Glasurauswahl.",

        registration:
            "Anmeldung per E-Mail erforderlich. Maximal 6 Personen.",

        accessibility: "Barrierefrei"
    },


    {
        id: "takomat",

        category: "PERFORMANCE_WORKSHOP",

        what: "Der TAK'omat",

        who: "TAK Wilhelmsburg",

        description:
            "Der TAK'omat wird als erster Theaterautomat der Welt vorgestellt. Nach Einwurf von 2 Euro öffnet sich der Vorhang für eine dreiminütige Überraschungs-Live-Performance. Möglich sind unter anderem Musik, Comedy, Poetry und Clownerie. Gleichzeitig werden Performer*innen gesucht, die selbst im Automaten auftreten möchten.",

        occurrences: [
            {
                date: "2026-09-19",
                times: []
            }
        ],

        where: {
            venue: "Zinnwerke e.V.",
            room: "TAK-Büro in den Zinnwerken",
            address: "Am Veringhof 7",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 18 Jahren",

        price: "2 € pro 3-minütiger Performance",

        registration:
            "Für Besucher*innen keine Anmeldung angegeben. Performer*innen können sich per E-Mail anmelden.",

        accessibility: "Barrierefrei"
    },


    {
        id: "capoeira",

        category: "PERFORMANCE_WORKSHOP",

        what: "Level Up - Capoeira Workshop",

        who: "Capoeira Angola Hamburg Süd",

        description:
            "Capoeira verbindet Kampfkunst, Akrobatik und fließende Bewegungen zu einem vielseitigen Ganzkörpertraining. Trainiert werden Kraft, Beweglichkeit, Koordination, Ausdauer und Reaktionsfähigkeit im Austausch mit einem Partner und ohne Leistungsdruck. Im Workshop werden grundlegende Techniken und Bewegungsabläufe vermittelt sowie Körpergefühl, Balance und Kontrolle entwickelt. Ergänzt wird das Training durch Capoeira-Rhythmen, Percussion und Gesang. Am Freitag- und Samstagabend sowie am Sonntagnachmittag finden traditionelle Rodas mit Livemusik statt. Das Training wird von erfahrenen Trainer*innen und Gastdozenten aus Brasilien, Athen und Lissabon begleitet.",

        occurrences: [
            {
                date: "2026-09-18",
                times: [
                    {
                        startTime: "15:00"
                    }
                ]
            },
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "11:00",
                        endTime: "22:00"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "11:00",
                        endTime: "15:00"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "Erdgeschoss",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 12 Jahren",

        price:
            "Zwischen 20 € und 100 €, abhängig vom Umfang der Teilnahme von Freitag bis Sonntag",

        registration: "Keine Anmeldung erforderlich. Komm spontan vorbei.",

        accessibility: "Barrierefrei"
    },


    {
        id: "tanzpraesentation",

        category: "PERFORMANCE_WORKSHOP",

        what: "Tanzpräsentation",

        who: "Scheinwerfer Dance Center | Kristin Strauß",

        description:
            "Verschiedene Tanzklassen des Scheinwerfer Dance Centers präsentieren kleine Choreographien. Besucher*innen können spontan vorbeikommen, zuschauen und unterschiedliche Formen des Tanzes kennenlernen.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "15:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        },

        price: "Eintritt frei zum Zuschauen",

        registration: "Keine Anmeldung erforderlich.",

        accessibility: "Barrierefrei"
    },


    {
        id: "clayground",

        category: "PERFORMANCE_WORKSHOP",

        what: "ClayGround - Play with Clay",

        who: "Johanna Sarah Schmidt & Ana Luisa Amaral Lucena",

        description:
            "Eine offene Werkstatt zum freien Arbeiten mit Ton. Die Teilnehmenden können ausprobieren, wohin das Material und die eigenen Ideen sie führen. Bei Bedarf geben die Künstlerinnen Tipps und Anregungen.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "17:00"
                    }
                ]
            },
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "17:00"
                    }
                ]
            }
        ],

        where: {
            venue: "HoFa - Kommunikationszentrum Honigfabrik",
            address: "Industriestr. 125-131",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 18 Jahren",

        price: "Eintritt auf Spende",

        accessibility: "Überwiegend barrierefrei"
    },


    {
        id: "stimm-sprechworkshop",

        category: "PERFORMANCE_WORKSHOP",

        what: "Stimm- & Sprechworkshop",

        who: "Paula Zamora | TAK Wilhelmsburg",

        description:
            "Ein intensiver Stimm- und Sprechworkshop mit dem Ziel, Präsenz bewusst wahrzunehmen und die eigene Stimme zum Klingen zu bringen. Das kompakte Format findet im TAK-Büro mit maximal fünf Teilnehmenden statt.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "15:00",
                        endTime: "15:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Zinnwerke e.V.",
            room: "TAK-Büro in den Zinnwerken",
            address: "Am Veringhof 7",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 12 Jahren",

        price: "Eintritt auf Spende",

        registration:
            "Anmeldung per E-Mail an moin@tak-wilhelmsburg.de erforderlich. Maximal 5 Personen.",

        accessibility: "Barrierefrei"
    },


    {
        id: "community-dance",

        category: "PERFORMANCE_WORKSHOP",

        what: "Community Dance - Inklusives Tanzen",

        who: "Scheinwerfer Dance Center | Kristin Strauß",

        description:
            "Ein inklusiver Community-Dance-Workshop mit gemeinsamem Tanzen für alle Menschen.",

        occurrences: [
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "16:00"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 12 Jahren",

        price: "Eintritt auf Spende. SDC-Mitglieder tanzen frei.",

        accessibility: "Barrierefrei"
    },


    {
        id: "makramee",

        category: "PERFORMANCE_WORKSHOP",

        what: "Makramee",

        who: "Nathalie Hallmann",

        description:
            "Die Teilnehmenden können unter Anleitung ein eigenes Objekt mit der Technik des Makramees gestalten.",

        occurrences: [
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "14:00",
                        endTime: "17:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Vitacurare Kunstlabor",
            address: "Sanitasstr. 10",
            neighborhood: "HH-Wilhelmsburg"
        },

        price: "Eintritt auf Spende",

        registration: "Keine Anmeldung erforderlich. Komm spontan vorbei.",

        accessibility: "Barrierefreier Zugang über den Hof möglich"
    },


    {
        id: "mahl-workshop",

        category: "PERFORMANCE_WORKSHOP",

        what: "Mahl-Workshop",

        who: "Die Museumsmüller der Windmühle Johanna",

        description:
            "Der Workshop vermittelt Wissen und Praxis rund um den Weg vom Korn zum Mehl. In einer kleinen Gruppe wird gemeinsam mit den Müllern gemahlen, gesprochen und das entstandene Mehl eingetütet. Es gibt zwei jeweils 90-minütige Workshops mit maximal zehn Teilnehmenden.",

        occurrences: [
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "13:00",
                        endTime: "14:30"
                    },
                    {
                        startTime: "15:00",
                        endTime: "16:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Windmühle Johanna",
            address: "Schönenfelder Straße 99a",
            neighborhood: "HH-Wilhelmsburg"
        },

        age: "Ab 6 Jahren mit Erwachsenenbegleitung",

        price: "8 € inklusive 1 kg Mehl",

        registration:
            "Vorherige verbindliche Anmeldung mit vollständigem Namen und Alter per E-Mail an j.hecht@windmuehle-johanna.de erforderlich. Maximal 10 Personen pro Workshop. Mindestens 5 Teilnehmende."
    }
];


// ============================================================
// BILDERBUCHKINO
// ============================================================

export const bilderbuchkino: ProgramEntry[] = [
    {
        id: "haenky-megamonsterbanausen",

        category: "BILDERBUCHKINO",

        what: "Hänky und die vier Megamonsterbanausen",

        who: "Benjamin Gottwald | Bilderbuchkino mit Sabine von Eitzen",

        description:
            "Bilderbuchkino mit Sabine von Eitzen zum Buch „Hänky und die vier Megamonsterbanausen“. Autor und Illustrator Benjamin Gottwald ist persönlich anwesend. Die Veranstaltung gehört zu zwei exklusiven Bilderbuchkino-Vorführungen in Kooperation mit den Bücherhallen Hamburg und wird durch ein Meet & Greet ergänzt. Es besteht die Möglichkeit, Bücher signieren zu lassen.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "15:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage | Yoga Studio Jannika Kühn",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        },

        price: "Eintritt frei",

        accessibility: "Barrierefrei"
    },


    {
        id: "abenteuer-in-krabbelstadt",

        category: "BILDERBUCHKINO",

        what: "Abenteuer in Krabbelstadt",

        who: "Sandra Rutschi & Martina Liebig | Bilderbuchkino mit Sabine von Eitzen",

        description:
            "Bilderbuchkino mit Sabine von Eitzen zum Buch „Abenteuer in Krabbelstadt“. Autorin Sandra Rutschi ist persönlich anwesend; die Illustrationen stammen von Martina Liebig. Die Veranstaltung gehört zu zwei exklusiven Bilderbuchkino-Vorführungen in Kooperation mit den Bücherhallen Hamburg und wird durch ein Meet & Greet ergänzt. Es besteht die Möglichkeit, Bücher signieren zu lassen.",

        occurrences: [
            {
                date: "2026-09-19",
                times: [
                    {
                        startTime: "16:30"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhaus 23",
            room: "2. Etage | Yoga Studio Jannika Kühn",
            address: "Am Veringhof 23b",
            neighborhood: "HH-Wilhelmsburg"
        },

        price: "Eintritt frei",

        accessibility: "Barrierefrei"
    }
];


// ============================================================
// CONCERTS
// ============================================================

export const concerts: ProgramEntry[] = [
    {
        id: "chor-auftritt",

        category: "CONCERT",

        what: "Chor Auftritt",

        who: "Neuer Chor im Viertel",

        description:
            "Der kleine gemischte Chor wurde im April gegründet und wagt bei den Kunst- und Ateliertagen seinen ersten gemeinsamen Auftritt im Viertel. Zum Programm gehören unter anderem Stücke von Billy Joel, Kat Frankie und Bill Withers. Der Chor sucht außerdem noch Sängerinnen in allen Stimmlagen.",

        occurrences: [
            {
                date: "2026-09-20",
                times: [
                    {
                        startTime: "16:00"
                    }
                ]
            }
        ],

        where: {
            venue: "Atelierhof",
            address: "Veringstr. 22 im Hinterhof",
            neighborhood: "HH-Wilhelmsburg"
        },

        accessibility: "Barrierefrei"
    }
];


// ============================================================
// COMPLETE PROGRAM
// ============================================================

// Use this array when your components/filter should operate
// on all program entries regardless of category.

export const programEntries: ProgramEntry[] = [
    ...performancesAndWorkshops,
    ...bilderbuchkino,
    ...concerts
];


export function getCategoryBadgeStyle(cat: ProgramCategory): string {
    switch (cat) {
        case "PERFORMANCE_WORKSHOP":
            return "bg-blue-400/10 text-zinc-800 border-2 border-zinc-100";
        case "BILDERBUCHKINO":
            return "bg-amber-400/10 text-zinc-800 border-2 border-zinc-100";
        case "CONCERT":
            return "bg-purple-400/10 text-zinc-800 border-2 border-zinc-100";
        default:
            return "bg-orange-400/10 text-zinc-800 border-2 border-zinc-100";
    }
}

export const allEvents: ProgramEntry[] = [
    ...performancesAndWorkshops,
    ...bilderbuchkino,
    ...concerts
];
