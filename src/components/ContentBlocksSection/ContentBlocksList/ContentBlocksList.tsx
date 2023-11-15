import {ContentBlock} from "./ContentBlock/ContentBlock";
import {useRef, useLayoutEffect, useState} from "react";

import type {Block} from "./ContentBlock/ContentBlock";

import "./ContentBlocksList.scss";
import classNames from "classnames";


interface Props {
    blocks: Block[]
}

export const ContentBlocksList = ({blocks}: Props) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [isTransitioned, setIsTransitioned] = useState(false);
    const onScroll = () => {
        if(listRef.current){
            const bottomPos = listRef.current.getBoundingClientRect().bottom;
            const scrollPos = window.scrollY;

            if (bottomPos < scrollPos) {
                setIsTransitioned(true);

            }
        }

    }
    useLayoutEffect(() => {

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)

    }, [])
    return (
        <div
            ref={listRef}
            className="content-block-section__blocks-container"
        >
            <div className={classNames(
                "blocks-line content-block-section__line",
                isTransitioned && "blocks-line--visible"
            )}></div>
            <ul className="content-block-section__list">
                {blocks.map((block, index) => (
                    <ContentBlock block={block} key={index} />
                ))}
            </ul>
        </div>
    )
}