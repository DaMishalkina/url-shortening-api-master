import classNames from "classnames";

import "./Button.scss";
import {ReactElement} from "react";
interface Props {
    children: ReactElement,
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