import {Button, Card, CardBody, User} from "@nextui-org/react";
import {ExchangeIcon} from "../icons/ExchangeIcon.tsx";
import {Display} from "../components/Display.tsx";
import {ArrowDownIcon} from "../icons/ArrowDownIcon.tsx";
import {ArrowUpIcon} from "../icons/ArrowUpIcon.tsx";
import {useQuery} from "react-query";

export const Wallet = () => {
    const fetchData = async () => {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };
    const {data} = useQuery(['dataKey'], fetchData);

    return (

        <>
            <Display/>

            <div className={'flex w-full'}>
                <Button fullWidth startContent={<ArrowUpIcon/>}>Send</Button>
                <Button fullWidth startContent={<ExchangeIcon/>}>Convert</Button>
                <Button fullWidth startContent={<ArrowDownIcon/>}>Deposit</Button>
            </div>


            <section>
                <h2>My coins</h2>

                {
                    data && data.fact
                }

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
        </>

    );
};