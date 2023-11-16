import {useState, useEffect} from "react";

import {ActionSection} from "../../components/ActionSection/ActionSection";
import {ContentBlockSection} from "../../components/ContentBlocksSection/ContentBlockSection";
import {HeroSection} from "../../components/HeroSection/HeroSection";
import pageContent from "../../data/pageContent.json";
import {ShortenSection} from "../../features/ShortenSection/ShortenSection";

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
    const [usersUrls, setUsersUrl] = useState<{[key: string]: string}>(
        localStorage.getItem("users-urls") ?
        JSON.parse(localStorage.getItem("users-urls") || "") : null
    );
    const [error, setError] = useState("");
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
                setUsersUrl((prevState) => {
                    const newUrls = {
                        ...prevState,
                        [url]: data.data.tiny_url
                    };
                    localStorage.setItem("users-urls", JSON.stringify(newUrls))
                    return newUrls;
                })
                resetError();
            })
            .catch(error => {
                console.error(error);
                setError(error);
            });
    }
    const resetError = () => {
        setError("");
    }
    useEffect(() => {
        localStorage.setItem("users-urls", JSON.stringify(usersUrls));
    }, [usersUrls])

    return (
        <section>
            <HeroSection
                title={pageContent?.heroSection?.title}
                text={pageContent?.heroSection?.text}
                image={pageContent?.heroSection?.image}
                link={pageContent?.heroSection?.link}
            />
            <ShortenSection
                resetError={resetError}
                isError={error.length > 0}
                defaultErrorMessage={error}
                onShorten={(url) => fetchData(url)} usersUrls={usersUrls}
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