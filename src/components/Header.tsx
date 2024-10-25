import {
    Avatar,
    Button,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Switch
} from "@nextui-org/react";
import {MoonIcon} from "../icons/MoonIcon.tsx";
import {SunIcon} from "../icons/SunIcon.tsx";
import {CaretDownIcon} from "../icons/CaretDownIcon.tsx";
import {ShareIcon} from "../icons/ShareIcon.tsx";

type Props = {
    isSelected: boolean
    switchToggleHandler: ()=>void
}

export const Header = ({isSelected, switchToggleHandler}: Props) => {



    return (
        <header className={'flex justify-between p-4'}>
            <ButtonGroup variant="flat">
                <Button> <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />user</Button>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Button isIconOnly>
                            <CaretDownIcon/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Merge options"
                        selectionMode="single"
                        className="max-w-[300px]"
                    >
                        <DropdownItem key="merge">
                           321
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>
            <div className={'flex items-center'}>
                <Switch
                    defaultSelected
                    size="lg"
                    color="default"
                    isSelected={isSelected}
                    onChange={switchToggleHandler}
                    thumbIcon={({ isSelected, className }) =>
                        isSelected ? (
                            <SunIcon className={className} size={'16'} />
                        ) : (
                            <MoonIcon className={className} size={'16'} />
                        )
                    }
                />

                <Button isIconOnly size={'sm'}><ShareIcon/></Button>

            </div>
        </header>
    );
};