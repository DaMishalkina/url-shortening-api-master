import {Button} from "../../../../components/Button/Button";

import "./ShortnedLink.scss";
import {useState} from "react";


interface Props {
    longLink: string,
    shortLink: string,
    copyButtonLabel?: string,
    copyButtonLabelActive?: string
}

export const ShortenedLink = ({
                                  longLink,
                                  shortLink,
                                  copyButtonLabel = "Copy",
                                  copyButtonLabelActive = "Copied!"
}: Props) => {
    const [isCopied, setIsCopied] = useState(false);
    async function copyTextToClipboard(text: string) {
        if ("clipboard" in navigator) {
            return await navigator.clipboard.writeText(text);
        }
    }
    const handleCopyClick = (linkToCopy: string) => {
        copyTextToClipboard(linkToCopy)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <li className="links-container">
            <div className="long-link-item link-item links-container__item">
                {longLink}
            </div>
            <div className="short-link-item link-item links-container__item">
                {shortLink}
                <Button
                    onClick={() => handleCopyClick(shortLink)}
                    isActive={isCopied}
                >
                    <span className="short-link-item__link-to-copy">
                        {isCopied ? copyButtonLabelActive : copyButtonLabel}
                    </span>
                </Button>
            </div>
        </li>
    )
}