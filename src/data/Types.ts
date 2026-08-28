export interface HeaderData {
    tagline: string;
    title: string;
    description: string;
}

export type SectionFacts = {
    label: string;
    value: string;
}

export type NoticeData = {
    title: string;
    text?: string;
    link?: {
        label: string;
        href: string;
    };
    titleClassName?: string;
    textClassName?: string;
}

export interface ArtistEntry {
    artist: string;
    art: string[];
    area: string;

    email?: string;
    socialMedia?: string[];
    website?: string;
}

export interface Location {
    name: string;
    adresse?: string | null;
    lat?: number | null;
    lng?: number | null;
}


export interface NeighborhoodData {
    name: string;
    locations: {
        name: string;
        adresse?: string | null;
        lat?: number | null;
        lng?: number | null;
        artists: ArtistEntry[];
    }[];
}