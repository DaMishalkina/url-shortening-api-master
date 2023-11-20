import {Link} from "react-router-dom";
import {ReactElement} from "react";

import {FacebookIcon} from "../svgs/FacebookIcon";
import {InstagramIcon} from "../svgs/InstagramIcon";
import {PinterestIcon} from "../svgs/PinterestIcon";
import {replaceSpaceWithUnderline} from "../../utils/replaceSpaceWithUnderline";
import {TwitterIcon} from "../svgs/TwitterIcon";

import "./Footer.scss";

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
        <footer className="footer">
            <div className="footer__content">
                <span className="footer__logo" >
                    {logo}
                </span>
                {navigationMenu && (
                    <section className="footer-navigation footer__navigation">
                        {Object.entries(navigationMenu).map(([navLinksTitle, navLinks]) => (
                            <div className="footer-nav-item footer-navigation__item" key={navLinksTitle}>
                                <p className="footer-nav-item__title">{navLinksTitle}</p>
                                <ul className="footer-nav-item__list">
                                    {navLinks.map((link) => (
                                        <Link
                                            className="footer-nav-item__link"
                                            key={link}
                                            to={`${replaceSpaceWithUnderline(navLinksTitle)}/${replaceSpaceWithUnderline(link)}`}
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
                    <section className="social-medias-section footer__social-medias">
                        {socialMedias.map(socialMedia => (
                            <Link
                                className="social-medias-section__link"
                                to={socialMedia.link}
                                key={socialMedia.title}
                            >
                                {SOCIAL_MEDIAS_ICONS[socialMedia.title.toLowerCase()]}
                            </Link>
                        ))}
                    </section>
                )}
            </div>
        </footer>
    )
}