import classNames from "classnames";
import {ReactElement} from "react";

import "./Button.scss";
interface Props {
    children: ReactElement | string,
    onClick?: () => void,
    className?: string,
    isLarge?: boolean,
    isActive?: boolean
}

export const Button = ({children, onClick, className = "", isLarge = false, isActive = false}: Props) => {
    return (
        <button
            className={classNames(
                className,
                "button",
                isLarge && "button--large",
                isActive && "button--active"
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}