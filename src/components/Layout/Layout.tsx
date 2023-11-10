import classNames from "classnames";
import {FunctionComponent} from "react";
import {Outlet} from "react-router-dom";

import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import layout from "../../data/layout.json";

import Logo from "../../assets/logo.svg?react";

import "./Layout.scss";

interface Props {
    pageClassName?: string
}

export const Layout:FunctionComponent<Props> = ({pageClassName= ""}) => {
    return (
        <div className={classNames(pageClassName, "layout")}>
            <Header
                logo={<Logo title={`${layout?.title} Logo Icon`} />}
                navMenu={layout?.header?.navigationMenu}
                actionsLinks={layout?.header?.actionsLinks}
            />
            <main className="layout__content-wrapper">
                <Outlet />
            </main>
            <Footer
                logo={<Logo className="logo--white" title={`${layout?.title} Logo Icon`} />}
                navigationMenu={layout?.footer?.navigationMenu}
                socialMedias={layout?.footer?.externalLinks}
            />
        </div>
    )
}