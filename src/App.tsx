import {Button, Card, CardBody, NextUIProvider, User} from "@nextui-org/react";
import {Header} from "./components/Header.tsx";
import {useState} from "react";
import {Footer} from "./components/Footer.tsx";
import {ExchangeIcon} from "./icons/ExchangeIcon.tsx";
import {Main} from "./components/Main.tsx";

function App() {
    const [isSelected, setIsSelected] = useState(true)

    const switchToggleHandler = () => {
        setIsSelected(!isSelected)
    }

    return (
        <NextUIProvider className={`${isSelected ? '' : 'dark'} text-foreground bg-background flex flex-col h-full`}>
            <Header
                isSelected={isSelected}
                switchToggleHandler={switchToggleHandler}
            />

            <Main/>

            <Footer/>
        </NextUIProvider>


    )
}

export default App
