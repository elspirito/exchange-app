import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

import {BrowserRouter,} from "react-router-dom";
import {RootLayout} from "./layout/RootLayout.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <RootLayout />
        </BrowserRouter>
    </StrictMode>,
)
