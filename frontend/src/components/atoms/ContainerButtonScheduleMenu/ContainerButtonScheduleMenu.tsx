import './styles.css';

interface IProps {
    children: React.ReactNode;
}

export function ContainerButtonScheduleMenu({ children }: IProps) {
    return <div className="container-button-schedule-menu">{children}</div>;
}
