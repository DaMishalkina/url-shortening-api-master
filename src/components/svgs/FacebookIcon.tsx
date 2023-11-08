import {SvgType} from "./types/types";

export const FacebookIcon = ({
                              width = "24",
                              height = "24",
                              className = "",
                              title = "Facebook Square Icon",
                              color = "currentColor"}: SvgType) => {
    return (
        <svg
            viewBox="0 0 448 512"
            role="img"
            className={className}
            width={width}
            height={height}
            fill={color}
            xmlns="http://www.w3.org/2000/svg">
            <title>{title}</title>
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
        </svg>
    )
}