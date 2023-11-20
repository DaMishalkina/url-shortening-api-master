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
const IMAGES = import.meta.glob('@assets/*.{svg,png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' });
const isDesktopImageRight = (position = "right") => {
    return position === "right";
}

export const HeroSection = ({title, text, link, image}: Props) => {
    return (
        <section className={classNames("hero-section", isDesktopImageRight(image?.desktopPosition) && "hero-section--row-reverse")}>
            {image && (
                <div className="hero-section__image-container">
                    <img
                        className="hero-section__image"
                        src={IMAGES[`/src/assets/${image.name}.svg`]}
                        alt={image.name}
                    />
                </div>
            )}
            <div className="hero-section__text-container">
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