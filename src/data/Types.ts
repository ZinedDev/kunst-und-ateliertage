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