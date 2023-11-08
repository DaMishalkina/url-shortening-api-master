import {Link} from "react-router-dom";
import {ReactElement} from "react";

import {FacebookIcon} from "../svgs/FacebookIcon";
import {InstagramIcon} from "../svgs/InstagramIcon";
import {PinterestIcon} from "../svgs/PinterestIcon";
import {TwitterIcon} from "../svgs/TwitterIcon";



import {replaceSpaceWithUnderline} from "../../utils/replaceSpaceWithUnderline";

type SOCIAL_MEDIAS_ICONS_TYPE = { [key: string]: ReactElement }

const SOCIAL_MEDIAS_ICONS: SOCIAL_MEDIAS_ICONS_TYPE = {
    facebook: <FacebookIcon/>,
    instagram: <InstagramIcon/>,
    pinterest: <PinterestIcon/>,
    twitter: <TwitterIcon/>
}


interface Props {
    logo?: ReactElement
    navigationMenu?: {
        [key: string]: string[]
    },
    socialMedias?: {title: string, link: string}[]
}

export const Footer = ({navigationMenu, socialMedias, logo}: Props) => {
    return (
        <footer>
            <Link to="/" >
                {logo}
            </Link>
            {navigationMenu && (
                <section>
                    {Object.entries(navigationMenu).map(([navLinksTitle, navLinks]) => (
                        <div key={navLinksTitle}>
                            <p>{navLinksTitle}</p>
                            <ul>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link}
                                        to={replaceSpaceWithUnderline(link)}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            )}
            {socialMedias && (
                <section>
                    {socialMedias.map(socialMedia => (
                        <Link to={socialMedia.link} key={socialMedia.title}>
                            {SOCIAL_MEDIAS_ICONS[socialMedia.title.toLowerCase()]}
                        </Link>
                    ))}
                </section>
            )}
        </footer>
    )
}