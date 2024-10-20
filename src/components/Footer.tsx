import {Button, Card, CardBody} from "@nextui-org/react";
import {WalletIcon} from "../icons/WalletIcon.tsx";
import {SettingsIcon} from "../icons/SettingsIcon.tsx";


export const Footer = () => {
    return (
        <footer>
            <Card radius={'none'}>
                <CardBody>
                    <div className={'flex flex-grow'}>
                        <Button fullWidth size={'lg'} startContent={<WalletIcon />}>Wallet</Button>
                        <Button fullWidth size={'lg'} startContent={<WalletIcon />}>Wallet</Button>
                        <Button fullWidth size={'lg'} startContent={<SettingsIcon />}>Wallet</Button>
                    </div>
                </CardBody>
            </Card>
        </footer>
    );
};