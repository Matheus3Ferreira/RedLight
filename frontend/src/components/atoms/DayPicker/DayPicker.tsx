import { useEffect, useRef, useState } from 'react';
import DatePicker from 'sassy-datepicker';
import './styles.css';

interface IProps {
    indexButton: number;
    buttonPressedId: number;
}

export function DayPicker({ indexButton, buttonPressedId }: IProps) {
    const isEnabledClassName = useRef<string>('disabled-date-picker');

    useEffect(() => {
        isEnabledClassName.current =
            indexButton === buttonPressedId
                ? 'enabled-date-picker'
                : 'disabled-date-picker';
    }, [buttonPressedId, indexButton]);

    const [date, setDate] = useState(new Date());

    const onChange = (newDate: Date) => {
        setDate(newDate);
    };

    return (
        <DatePicker
            minDate={new Date()}
            onChange={onChange}
            value={date}
            className={isEnabledClassName.current}
        />
    );
}
