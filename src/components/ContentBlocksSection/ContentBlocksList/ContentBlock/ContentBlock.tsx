import {useRef, useLayoutEffect, useState} from "react";

import "./ContentBlock.scss";
import classNames from "classnames";


export type Block = {
    title?: string,
    text?: string,
    image?: {
        alt: string,
        src: string
    }
}

interface Props {
    block: Block
}

export const ContentBlock = ({block}: Props) => {
    const {title, text, image} = block;
    const ref = useRef<HTMLLIElement>(null);
    const [isTransitioned, setIsTransitioned] = useState(false);
    const onScroll = () => {
        if(ref.current){
            const topPos = ref.current.getBoundingClientRect().top;
            const scrollPos = window.scrollY;

            if (topPos < scrollPos) {
                setIsTransitioned(true);

            }
        }

    }
    useLayoutEffect(() => {

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)

    }, [])
    return (
        <li
            ref={ref}
            className={classNames(
                "content-block-item content-block-section__item",
                isTransitioned && "content-block-item--animated"
            )}
        >
            <div className="content-block-item__container">
                {image && (
                    <div className="content-block-item__image-container">
                        <img
                            className="content-block-item__image"
                            alt={image.alt}
                            src={image.src}
                        />
                    </div>
                )}
                {title && (
                    <p className="content-block-item__title">{title}</p>
                )}
                {text && (
                    <p className="content-block-item__text">{text}</p>
                )}
            </div>
        </li>
    )
}

