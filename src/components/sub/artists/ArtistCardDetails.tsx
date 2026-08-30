import type {ArtistCardEntry} from "./ArtistCard.tsx";

interface ArtistCardDetailsProps {
    artist: ArtistCardEntry;
}

export default function ArtistCardDetails({artist}: ArtistCardDetailsProps) {
    const hasAdditionalInfo = (artist.art && artist.art.length > 0) ||
        artist.website ||
        (artist.socialMedia && artist.socialMedia.length > 0) ||
        artist.email;

    return (
        <>
            {/* Arts */}
            <h2 className="w-full text-center uppercase tracking-wider text-xs font-bold text-zinc-700">
                {artist.art?.join(" | ")}
            </h2>

            {/* Contact & Links */}
            {hasAdditionalInfo ? (
                <div className="flex flex-col items-center justify-center gap-0.5 text-xs text-zinc-600 w-full">
                    {artist.website && (
                        <a
                            href={artist.website.startsWith("http") ? artist.website : `https://${artist.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-blue-600 hover:underline break-all"
                        >
                            <span>{artist.website}</span>
                        </a>
                    )}

                    {artist.socialMedia && artist.socialMedia.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                            {artist.socialMedia.map((sm, idx) => {
                                const handle = sm.replace(/^@/, "");
                                const href = sm.startsWith("http") ? sm : `https://instagram.com/${handle}`;
                                return (
                                    <a
                                        key={idx}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-1.5 text-pink-600 hover:underline"
                                    >
                                        <span>{sm}</span>
                                    </a>
                                );
                            })}
                        </div>
                    )}

                    {artist.email && (
                        <a
                            href={`mailto:${artist.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-blue-600 hover:underline break-all"
                        >
                            <span>{artist.email}</span>
                        </a>
                    )}
                </div>
            ) : null}
        </>
    );
}
