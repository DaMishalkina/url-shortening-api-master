import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {NavigationList} from "../Navigation/NavigationList";
import {replaceSpaceWithUnderline} from "../../utils/replaceSpaceWithUnderline";
import {useOutsideClick} from "../../hooks/useOutsideClick";

import {NavType} from "../Navigation/types/types";

import Logo from "../../assets/logo.svg?react";

import "./Header.scss";

interface Props {
    logoTitle: string,
    navMenu?: NavType,
    actionsLinks?: string[]
    isLogged?: boolean,
}

export const Header = ({
                           logoTitle,
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
                <Logo title={`${logoTitle} Logo Icon`} />
            </Link>
            {(navMenu || actionsLinks) && (
                <div className="">
                    <label
                        aria-label="Collapse or expand the menu"
                        className="hamburger-button"
                    >
                        <input
                            aria-haspopup="true"
                            aria-expanded={isNavigationOpened}
                            className="hamburger-button__input"
                            type="checkbox"
                            onChange={() => setIsNavigationOpened(true)}
                        />
                        <span aria-hidden="true" className="hamburger-button__span"></span>
                        <span aria-hidden="true" className="hamburger-button__span"></span>
                        <span aria-hidden="true" className="hamburger-button__span"></span>
                    </label>
                    <div ref={dropDownContainerRef}>
                        {navMenu && (
                            <NavigationList navMenu={navMenu} />
                        )}
                        {!isLogged ? actionsLinks && (
                            <div>
                                {actionsLinks.map(link => (
                                    <Link to={replaceSpaceWithUnderline(link)}>{link}</Link>
                                ))}
                            </div>
                        ) : (
                          <button>Log out</button>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}