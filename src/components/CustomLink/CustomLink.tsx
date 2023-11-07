import classNames from "classnames";
import {Link} from "react-router-dom";
import {ReactElement} from "react";

import "./CustomLink.scss";



interface Props {
    link: string
    children: ReactElement | string,
    className?: string,
    isLarge?: boolean
}

export const CustomLink = ({link, children, className = "", isLarge = false}: Props) => {
    return (
        <Link
            className={classNames(className, "link", isLarge && "link--large")}
            to={link}
        >
            {children}
        </Link>
    )
}