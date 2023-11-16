import {useState} from "react";
import {Button} from "../../../components/Button/Button";
import {TextInput} from "../../../components/TextInput/TextInput";

import "./ShortenForm.scss";



interface Props {
    onSubmit: (urlInput: string) => void,
    inputPlaceholder?: string,
    formButtonLabel?: string,
    errorMessage?: string
}

export const ShortenForm = ({
                                onSubmit,
                                inputPlaceholder = "",
                                formButtonLabel = "",
                                errorMessage = ""}: Props) => {
    const [inputUrl, setInputUrl] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = () => {
        if(inputUrl.toString().length !== 0){
            onSubmit(inputUrl);
            setInputUrl("");
        } else {
            setError(errorMessage);
        }

    }
   return (
       <form
           className="shorten-form"
           onSubmit={handleSubmit}
       >
          <TextInput
              placeholder={inputPlaceholder}
              error={error}
              defaultValue={inputUrl}
              onChange={(input) => {
                  setInputUrl(input.toString())
                  setError("")
              }}
          />
           <Button type="submit">{formButtonLabel}</Button>
       </form>
   )
}