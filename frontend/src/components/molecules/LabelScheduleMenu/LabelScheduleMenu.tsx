import { TextLabelScheduleMenu } from 'components/atoms/TextLabelScheduleMenu/LabelScheduleMenu';
import './styles.css';

interface IProps {
    text: string;
}

export function LabelScheduleMenu({ text }: IProps) {
    return (
        <div className="container-label-schedule">
            <TextLabelScheduleMenu text={text} />
        </div>
    );
}
