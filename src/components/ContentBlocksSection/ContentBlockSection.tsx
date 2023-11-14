import {ContentBlocksList} from "./ContentBlocksList/ContentBlocksList";

import type {Block} from "./ContentBlocksList/ContentBlock/ContentBlock";

import "./ContentBlockSection.scss";

interface Props {
    title?: string,
    text?: string,
    blocks?: Block[]
}

export const ContentBlockSection = ({
                                        title,
                                        text,
                                        blocks
                                    }: Props) => {

    return (
        <section className="content-block-section-wrapper">
            <div className="content-block-section">
                {(title || text) && (
                    <div className="content-block-section__text-container">
                        {title && (
                            <h2 className="content-block-section__title">{title}</h2>
                        )}
                        {text && (
                            <p className="content-block-section__text">{text}</p>
                        )}
                    </div>
                )}
                {blocks && (
                    <ContentBlocksList blocks={blocks} />
                )}
            </div>
        </section>
    )
}