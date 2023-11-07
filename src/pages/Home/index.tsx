import {useState} from "react";

import {Button} from "../../components/Button/Button";


export const Home = () => {
    const [copyText, setCopyText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        }
    }
    const handleCopyClick = () => {
        copyTextToClipboard(copyText)
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
        <div>
            home
            <input type="text" value={copyText} onChange={(event) => setCopyText(event.target.value)} />
            <Button
                onClick={handleCopyClick}
                isActive={isCopied}
            >
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
            </Button>
        </div>
    )
}