import {Button, Card, CardBody, NextUIProvider, User} from "@nextui-org/react";
import {Header} from "./components/Header.tsx";
import {useState} from "react";
import {Footer} from "./components/Footer.tsx";
import {ExchangeIcon} from "./icons/ExchangeIcon.tsx";

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
            <main className={'flex flex-col flex-grow px-4'}>
                <section>

                    <Card className={'bg-blue-100 text-black'}>
                        <CardBody>
                            <p>Total estimated value</p>
                            <div className={'text-3xl bold'}>Sum <span className={'text-xl bold'}>Curancy</span></div>
                        </CardBody>
                    </Card>
                    <div className={'flex w-full'}>
                        <Button fullWidth startContent={<ExchangeIcon/>}>Send</Button>
                        <Button fullWidth startContent={<ExchangeIcon/>}>Convert</Button>
                        <Button fullWidth startContent={<ExchangeIcon/>}>Deposit</Button>
                    </div>
                </section>
                <section>
                    <h2>My coins</h2>
                    <Card>
                        <CardBody>
                            <User
                                name="Jane Doe"
                                description="Product Designer"
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                }}
                            />
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <User
                                name="Jane Doe"
                                description="Product Designer"
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                }}
                            />
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <User
                                name="Jane Doe"
                                description="Product Designer"
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                }}
                            />
                        </CardBody>
                    </Card>

                </section>
            </main>

            <Footer/>
        </NextUIProvider>


    )
}

export default App
