import {Button, Card, CardBody, NextUIProvider, User} from "@nextui-org/react";
import {Header} from "./components/Header.tsx";
import {useState} from "react";

function App() {
    const [isSelected, setIsSelected] = useState(true)

    const switchToggleHandler = () => {
        setIsSelected(!isSelected)
    }

    return (
        <NextUIProvider>
            <main className={`${isSelected ? '' : 'dark'} text-foreground bg-background h-screen p-4`}>
                <Header
                    isSelected={isSelected}
                    switchToggleHandler={switchToggleHandler}
                />
                <section>

                    <Card>
                        <CardBody>
                            <p>Total estimated value</p>
                            <div className={'text-3xl bold'}>Sum <span className={'text-xl bold'}>Curancy</span></div>
                        </CardBody>
                    </Card>
                    <div>
                        <Button>123</Button>
                        <Button>123</Button>
                        <Button>123</Button>
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
        </NextUIProvider>


    )
}

export default App
