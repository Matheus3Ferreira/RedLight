import { ButtonScheduleMenu } from 'components/atoms/ButtonScheduleMenu/ButtonScheduleMenu';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IconFontAwesome } from 'components/atoms/IconFontAwesome/IconFontAwesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { Dispatch, SetStateAction } from 'react';

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
            {type === 'date' ? (
                <div className="container-button-schedule-menu">
                    <ButtonScheduleMenu
                        type={type}
                        index={index}
                        pressedFunction={setButtonPressed}
                        buttonPressedId={buttonPressedId}
                    >
                        <IconFontAwesome icon={icon} color="#FFF" />
                        <span className="button-schedule-value">{value}</span>
                    </ButtonScheduleMenu>
                    {buttonPressedId === index ? (
                        <div
                            style={{
                                background: '#000',
                                width: '4px',
                                height: '4px',
                            }}
                        ></div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <div className="container-button-schedule-menu">
                    <ButtonScheduleMenu
                        type={type}
                        index={index}
                        pressedFunction={setButtonPressed}
                        buttonPressedId={buttonPressedId}
                    >
                        <div className="icon-value-container">
                            <IconFontAwesome icon={icon} color="#FFF" />
                            <span className="button-schedule-value">
                                {value}
                            </span>
                        </div>
                        <IconFontAwesome icon={faAngleDown} color="#FFF" />
                    </ButtonScheduleMenu>
                    {buttonPressedId === index ? (
                        <div
                            style={{
                                background: '#000',
                                width: '4px',
                                height: '4px',
                            }}
                        ></div>
                    ) : (
                        <></>
                    )}
                </div>
            )}
        </>
    );
}
