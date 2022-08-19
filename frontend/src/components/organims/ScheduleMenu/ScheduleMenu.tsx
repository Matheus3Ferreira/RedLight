import { OptionScheduleMenu } from 'components/molecules/OptionScheduleMenu/OptionScheduleMenu';
import './styles.css';
import { DataScheduleOptions } from 'components/organims/ScheduleMenu/DataScheduleOptions';
import { ButtonScheduleMenuSubmit } from 'components/atoms/ButtonScheduleMenuSubmit/ButtonScheduleMenuSubmit';
import { HeaderScheduleMenu } from 'components/organims/HeaderScheduleMenu/HeaderScheduleMenu';
import { IconFontAwesome } from 'components/atoms/IconFontAwesome/IconFontAwesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function ScheduleMenu() {
    return (
        <div>
            <HeaderScheduleMenu />
            <div className="schedule-menu-container">
                {DataScheduleOptions.map((option, index) => (
                    <OptionScheduleMenu
                        icon={option.icon}
                        value={option.value}
                        type={option.type}
                        key={index}
                    />
                ))}
                <ButtonScheduleMenuSubmit>
                    <IconFontAwesome icon={faArrowRight} color="#FFF" />
                </ButtonScheduleMenuSubmit>
            </div>
        </div>
    );
}
