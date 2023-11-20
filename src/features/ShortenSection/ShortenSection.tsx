import pageContent from "../../data/pageContent.json";
import {ShortenedLinksList} from "./ShortenedLinksList/ShortenedLinksList";
import {ShortenForm} from "./ShortenForm/ShortenForm";

import "./ShortenSection.scss";

interface Props {
    onShorten: (url: string) => void,
    usersUrls?: {[key: string]: string},
    isError?: boolean,
    defaultErrorMessage?: string,
    resetError?: () => void,
    handleItemRemove?: (link: string) => void
}

const shortenSectionImage = {
    alt: pageContent?.shortenFormSection?.image,
    srcSet: {
        mobile: `src/assets/${pageContent?.shortenFormSection?.image}-mobile.svg`,
        desktop: `src/assets/${pageContent?.shortenFormSection?.image}-desktop.svg`
    }
}


export const ShortenSection = ({
                                   onShorten,
                                   usersUrls,
                                   isError = false,
                                   defaultErrorMessage,
                                   resetError,
                                   handleItemRemove}: Props) => {
    return (
        <section className="shorten-section">
            <div className="shorten-section__background"></div>
            <div className="shorten-section__container">
                <ShortenForm
                    bgImage={shortenSectionImage}
                    inputPlaceholder={pageContent?.shortenFormSection?.inputPlaceholder}
                    formButtonLabel={pageContent?.shortenFormSection?.shortenButtonLabel}
                    isDefaultError={isError}
                    errorMessage={
                    defaultErrorMessage
                        ? defaultErrorMessage
                        : pageContent?.shortenFormSection?.errorMessage}
                    onSubmit={(url: string) => onShorten(url)}
                    resetError={resetError}
                />
                {usersUrls && (
                    <ShortenedLinksList
                        handleItemRemove={handleItemRemove}
                        copyButtonLabel={pageContent?.shortenFormSection?.copyButtonLabel}
                        copyButtonLabelActive={pageContent?.shortenFormSection?.copyButtonLabelSucceed}
                        usersLinks={usersUrls}
                    />
                )}
            </div>
        </section>
    )
}