import { Dispatch, SetStateAction } from 'react';
import './styles.css';

interface IProps {
    type: string;
    children: React.ReactNode;
    index: number;
    pressedFunction: Dispatch<SetStateAction<number>>;
    buttonPressedId: number;
}

export function ButtonScheduleMenu({
    children,
    type,
    index,
    pressedFunction,
    buttonPressedId,
}: IProps) {
    return (
        <button
            className={'button-schedule-menu button-schedule-' + type}
            onClick={() => {
                if (buttonPressedId !== index) pressedFunction(index);
                else pressedFunction(-1);
            }}
        >
            {children}
        </button>
    );
}
