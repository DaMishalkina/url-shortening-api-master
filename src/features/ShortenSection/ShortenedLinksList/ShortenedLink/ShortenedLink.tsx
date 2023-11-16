import {Button} from "../../../../components/Button/Button";

import "./ShortnedLink.scss";
import {useState} from "react";


interface Props {
    longLink: string,
    shortLink: string
}

export const ShortenedLink = ({longLink, shortLink}: Props) => {
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
        <li className="links-item">
            {longLink}
            <div className="link-container links-item__container">
                {shortLink}
                <Button
                    onClick={() => handleCopyClick(shortLink)}
                    isActive={isCopied}
                >
                    <span className="link-container____link-to-copy">{isCopied ? "Copied!" : "Copy"}</span>
                </Button>
            </div>
        </li>
    )
}