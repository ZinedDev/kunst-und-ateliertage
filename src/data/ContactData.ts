import type { NoticeData} from "./Types.ts";
import {getMoinEmail, getMoinMailto} from "../utils/email.ts";

export const contactNotice: NoticeData = {
    title: "Kontakt",
    text: "PR-AG des Atelierhaus 23a",
    link: {
        label: getMoinEmail(),
        href: getMoinMailto()
    }
}
