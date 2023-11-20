import {Link} from "react-router-dom";
import {ReactElement, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {NavigationList} from "../Navigation/NavigationList";
import {replaceSpaceWithUnderline} from "../../utils/replaceSpaceWithUnderline";
import {useOutsideClick} from "../../hooks/useOutsideClick";

import {NavType} from "../Navigation/types/types";

import "./Header.scss";
import {CustomLink} from "../CustomLink/CustomLink";
import {Button} from "../Button/Button";
import classNames from "classnames";

interface Props {
    logo?: ReactElement,

    navMenu?: NavType,
    actionsLinks?: string[]
    isLogged?: boolean,
}

export const Header = ({
                           logo,
                           navMenu,
                           actionsLinks,
                           isLogged = false}: Props) => {
    const [isNavigationOpened, setIsNavigationOpened] = useState(false);
    const {pathname} = useLocation();
    const dropDownContainerRef = useOutsideClick(() => {
        setIsNavigationOpened(false);
    })
    useEffect(() => {

        setIsNavigationOpened(false);
    }, [pathname])
    return (
        <header className="header">
            <Link className="header__link" to="/">
                {logo}
            </Link>
            {(navMenu || actionsLinks) && (
                <div className="header-menu header__menu" ref={dropDownContainerRef}>
                    <label
                        aria-label="Collapse or expand the menu"
                        className="hamburger-button header__button"
                    >
                        <input
                            aria-haspopup="true"
                            aria-expanded={isNavigationOpened}
                            className="hamburger-button__input"
                            type="checkbox"
                            onChange={() => setIsNavigationOpened((prevState) => !prevState)}
                        />
                        <span aria-hidden="true" className="hamburger-button__span"></span>
                        <span aria-hidden="true" className="hamburger-button__span"></span>
                        <span aria-hidden="true" className="hamburger-button__span"></span>
                    </label>
                    <div
                        className={classNames(
                            "dropdown-container header-menu__dropdown-container",
                            isNavigationOpened && "dropdown-container--active")}
                    >
                        {navMenu && (
                            <NavigationList navMenu={navMenu} />
                        )}
                        {!isLogged ? actionsLinks && (
                            <div className="dropdown-container__actions">
                                {actionsLinks.map(link => {
                                    return replaceSpaceWithUnderline(link) === "sign_up" ? (
                                        <CustomLink
                                            key={link}
                                            link={replaceSpaceWithUnderline(link)}
                                        >
                                            {link}
                                        </CustomLink>
                                    ) : (
                                        <Link
                                            className="dropdown-container__link"
                                            key={link}
                                            to={replaceSpaceWithUnderline(link)}
                                        >
                                            {link}
                                        </Link>
                                    )
                                })}
                            </div>
                        ) : (
                            <Button>Log out</Button>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}