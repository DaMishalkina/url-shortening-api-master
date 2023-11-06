import {Link} from "react-router-dom";
import {ReactElement, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";

import {NavigationList} from "../Navigation/NavigationList";
// import {useOutsideClick} from "../../hooks/useOutsideClick";

import {NavType} from "../Navigation/types/types";

import Logo from "../../assets/logo.svg?react";

import "./Header.scss";

interface Props {
    logoTitle: string,
    // navMenu?: NavType,
    isLogged?: boolean,
    cartItemsNumber?: number,
    cartDropdown?: ReactElement
}

const NAVIGATION_MENU = ["Features"]

export const Header = ({
                           logoTitle,
                           // navMenu,
                           isLogged = false,
                           cartItemsNumber = 0,
                           cartDropdown}: Props) => {
    // const [isNavigationOpened, setIsNavigationOpened] = useState(false);
    // const {pathname} = useLocation();
    // const navigationContainerRef = useOutsideClick(() => {
    //     setIsNavigationOpened(false);
    // })
    // useEffect(() => {
    //
    //     setIsNavigationOpened(false);
    // }, [pathname])
    return (
        <header className="header">
            <div className="header__item">
                <Link className="header__label" to="/">
                    <Logo title={`${logoTitle} Logo Icon`} />
                </Link>
                <NavigationList navMenu={NAVIGATION_MENU} />
            </div>
        </header>
    )
}