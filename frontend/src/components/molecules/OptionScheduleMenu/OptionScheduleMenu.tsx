import { ButtonScheduleMenu } from 'components/atoms/ButtonScheduleMenu/ButtonScheduleMenu';
import { ContainerButtonScheduleMenu } from 'components/atoms/ContainerButtonScheduleMenu/ContainerButtonScheduleMenu';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IconFontAwesome } from 'components/atoms/IconFontAwesome/IconFontAwesome';
import { ValueButtonScheduleMenu } from 'components/atoms/ValueButtonScheduleMenu/ValueButtonScheduleMenu';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { Dispatch, SetStateAction } from 'react';
import { DayPicker } from 'components/atoms/DayPicker/DayPicker';

interface IProps {
    icon: IconDefinition;
    type: string;
    value: string;
    index: number;
    buttonPressedId: number;
    setButtonPressed: Dispatch<SetStateAction<number>>;
}

export function OptionScheduleMenu({
    icon,
    type,
    value,
    index,
    buttonPressedId,
    setButtonPressed,
}: IProps) {
    return (
        <>
            {type === 'check-in' || type === 'check-out' ? (
                <ContainerButtonScheduleMenu>
                    <ButtonScheduleMenu
                        type={type}
                        index={index}
                        pressedFunction={setButtonPressed}
                        buttonPressedId={buttonPressedId}
                    >
                        <IconFontAwesome icon={icon} color="#FFF" />
                        <ValueButtonScheduleMenu value={value} />
                    </ButtonScheduleMenu>
                    {buttonPressedId === index ? (
                        <DayPicker
                            indexButton={index}
                            buttonPressedId={buttonPressedId}
                        />
                    ) : (
                        <></>
                    )}
                </ContainerButtonScheduleMenu>
            ) : (
                <ContainerButtonScheduleMenu>
                    <ButtonScheduleMenu
                        type={type}
                        index={index}
                        pressedFunction={setButtonPressed}
                        buttonPressedId={buttonPressedId}
                    >
                        <div className="icon-value-container">
                            <IconFontAwesome icon={icon} color="#FFF" />
                            <ValueButtonScheduleMenu value={value} />
                        </div>
                        <IconFontAwesome icon={faAngleDown} color="#FFF" />
                    </ButtonScheduleMenu>
                </ContainerButtonScheduleMenu>
            )}
        </>
    );
}
