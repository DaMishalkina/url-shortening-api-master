import {FunctionComponent} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import layout from "../../data/layout.json";

interface Props {
    pageClassName?: string
}

export const Layout:FunctionComponent<Props> = ({pageClassName= ""}) => {
    return (
        <div className={pageClassName}>
            <Header
                logoTitle={layout?.title}
                navMenu={layout?.header?.navigationMenu}
                actionsLinks={layout?.header?.actionsLinks}
            />
            <Outlet/>
        </div>
    )
}