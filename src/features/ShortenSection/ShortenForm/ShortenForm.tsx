import {useState} from "react";
import {Button} from "../../../components/Button/Button";

import "./ShortenForm.scss";



interface Props {
    onSubmit: (urlInput: string) => void
}

export const ShortenForm = ({onSubmit}: Props) => {
    const [inputUrl, setInputUrl] = useState("");
   return (
       <form
           className="shorten-form"
           onSubmit={() => onSubmit(inputUrl)}
       >
           <label className="shorten-form__label">
               <input
                   className="shorten-form__input"
                   type="text"
                   value={inputUrl}
                   onInput={(e) => setInputUrl(e.currentTarget.value)}
               />
           </label>
           <Button type="submit">shorten</Button>
       </form>
   )
}