import { ButtonScheduleMenu } from 'components/atoms/ButtonScheduleMenu/ButtonScheduleMenu';
import { ContainerButtonScheduleMenu } from 'components/atoms/ContainerButtonScheduleMenu/ContainerButtonScheduleMenu';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IconFontAwesome } from 'components/atoms/IconFontAwesome/IconFontAwesome';
import { ValueButtonScheduleMenu } from 'components/atoms/ValueButtonScheduleMenu/ValueButtonScheduleMenu';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

interface IProps {
    icon: IconDefinition;
    value: string;
    type: string;
}

export function OptionScheduleMenu({ icon, value, type }: IProps) {
    return (
        <ContainerButtonScheduleMenu>
            {type === 'date' ? (
                <ButtonScheduleMenu type={type}>
                    <IconFontAwesome icon={icon} color="#FFF" />
                    <ValueButtonScheduleMenu value={value} />
                </ButtonScheduleMenu>
            ) : (
                <ButtonScheduleMenu type={type}>
                    <div className="icon-value-container">
                        <IconFontAwesome icon={icon} color="#FFF" />
                        <ValueButtonScheduleMenu value={value} />
                    </div>
                    <IconFontAwesome icon={faAngleDown} color="#FFF" />
                </ButtonScheduleMenu>
            )}
        </ContainerButtonScheduleMenu>
    );
}
