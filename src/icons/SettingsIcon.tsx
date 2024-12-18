import {Icons} from "./Icons.types.ts";

export const SettingsIcon = ({
                                 fill = 'currentColor',
                                 size,
                                 height,
                                 width,
                                 ...props
                             } :Icons) => (
    <svg
        data-name="Settings"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size || width || 24}
        height={size || height || 24}
        {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd"
              d="M11.1987 2.5872C11.697 2.31035 12.303 2.31035 12.8013 2.5872L20.0013 6.5872C20.5251 6.87821 20.85 7.43034 20.85 8.02956V15.9704C20.85 16.5697 20.5251 17.1218 20.0013 17.4128L12.8013 21.4128C12.303 21.6896 11.697 21.6897 11.1987 21.4128L3.99869 17.4128C3.47487 17.1218 3.15 16.5697 3.15 15.9704V8.02956C3.15 7.43034 3.47487 6.87821 3.99869 6.5872L11.1987 2.5872ZM12.0728 3.89844C12.0275 3.87327 11.9725 3.87327 11.9272 3.89844L4.72715 7.89844C4.67953 7.92489 4.65 7.97509 4.65 8.02956V15.9704C4.65 16.0249 4.67953 16.0751 4.72715 16.1016L11.9272 20.1016C11.9725 20.1267 12.0275 20.1267 12.0728 20.1016L19.2728 16.1016C19.3205 16.0751 19.35 16.0249 19.35 15.9704V8.02956C19.35 7.97509 19.3205 7.92489 19.2728 7.89844L12.0728 3.89844Z"
              fill={fill}/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12ZM12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75Z"
              fill={fill}/>
    </svg>
);
