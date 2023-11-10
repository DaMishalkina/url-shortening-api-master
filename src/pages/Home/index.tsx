import {useState} from "react";

import {Button} from "../../components/Button/Button";
import {CustomLink} from "../../components/CustomLink/CustomLink";

import pageContent from "../../data/pageContent.json";
import {HeroSection} from "../../components/HeroSection/HeroSection";


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
        <section>
            {/*<Button*/}
            {/*    onClick={handleCopyClick}*/}
            {/*    isActive={isCopied}*/}
            {/*>*/}
            {/*    <span>{isCopied ? 'Copied!' : 'Copy'}</span>*/}
            {/*</Button>*/}
            <HeroSection
                title={pageContent?.heroSection?.title}
                text={pageContent?.heroSection?.text}
                image={pageContent?.heroSection?.image}
                link={pageContent?.heroSection?.link}
            />
        </section>
    )
}