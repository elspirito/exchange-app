
import {Avatar, Button, Switch} from "@nextui-org/react";


export const Header = () => {
    return (
        <header className={'flex justify-between'}>
            <div className={'flex items-center'}>
                <Button variant={'light'}>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
                    Username
                </Button>
                <Button isIconOnly size={'sm'}>1</Button>
            </div>
            <div><Switch defaultSelected aria-label="Automatic updates"/></div>
        </header>
    );
};