export function decodeEmail(encoded: string): string {
    try {
        if (typeof atob === "function") {
            return atob(encoded);
        }
        if (typeof globalThis !== "undefined" && typeof globalThis.atob === "function") {
            return globalThis.atob(encoded);
        }
    } catch {
        // fallback
    }
    return "";
}

export function getEmailLink(encoded: string): string {
    const email = decodeEmail(encoded);
    return email ? `mailto:${email}` : "#";
}

// Base64 encoded email addresses to prevent scraper detection in bundle
export const MOIN_EMAIL_ENCODED = "bW9pbkBrdW5zdHVuZGF0ZWxpZXJ0YWdlLmRl";
export const INFO_EMAIL_ENCODED = "aW5mb0BrdW5zdHVuZGF0ZWxpZXJ0YWdlLmRl";

export const getMoinEmail = (): string => decodeEmail(MOIN_EMAIL_ENCODED);
export const getMoinMailto = (): string => getEmailLink(MOIN_EMAIL_ENCODED);
export const getInfoEmail = (): string => decodeEmail(INFO_EMAIL_ENCODED);
export const getInfoMailto = (): string => getEmailLink(INFO_EMAIL_ENCODED);
