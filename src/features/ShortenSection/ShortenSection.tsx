import {ShortenedLinksList} from "./ShortenedLinksList/ShortenedLinksList";
import {ShortenForm} from "./ShortenForm/ShortenForm";

import "./ShortenSection.scss";

interface Props {
    onShorten: (url: string) => void,
    usersUrls?: {[key: string]: string},
}

export const ShortenSection = ({onShorten, usersUrls}: Props) => {
    return (
        <section className="shorten-section">
            <ShortenForm onSubmit={(url: string) => onShorten(url)} />
            {usersUrls && (
                <ShortenedLinksList usersLinks={usersUrls} />
            )}
        </section>
    )
}