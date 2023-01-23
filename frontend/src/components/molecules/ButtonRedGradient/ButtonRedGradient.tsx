import './styles.css';

interface IProps {
    children: string;
}

export function ButtonRedGradient({ children, ...rest }: IProps) {
    return (
        <button className="red-gradient-button" {...rest}>
            {children}
        </button>
    );
}
