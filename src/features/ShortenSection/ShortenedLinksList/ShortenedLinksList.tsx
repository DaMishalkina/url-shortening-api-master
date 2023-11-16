import {ShortenedLink} from "./ShortenedLink/ShortenedLink";

import "./ShortenedLinksList.scss";

interface Props {
    usersLinks: {
        [key: string]: string
    },
    copyButtonLabel?: string,
    copyButtonLabelActive?: string
}


export const ShortenedLinksList = ({
                                       usersLinks,
                                       copyButtonLabel = "",
                                       copyButtonLabelActive = ""
}: Props) => {
    return (
        <ul className="links-list">
            {Object.entries(usersLinks).map(([longLink, shortLink]) => (
                <ShortenedLink
                    copyButtonLabel={copyButtonLabel}
                    copyButtonLabelActive={copyButtonLabelActive}
                    key={longLink}
                    longLink={longLink}
                    shortLink={shortLink}
                />
            ))}
        </ul>
    )
}