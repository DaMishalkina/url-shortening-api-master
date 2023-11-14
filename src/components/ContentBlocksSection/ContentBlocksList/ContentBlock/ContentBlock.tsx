import "./ContentBlock.scss";


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
    return (
        <li className="content-block-item content-block-section__item">
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

