import {FunctionComponent} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";

interface Props {
    pageClassName?: string
}

export const Layout:FunctionComponent<Props> = ({pageClassName= ""}) => {
    return (
        <div className={pageClassName}>
            <Header logoTitle="Shortly" />
            <Outlet/>
        </div>
    )
}