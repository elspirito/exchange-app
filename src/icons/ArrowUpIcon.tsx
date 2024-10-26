import {Icons} from "./Icons.types.ts";

export const ArrowUpIcon = ({
                                fill = 'currentColor',
                                size,
                                height,
                                width,
                                ...props
                            } :Icons) => (
    <svg
        data-name="ArrowUp"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size || width || 24}
        height={size || height || 24}
        {...props}
    >
        <path
            d="M8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303C7.17678 10.2374 7.17678 9.76256 7.46967 9.46967L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967L16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303C16.2374 10.8232 15.7626 10.8232 15.4697 10.5303L12.75 7.81066L12.75 17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5L11.25 7.81066L8.53033 10.5303Z"
            fill={fill}/>
    </svg>
);
