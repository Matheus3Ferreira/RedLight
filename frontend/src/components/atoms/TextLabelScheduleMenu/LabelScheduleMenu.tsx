import './styles.css';

interface IProps {
    text: string;
}

export function TextLabelScheduleMenu({ text }: IProps) {
    return <label className="label-schedule-menu">{text}</label>;
}
