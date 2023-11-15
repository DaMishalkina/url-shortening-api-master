import {useState} from "react";

import {Button} from "../../components/Button/Button";
import {CustomLink} from "../../components/CustomLink/CustomLink";

import {ActionSection} from "../../components/ActionSection/ActionSection";
import {ContentBlockSection} from "../../components/ContentBlocksSection/ContentBlockSection";
import {HeroSection} from "../../components/HeroSection/HeroSection";
import pageContent from "../../data/pageContent.json";

const statisticsCards = pageContent?.statisticsSection?.cards.map(card => {
    return {...card, image: {alt: card.image, src: `src/assets/${card.image}.svg`}};
})
const actionSectionBgImage = {
    alt: pageContent?.actionSection?.image,
    srcSet: {
        mobile: `src/assets/${pageContent?.actionSection?.image}-mobile.svg`,
        desktop: `src/assets/${pageContent?.actionSection?.image}-desktop.svg`
    }
}


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
            <ContentBlockSection
                title={pageContent?.statisticsSection?.title}
                text={pageContent?.statisticsSection?.text}
                blocks={statisticsCards}
            />
            <ActionSection
                title={pageContent?.actionSection?.title}
                link={pageContent?.actionSection?.link}
                bgImage={actionSectionBgImage}
            />
        </section>
    )
}