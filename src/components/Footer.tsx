import {Button, Card, CardBody} from "@nextui-org/react";
import {WalletIcon} from "../icons/WalletIcon.tsx";
import {SettingsIcon} from "../icons/SettingsIcon.tsx";
import {PulseIcon} from "../icons/PulseIcon.tsx";


export const Footer = () => {
    return (
        <footer>
            <Card radius={'none'} shadow={'none'}>
                <CardBody>
                    <div className={'flex flex-grow'}>
                        <Button fullWidth size={'lg'} startContent={<WalletIcon />}>Wallet</Button>
                        <Button fullWidth size={'lg'} startContent={<PulseIcon />}>Market</Button>
                        <Button fullWidth size={'lg'} startContent={<SettingsIcon />}>Settings</Button>
                    </div>
                </CardBody>
            </Card>
        </footer>
    );
};