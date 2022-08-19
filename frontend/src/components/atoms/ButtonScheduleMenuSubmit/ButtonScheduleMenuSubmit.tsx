import './styles.css';

interface IProps {
    children: React.ReactNode;
}

export function ButtonScheduleMenuSubmit({ children }: IProps) {
    return <button className="button-schedule-menu-submit">{children}</button>;
}
