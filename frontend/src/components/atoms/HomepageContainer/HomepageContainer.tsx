import './styles.css';
import Home from '../../assets/imgs/home.png';

interface IProps {
    children: React.ReactNode;
}

export function HomepageContainer({ children }: IProps) {
    return <main className="homepage-container">{children}</main>;
}
