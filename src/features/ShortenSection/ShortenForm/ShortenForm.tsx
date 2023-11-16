import {useEffect, useState} from "react";
import {Button} from "../../../components/Button/Button";
import {TextInput} from "../../../components/TextInput/TextInput";

import "./ShortenForm.scss";



interface Props {
    onSubmit: (urlInput: string) => void,
    inputPlaceholder?: string,
    formButtonLabel?: string,
    errorMessage?: string,
    bgImage?: {
        alt: string,
        srcSet: {
            mobile: string,
            desktop?: string
        }
    },
    isDefaultError?: boolean,
    resetError?: ()  => void
}

export const ShortenForm = ({
                                onSubmit,
                                inputPlaceholder = "",
                                formButtonLabel = "",
                                errorMessage = "",
                                bgImage,
                                isDefaultError = false, resetError}: Props) => {
    const [inputUrl, setInputUrl] = useState("");
    const [isError, setIsError] = useState(isDefaultError ? isDefaultError : false);
    const handleSubmit = () => {
        if(inputUrl.toString().length !== 0){
            onSubmit(inputUrl);
            setInputUrl("");
        } else {
            setIsError(true);
        }

    }
    useEffect(() => {
        setIsError(isDefaultError);
    }, [isDefaultError])
   return (
       <div className="shorten-section__form-wrapper">
           {bgImage && (
               <picture className="shorten-section__picture">
                   <source
                       srcSet={bgImage.srcSet.desktop}
                       media="(min-width: 1200px)"
                   />
                   <img
                       className="shorten-section__image"
                       src={bgImage.srcSet.mobile}
                       alt="Violet background image"
                   />
               </picture>
           )}
           <form
               className="shorten-form shorten-section__form-container"
               onSubmit={handleSubmit}
           >
               <TextInput
                   placeholder={inputPlaceholder}
                   isError={isError}
                   errorMessage={errorMessage}
                   defaultValue={inputUrl}
                   onChange={(input) => {
                       setInputUrl(input.toString());
                       setIsError(false);
                       resetError && resetError();
                   }}
               />
               <Button
                   className="shorten-form__button"
                   type="submit"
               >{formButtonLabel}
               </Button>
           </form>
       </div>
   )
}