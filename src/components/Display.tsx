
import {Card, CardBody} from "@nextui-org/react";


export const Display = () => {
    return (
        <Card className={'bg-blue-100 text-black'}>
            <CardBody>
                <p>Total estimated value</p>
                <div className={'text-3xl bold'}>30 42013.43 <span className={'text-xl bold capitalize'}>USDT</span></div>
            </CardBody>
        </Card>
    );
};