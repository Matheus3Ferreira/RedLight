import { LabelScheduleMenu } from 'components/molecules/LabelScheduleMenu/LabelScheduleMenu';
import './styles.css';
export function HeaderScheduleMenu() {
    const menuOptions = ['Check-in', 'Check-out', 'Adults', 'Children'];
    return (
        <div className="header-schedule-menu">
            {menuOptions.map((menu, index) => (
                <LabelScheduleMenu text={menu} key={index} />
            ))}
        </div>
    );
}
