import './styles.css';

interface IProps {
    children: React.ReactNode;
}

export function ContainerTextLabelScheduleMenu({ children }: IProps) {
    return <div className="container-label-schedule">{children}</div>;
}
