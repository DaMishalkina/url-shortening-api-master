import {AnyPage} from "../../../pages/AnyPage";
import {Home} from "../../../pages/Home";


import {RouteItem} from "../types/types";

/*PAGES TITLE*/
export const PAGE_TITLE_ANY_PAGE = "Any page";
export const PAGE_TITLE_HOME = "Home";

export const ROUTES: Array<RouteItem> = [
    {
        key: "router-any-page",
        title: PAGE_TITLE_ANY_PAGE,
        tooltip: PAGE_TITLE_ANY_PAGE,
        path: "/:id",
        enabled: true,
        component: AnyPage,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-any-page",
        title: PAGE_TITLE_ANY_PAGE,
        tooltip: PAGE_TITLE_ANY_PAGE,
        path: "/:id/:id",
        enabled: true,
        component: AnyPage,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-home",
        title: PAGE_TITLE_HOME,
        tooltip: PAGE_TITLE_HOME,
        path: "/",
        enabled: true,
        component: Home,
        appendDivider: true,
        type: "guest"
    }
]