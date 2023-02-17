import { useState, createElement } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface IProps {
    date?: Date;
}
// UPDATE HERE
// NEED CUSTOMIZE BUTTON
export function DayPicker({ date }: IProps) {
    const [startDate, setStartDate] = useState(date ? date : new Date());
    const ExampleCustomInput = ({
        value,
        onClick,
    }: {
        value: string;
        onClick: (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void;
    }) => (
        <button id={'uiui'} style={{ padding: '10px' }} onClick={onClick}>
            {value} Oi
        </button>
    );

    const ExampleDatePicker = () => (
        <DatePicker
            onChange={(date: Date) => setStartDate(date)}
            customInput={createElement(ExampleCustomInput)}
        />
    );
    return <ExampleDatePicker />;
}
