import { ContainerTextLabelScheduleMenu } from 'components/atoms/ContainerLabelScheduleMenu/ContainerLabelScheduleMenu';
import { TextLabelScheduleMenu } from 'components/atoms/TextLabelScheduleMenu/LabelScheduleMenu';

interface IProps {
    text: string;
}

export function LabelScheduleMenu({ text }: IProps) {
    return (
        <ContainerTextLabelScheduleMenu>
            <TextLabelScheduleMenu text={text} />
        </ContainerTextLabelScheduleMenu>
    );
}
