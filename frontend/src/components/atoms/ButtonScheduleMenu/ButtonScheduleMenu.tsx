import './styles.css';

interface IProps {
    type: string;
    children: React.ReactNode;
}

export function ButtonScheduleMenu({ children, type }: IProps) {
    return (
        <button className={'button-schedule-menu button-schedule-' + type}>
            {children}
        </button>
    );
}
