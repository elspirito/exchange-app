import {Avatar, Button, Card, CardBody, NextUIProvider, Switch, User} from "@nextui-org/react";
import {Header} from "./components/Header.tsx";
import {useEffect, useState} from "react";

function App() {

    const toggleTheme = (themeValue: string) => {
        alert(themeValue)
    };

    return (
        <NextUIProvider>
            <main className={'bg-slate-100 h-screen p-4'}>
                <Header/>
                <Switch defaultSelected aria-label="Automatic updates" onClick={()=> toggleTheme('test')}/>
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
                    <div className={'bg-slate-300 p-4 rounded-xl'}>
                        <User
                            name="Jane Doe"
                            description="Product Designer"
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                        />
                    </div>
                </section>

            </main>
        </NextUIProvider>


    )
}

export default App
