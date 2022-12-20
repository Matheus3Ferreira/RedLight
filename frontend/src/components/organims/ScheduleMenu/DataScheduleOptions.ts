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
        type: 'check-in',
    },
    {
        icon: faCalendarAlt,
        value: '02/01/2023',
        type: 'check-out',
    },
    {
        icon: faUser,
        value: '1',
        type: 'adults',
    },
    {
        icon: faBaby,
        value: '0',
        type: 'children',
    },
];
