import {CustomLink} from "../CustomLink/CustomLink";

import "./ActionSection.scss";


interface Props {
    title?: string,
    link?: {
        to: string,
        label: string
    },
    bgImage?: {
        alt: string,
        srcSet: {
            mobile: string,
            desktop?: string
        }
    }
}

export const ActionSection = ({title, link, bgImage}: Props) => {
    return (
        <section className="action-section">
            <div className="action-section__container">
                {title && (
                    <h2 className="action-section__title">{title}</h2>
                )}
                {link && (
                    <CustomLink link={link.to}>{link.label}</CustomLink>
                )}
            </div>
            {bgImage && (
                <picture className="action-section__picture">
                    <source
                        srcSet={bgImage.srcSet.desktop}
                        media="(min-width: 1200px)"
                    />
                    <img
                        className="action-section__image"
                        src={bgImage.srcSet.mobile}
                        alt="Monitor with opened Email Window"
                    />
                </picture>
            )}
        </section>
    )
}