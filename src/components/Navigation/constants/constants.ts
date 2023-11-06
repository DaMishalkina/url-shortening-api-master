import {Features} from "../../../pages/Features";
import {Home} from "../../../pages/Home";

import {RouteItem} from "../types/types";

/*PAGES TITLE*/
export const PAGE_TITLE_FEATURES = "Features";
export const PAGE_TITLE_HOME = "Home";

export const ROUTES: Array<RouteItem> = [
    {
        key: "router-features",
        title: PAGE_TITLE_FEATURES,
        tooltip: PAGE_TITLE_FEATURES,
        path: "/features",
        enabled: true,
        component: Features,
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