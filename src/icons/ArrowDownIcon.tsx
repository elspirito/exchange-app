import {Icons} from "./Icons.types.ts";

export const ArrowDownIcon = ({
                                  fill = 'currentColor',
                                  size,
                                  height,
                                  width,
                                  ...props
                              } :Icons) => (
    <svg
        data-name="ArrowDown"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size || width || 24}
        height={size || height || 24}
        {...props}
    >
        <path
            d="M12.75 16.1893L15.4697 13.4697C15.7626 13.1768 16.2374 13.1768 16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303L12.5303 18.5303C12.2374 18.8232 11.7626 18.8232 11.4697 18.5303L7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697C7.76256 13.1768 8.23744 13.1768 8.53033 13.4697L11.25 16.1893L11.25 6.5C11.25 6.08579 11.5858 5.75 12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5L12.75 16.1893Z"
            fill={fill}/>
    </svg>
);
