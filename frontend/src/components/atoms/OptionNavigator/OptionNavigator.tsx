import './styles.css';

interface IProps {
    text: string;
    link: string;
    bold?: boolean;
}

export function OptionNavigator(props: IProps) {
    return (
        <p className={props.bold ? 'bold nav-option' : 'nav-option'}>
            {props.text}
        </p>
    );
}
