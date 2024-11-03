import {NextUIProvider} from "@nextui-org/react";
import {Header} from "./components/Header.tsx";
import {useState} from "react";
import {Footer} from "./components/Footer.tsx";
import {Main} from "./components/Main.tsx";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
    const [isSelected, setIsSelected] = useState(true)

    const switchToggleHandler = () => {
        setIsSelected(!isSelected)
    }
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider
                className={`${isSelected ? '' : 'dark'} text-foreground bg-background flex flex-col h-full`}>
                <Header
                    isSelected={isSelected}
                    switchToggleHandler={switchToggleHandler}
                />

                <Main/>

                <Footer/>
            </NextUIProvider>
        </QueryClientProvider>
    )
}

export default App
