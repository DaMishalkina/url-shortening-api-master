import pageContent from "../../data/pageContent.json";
import {ShortenedLinksList} from "./ShortenedLinksList/ShortenedLinksList";
import {ShortenForm} from "./ShortenForm/ShortenForm";

import "./ShortenSection.scss";

interface Props {
    onShorten: (url: string) => void,
    usersUrls?: {[key: string]: string}
}

export const ShortenSection = ({onShorten, usersUrls}: Props) => {
    return (
        <section className="shorten-section">
            <div className="shorten-section__container">
                <ShortenForm
                    inputPlaceholder={pageContent?.shortenFormSection?.inputPlaceholder}
                    formButtonLabel={pageContent?.shortenFormSection?.shortenButtonLabel}
                    errorMessage={pageContent?.shortenFormSection?.errorMessage}
                    onSubmit={(url: string) => onShorten(url)}
                />
                {usersUrls && (
                    <ShortenedLinksList
                        copyButtonLabel={pageContent?.shortenFormSection?.copyButtonLabel}
                        copyButtonLabelActive={pageContent?.shortenFormSection?.copyButtonLabelSucceed}
                        usersLinks={usersUrls}
                    />
                )}
            </div>
        </section>
    )
}