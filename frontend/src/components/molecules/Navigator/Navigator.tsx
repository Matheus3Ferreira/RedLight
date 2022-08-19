import { OptionNavigator } from '../../atoms/OptionNavigator/OptionNavigator';
import './styles.css';

export function Navigator() {
    return (
        <nav className="navOptions">
            <OptionNavigator text="Rooms" link="#" />
            <OptionNavigator text="Where we are" link="#" />
            <OptionNavigator text="Sign In" link="#" bold={true} />
            <OptionNavigator text="Sign Up" link="#" bold={true} />
        </nav>
    );
}
