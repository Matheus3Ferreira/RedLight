import {
    faCalendarAlt,
    faUser,
    faBaby,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export interface IOptionProps {
    icon: IconDefinition;
    value: string;
    type: string;
}

export const DataScheduleOptions: IOptionProps[] = [
    {
        icon: faCalendarAlt,
        value: '01/01/2023',
        type: 'date',
    },
    {
        icon: faCalendarAlt,
        value: '02/01/2023',
        type: 'date',
    },
    {
        icon: faUser,
        value: '1',
        type: 'number',
    },
    {
        icon: faBaby,
        value: '0',
        type: 'number',
    },
];
