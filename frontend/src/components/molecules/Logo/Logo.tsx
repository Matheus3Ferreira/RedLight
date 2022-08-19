import { TitleLogo } from 'components/atoms/TitleLogo/TitleLogo';
import { LogoIcon } from '../../atoms/LogoIcon/LogoIcon';
import './styles.css';

export function Logo() {
    return (
        <div className="logo">
            <LogoIcon />
            <TitleLogo />
        </div>
    );
}
