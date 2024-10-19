import {Avatar, Button, Switch} from "@nextui-org/react";
import {MoonIcon} from "../icons/MoonIcon.tsx";
import {SunIcon} from "../icons/SunIcon.tsx";

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
                    size="lg"
                    color="default"
                    isSelected={isSelected}
                    onChange={switchToggleHandler}
                    thumbIcon={({ isSelected, className }) =>
                        isSelected ? (
                            <SunIcon className={className} />
                        ) : (
                            <MoonIcon className={className} />
                        )
                    }
                />

            </div>
        </header>
    );
};