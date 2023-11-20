import {ShortenedLink} from "./ShortenedLink/ShortenedLink";

import "./ShortenedLinksList.scss";

interface Props {
    usersLinks: {
        [key: string]: string
    },
    copyButtonLabel?: string,
    copyButtonLabelActive?: string,
    handleItemRemove?: (link: string) => void
}


export const ShortenedLinksList = ({
                                       usersLinks,
                                       copyButtonLabel = "",
                                       copyButtonLabelActive = "",
                                       handleItemRemove
}: Props) => {
    return (
        <ul className="links-list">
            {Object.entries(usersLinks).map(([longLink, shortLink]) => (
                <ShortenedLink
                    handleItemSwipe={handleItemRemove}
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