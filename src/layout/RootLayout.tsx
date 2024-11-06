import {NextUIProvider} from "@nextui-org/react";
import {Header} from "./Header.tsx";
import {useState} from "react";
import {Footer} from "./Footer.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {Route, Routes, useHref, useNavigate} from "react-router-dom";
import {Wallet} from "../pages/Wallet.tsx";

export const RootLayout = () => {
    const [isSelected, setIsSelected] = useState(true)

    const switchToggleHandler = () => {
        setIsSelected(!isSelected)
    }
    const queryClient = new QueryClient();
    const navigate = useNavigate();

    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider navigate={navigate} useHref={useHref} className={`${isSelected ? '' : 'dark'} text-foreground bg-background flex flex-col h-full`}>

                <Header isSelected={isSelected} switchToggleHandler={switchToggleHandler}/>

                <main className={'flex flex-col flex-grow px-4'}>
                    <Routes>
                        <Route path="/" element={<Wallet/>} />
                        <Route path="/market" element={<div>Market</div>} />
                        <Route path="/settings" element={<div>Settings</div>} />
                    </Routes>
                </main>

                <Footer/>
            </NextUIProvider>
        </QueryClientProvider>
    )
}

