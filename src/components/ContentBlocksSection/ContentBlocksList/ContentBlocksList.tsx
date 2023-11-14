import {ContentBlock} from "./ContentBlock/ContentBlock";

import type {Block} from "./ContentBlock/ContentBlock";

import "./ContentBlocksList.scss";


interface Props {
    blocks: Block[]
}

export const ContentBlocksList = ({blocks}: Props) => {
    return (
        <div className="content-block-section__blocks-container">
            <div className="content-block-section__line"></div>
            <ul className="content-block-section__list">
                {blocks.map((block, index) => (
                    <ContentBlock block={block} key={index} />
                ))}
            </ul>
        </div>
    )
}