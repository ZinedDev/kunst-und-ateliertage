import {AtSign} from "lucide-react";
import {getMoinMailto} from "../../../utils/email.ts";
import {FacebookIcon, InstagramIcon} from "./SocialIconGlyphs.tsx";

export const socialMediaIcons = [
    {
        id: 'contact',
        icon: AtSign,
        url: getMoinMailto(),
        label: 'Contact',
    },
    {
        id: 'instagram',
        icon: InstagramIcon,
        url: 'https://www.instagram.com/kunst_und_ateliertage/',
        label: 'Instagram',
    },
    {
        id: 'facebook',
        icon: FacebookIcon,
        url: 'https://www.facebook.com/kunstundateliertage/',
        label: 'Facebook',
    },
]
