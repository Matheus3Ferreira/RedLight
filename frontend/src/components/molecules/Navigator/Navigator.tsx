import { OptionNavigator } from '../../atoms/OptionNavigator/OptionNavigator';
import './styles.css';

export function Navigator() {
    return (
        <nav className="navOptions">
            <OptionNavigator text="Quartos" link="#" />
            <OptionNavigator text="Onde estamos" link="#" />
            <OptionNavigator text="Entrar" link="#" bold={true} />
            <OptionNavigator text="Cadastrar-se" link="#" bold={true} />
        </nav>
    );
}
