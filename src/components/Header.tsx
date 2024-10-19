import {Avatar, Button, Switch} from "@nextui-org/react";

type Props = {
    isSelected: boolean
    switchToggleHandler: ()=>void
}

export const Header = ({isSelected, switchToggleHandler}: Props) => {




    return (
        <header className={'flex justify-between'}>
            <div className={'flex items-center'}>
                <Button variant={'light'}>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
                    Username
                </Button>
                <Button isIconOnly size={'sm'}>1</Button>
            </div>
            <div>
                <Switch
                    defaultSelected
                    size="md"
                    color="primary"
                    isSelected={isSelected}
                    onClick={switchToggleHandler}
                />

            </div>
        </header>
    );
};