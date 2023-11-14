import "./ContentBlockSection.scss";

interface Props {
    title?: string,
    text?: string,
    blocks?: Block[]
}

type Block = {
    title?: string,
    text?: string,
    image?: {
        alt: string,
        src: string
    }
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
                    <div className="content-block-section__blocks-container">
                        <div className="content-block-section__line"></div>
                        <ul className="content-block-section__list">
                            {blocks.map(({title, text, image}, index) => (
                                <li className="content-block-item content-block-section__item" key={title || index}>
                                    {/*{index !== 0 && (*/}
                                    {/*    <div className="content-block-item__line"></div>*/}
                                    {/*)}*/}
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
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}