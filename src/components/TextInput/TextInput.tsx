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
    error?: string,
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
                              error = ""  }: Props) => {
    const [keyValue, setKeyValue] = useState(defaultValue);
    useEffect(() => {
        setKeyValue(defaultValue);
    }, [defaultValue])
    return (
        <label className="text-input-container">
            <span>
               {label}
            </span>
            <input
                name={name}
                {...(id.length > 0 && {id: id})}
                className={classNames(
                    "text-input-container__input",
                    error?.length > 0
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
            {error?.length > 0 &&
                <span className="text-input-container__error-message">
                    {error}
                </span>
            }
        </label>
    )

}