import { OptionScheduleMenu } from 'components/molecules/OptionScheduleMenu/OptionScheduleMenu';
import './styles.css';
import { ButtonScheduleMenuSubmit } from 'components/atoms/ButtonScheduleMenuSubmit/ButtonScheduleMenuSubmit';
import { HeaderScheduleMenu } from 'components/organims/HeaderScheduleMenu/HeaderScheduleMenu';
import { IconFontAwesome } from 'components/atoms/IconFontAwesome/IconFontAwesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {
    DataScheduleOptions,
    IOptionProps,
} from 'components/organims/ScheduleMenu/DataScheduleOptions';

export function ScheduleMenu() {
    const [buttonPressed, setButtonPressed] = useState<number>(-1);
    const [optionsData] = useState<IOptionProps[]>(DataScheduleOptions);
    return (
        <div>
            <HeaderScheduleMenu />
            <div className="schedule-menu-container">
                {optionsData.map((option, index) => {
                    return (
                        <OptionScheduleMenu
                            icon={option.icon}
                            type={option.type}
                            value={option.value}
                            key={index}
                            index={index}
                            buttonPressedId={buttonPressed}
                            setButtonPressed={setButtonPressed}
                        />
                    );
                })}
                <ButtonScheduleMenuSubmit>
                    <IconFontAwesome icon={faArrowRight} color="#FFF" />
                </ButtonScheduleMenuSubmit>
            </div>
        </div>
    );
}
