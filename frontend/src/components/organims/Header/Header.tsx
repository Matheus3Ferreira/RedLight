import { Logo } from 'components/molecules/Logo/Logo';
import { Navigator } from '../../molecules/Navigator/Navigator';
import './styles.css';

export function Header() {
    return (
        <header>
            <Logo />
            <Navigator />
        </header>
    );
}
