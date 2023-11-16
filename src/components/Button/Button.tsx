import classNames from "classnames";
import {ReactElement} from "react";

import "./Button.scss";
interface Props {
    children: ReactElement | string,
    onClick?: () => void,
    className?: string,
    isLarge?: boolean,
    isActive?: boolean,
    type?: "button" | "submit" | "reset"
}

export const Button = ({
                           children,
                           onClick,
                           className = "",
                           isLarge = false,
                           isActive = false,
                           type = "button"
}: Props) => {
    return (
        <button
            type={type}
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