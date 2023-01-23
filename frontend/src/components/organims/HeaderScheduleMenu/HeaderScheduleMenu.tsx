import { LabelScheduleMenu } from 'components/molecules/LabelScheduleMenu/LabelScheduleMenu';
import './styles.css';
export function HeaderScheduleMenu() {
    const menuOptions = ['Check-in', 'Check-out', 'Adultos', 'Crianças'];
    return (
        <div className="header-schedule-menu">
            {menuOptions.map((menu, index) => (
                <LabelScheduleMenu text={menu} key={index} />
            ))}
        </div>
    );
}
