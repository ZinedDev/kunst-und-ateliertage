

export default function ParticipationNotice() {

    return (
        <div>
            <div>
                <p className="text-4xl max-sm:text-2xl text-center font-bold uppercase tracking-[0.25em] text-green-700 "
                >
                    Wichtig!!!
                </p>
                <h2 className="mt-8 max-sm:mt-4 text-2xl max-sm:text-sm text-center font-semibold text-blue-700 ">
                    Gemeinsam sichtbar werden...
                </h2>
            </div>
            <p className="text-zinc-700 text-center xl:whitespace-nowrap">
               {"Die Veranstaltung lebt davon, dass alle Beteiligten mithelfen: \n " +
                "durch offene Türen, gute Informationen, geteilte Beiträge, " +
                "Plakate und persönliche Einladungen."}
            </p>
        </div>
    )
}