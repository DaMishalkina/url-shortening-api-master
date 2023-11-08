import classNames from "classnames";

import {CustomLink} from "../CustomLink/CustomLink";

import "./HeroSection.scss";



interface Props {
    title?: string,
    text?: string,
    link?: {
        to: string,
        label: string
    },
    image?: {
        desktopPosition?: string,
        name: string
    }
}

const isDesktopImageRight = (position = "right") => {
    return position === "right";
}

export const HeroSection = ({title, text, link, image}: Props) => {
    return (
        <section className="hero-section">
            {image && (
                <img
                    className={classNames(
                        isDesktopImageRight(image.desktopPosition) && "hero-section-image--right",
                        "hero-section-image",
                        "hero-section__image")}
                    src={`src/assets/${image.name}.svg`}
                    alt={image.name}
                />
            )}
            <div className="hero-section__container">
                {title && (
                    <h1 className="hero-section__title">{title}</h1>
                )}
                {text && (
                    <p className="hero-section__text">{text}</p>
                )}
                {link && (
                    <CustomLink link={link.to}>{link.label}</CustomLink>
                )}
            </div>
        </section>
    )
}