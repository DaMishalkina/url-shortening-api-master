import {useState, useEffect} from "react";

import {Button} from "../../components/Button/Button";

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

const API_KEY = import.meta.env.VITE_TINYURL_API_KEY;
const API_URL = "https://api.tinyurl.com/create";


export const Home = () => {
    const [inputLink, setInputLink] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const [tinyUrl, setTinyUrl] = useState("");
    const [usersUrls, setUsersUrl] = useState<{[key: string]: string}>(
        localStorage.getItem("users-urls") ?
        JSON.parse(localStorage.getItem("users-urls") || "") : null
    );
    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        }
    }
    const fetchData = async (url: string) => {
        fetch(API_URL, {
            method: "POST",
            headers: {
                accept: `application/json`,
                authorization: `Bearer ${API_KEY}`,
                'content-type': `application/json`
            },
            body: JSON.stringify({
                url: url,
                "domain": "tinyurl.com"
            })
        }).then(response => {
            if (response.status != 200) throw `Error: ${response.status}`;
            return response.json()
        })
            .then(data => {
                setTinyUrl(data.data.tiny_url);
                setUsersUrl((prevState) => {
                    const newUrls = {
                        ...prevState,
                        [url]: data.data.tiny_url
                    };
                    localStorage.setItem("users-urls", JSON.stringify(newUrls))
                    return newUrls;
                })
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        localStorage.setItem("users-urls", JSON.stringify(usersUrls));
    }, [usersUrls])
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
        <section>
            <form onSubmit={() => fetchData(inputLink)}>
                <input
                    type="text"
                    value={inputLink}
                    onInput={(e) => setInputLink(e.currentTarget.value)}
                />
                <Button type="submit">shorten</Button>
            </form>
            {usersUrls && (
                <ul>
                    {Object.entries(usersUrls).map(([lognUrl, shortUrl]) => (
                        <li key={shortUrl}>
                            {lognUrl}
                            <div>
                                {shortUrl}
                                <Button
                                    onClick={() => handleCopyClick(shortUrl)}
                                    isActive={isCopied}
                                >
                                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <span>{tinyUrl}</span>
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