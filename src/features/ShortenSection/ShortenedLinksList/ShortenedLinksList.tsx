import {ShortenedLink} from "./ShortenedLink/ShortenedLink";

import "./ShortenedLinksList.scss";

interface Props {
    usersLinks: {
        [key: string]: string
    }
}


export const ShortenedLinksList = ({usersLinks}: Props) => {
    return (
        <ul className="links-list">
            {Object.entries(usersLinks).map(([longLink, shortLink]) => (
                <ShortenedLink longLink={longLink} shortLink={shortLink} />
            ))}
        </ul>
    )
}