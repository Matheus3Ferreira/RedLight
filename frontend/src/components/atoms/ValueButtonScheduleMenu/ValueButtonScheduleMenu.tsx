import './styles.css';

interface IProps {
    value: string;
}

export function ValueButtonScheduleMenu({ value }: IProps) {
    return <span className="button-schedule-value">{value}</span>;
}
