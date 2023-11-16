import {useEffect, useState} from "react";

import classNames from "classnames";

import "./TextInput.scss";

interface Props {
    defaultValue: string | number,
    onChange: (value: string | number) => void,
    id?: string,
    type?: "email" | "password" | "text" | "search",
    label?: string,
    placeholder?: string,
    isError?: boolean,
    errorMessage?: string
    name?: string
}

export const TextInput = ({
                              defaultValue,
                              onChange,
                              type = "text",
                              name = "",
                              id = "",
                              placeholder = "",
                              label = "",
                              isError = false,
                              errorMessage = ""}: Props) => {
    const [keyValue, setKeyValue] = useState(defaultValue);
    useEffect(() => {
        setKeyValue(defaultValue);
    }, [defaultValue])
    return (
        <label className="text-input-container">
            {label?.length > 0 && (
                <span>
               {label}
            </span>
            )}
            <input
                name={name}
                {...(id.length > 0 && {id: id})}
                className={classNames(
                    "text-input-container__input",
                    isError
                        ? "text-input-container__input--error"
                        : ""
                )}
                type={type}
                placeholder={placeholder}
                value={keyValue}
                onChange={(event) => {
                    setKeyValue(event?.target?.value);
                    onChange && onChange(event?.target?.value);
                }}
            />
            <span className={classNames(
                "error-message text-input-container__error-message",
                isError && "error-message--active"
            )}>
                {errorMessage}
            </span>
        </label>
    )

}